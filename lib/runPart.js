import round from './round';
import dec2frac from './dec2frac';
import general from './general';
import { toYMD } from './toYMD';
import { defaultLocale } from './locale';
import {
  u_HOUR, u_MIN, u_SEC, u_DSEC, u_CSEC, u_MSEC,
  EPOCH_1317,
  MIN_DATE, MAX_DATE,
  _numchars
} from './constants';

const short_to_long = {
  int: 'integer',
  frac: 'fraction',
  man: 'mantissa',
  num: 'numerator',
  den: 'denominator'
};

export function runPart (value, part, l10n_) {
  let mantissa = '';
  let numerator = '';
  let denominator = '';
  let fraction = '';
  let integer = '';
  let exp = 0;

  let date = value | 0;
  let time = 0;
  let year = 0;
  let month = 1;
  let day = 0;
  let weekday = 0;
  let hour = 0;
  let minute = 0;
  let second = 0;
  let subsec = 0;

  const l10n = l10n_ || defaultLocale;

  // scale number
  if (!part.text && isFinite(part.scale) && part.scale !== 1) {
    value *= part.scale;
  }
  // calc exponent
  if (part.exponential) {
    let v = Math.abs(value);
    if (v) {
      exp = Math.floor(Math.log(v) / Math.LN10);
    }
    if (part.int_max > 1) {
      exp = Math.floor(exp / part.int_max) * part.int_max;
    }
    v = (exp < 0) ? v * Math.pow(10, -exp) : v / Math.pow(10, exp);
    value = (value < 0) ? -v : v;
    mantissa += Math.abs(exp);
  }
  // integer to text
  if (part.integer) {
    const i = Math.abs(round(value, part.fractions ? 1 : part.frac_max));
    integer += (i < 1) ? '' : Math.floor(i);
  }

  // grouping
  if (part.grouping) {
    let gtmp = '';
    let ipos = integer.length;
    if (ipos > part.group_pri) {
      ipos -= part.group_pri;
      gtmp = l10n.group + integer.slice(ipos, ipos + part.group_pri) + gtmp;
    }
    while (ipos > part.group_sec) {
      ipos -= part.group_sec;
      gtmp = l10n.group + integer.slice(ipos, ipos + part.group_sec) + gtmp;
    }
    integer = ipos ? integer.slice(0, ipos) + gtmp : gtmp;
  }

  // fraction to text
  if (part.dec_fractions) {
    fraction = String(round(value, part.frac_max)).split('.')[1] || '';
  }

  // using fractions
  let have_fraction = false;
  if (part.fractions) {
    const _dec = Math.abs(part.integer ? value % 1 : value);
    if (_dec) {
      have_fraction = true;
      if (isFinite(part.denominator)) {
        // predefined denominator
        denominator += part.denominator;
        numerator += round(_dec * part.denominator);
        if (numerator === '0') {
          numerator = '';
          denominator = '';
          have_fraction = false;
          if (!integer) {
            integer = '0';
          }
        }
      }
      else {
        const nmax = (part.integer) ? part.num_max : Infinity;
        const frt = dec2frac(_dec, nmax, part.den_max);
        numerator += frt[0];
        denominator += frt[1];
        if (part.integer) {
          if (numerator === '0') {
            if (!integer) {
              integer = '0';
            }
            numerator = '';
            denominator = '';
            have_fraction = false;
          }
        }
      }
    }
  }

  // using date/time
  if (part.date_eval && (value < MIN_DATE || value > MAX_DATE)) {
    // if value is out of bounds and formatting is date Excel emits "#########" (full cell)
    // this does not happen, if the only date tokens are elapsed time
    // This copies the TEXT function which emits a #VALUE! error
    throw new Error('Date out of bounds');
  }
  else if (part.date) {
    date = (value | 0);
    const t = 86400 * (value - date);
    time = Math.floor(t); // in seconds

    // "epsilon" correction
    // subsec = 86400 * (value - date) - time;
    subsec = t - time;
    if (Math.abs(subsec) < 1e-6) { // 0.000001
      subsec = 0;
    }
    else if (subsec > 0.9999) {
      subsec = 0;
      time += 1;
      if (time === 86400) {
        time = 0;
        date += 1;
      }
    }

    // serial date/time to gregorian calendar
    if (date || part.date_system) {
      const dout = toYMD(value, part.date_system);
      year = dout[0];
      month = dout[1];
      day = dout[2];
    }
    if (time || subsec) {
      // round time based on smallest used unit
      const minU = part.date & u_MSEC || part.date & u_CSEC || part.date & u_DSEC ||
                   part.date & u_SEC || part.date & u_MIN || part.date & u_HOUR;

      if (minU === u_MSEC) {
        // this is rounded based on the display rounding of subsec
        if (subsec > 0.9995) {
          time++;
          subsec = 0;
        }
      }
      else if (minU === u_CSEC) {
        if (subsec > 0.995) {
          time++;
          subsec = 0;
        }
      }
      else if (minU === u_DSEC) {
        if (subsec > 0.95) {
          time++;
          subsec = 0;
        }
      }
      else if (minU === u_SEC) {
        if (subsec >= 0.5) { time++; }
        // subsec = 0; // does this matter?
      }
      else if (minU === u_MIN) {
        if (subsec >= 0.5) { time++; }
        // subsec = 0; // does this matter?
      }
      else if (minU === u_HOUR) {
        if (subsec >= 0.5) { time++; }
        // subsec = 0; // does this matter?
      }

      second = Math.floor(time) % 60;
      minute = Math.floor(time / 60) % 60;
      hour = Math.floor((time / 60) / 60) % 60;
    }
    weekday = (6 + date) % 7;
  }

  // integer padding
  if (part.int_padding) {
    integer = (part.int_padding.length === 1)
      ? integer || part.int_padding
      : part.int_padding.substring(0, part.int_padding.length - integer.length) + integer;
  }
  // numerator padding
  if (part.num_padding) {
    numerator = (part.num_padding.length === 1)
      ? numerator || part.num_padding
      : part.num_padding.substring(0, part.num_padding.length - numerator.length) + numerator;
  }
  // denominator padding
  if (part.den_padding) {
    denominator = (part.den_padding.length === 1)
      ? denominator || part.den_padding
      : denominator + part.den_padding.slice(denominator.length);
  }
  // fraction padding
  const fraction_pad = part.frac_padding;
  // mantissa padding
  if (part.man_padding) {
    const m_sign = (part.exp_plus) ? '+' : '';
    mantissa = (part.man_padding.length === 1)
      ? (exp < 0 ? '-' : m_sign) + (mantissa || part.man_padding)
      : (exp < 0 ? '-' : m_sign) + part.man_padding.slice(0, part.man_padding.length - mantissa.length) + mantissa;
  }

  const ret = [];
  let integer_bits_counter = 0;
  const counter = { int: 0, frac: 0, man: 0, num: 0, den: 0 };
  for (let ti = 0, tl = part.tokens.length; ti < tl; ti++) {
    const tok = part.tokens[ti];
    const len = tok.num ? tok.num.length : 0;

    if (tok.type === 'string') {
      // special rules may apply if next or prev is numerator or denominator
      if (tok.rule) {
        if (tok.rule === 'num') {
          if (have_fraction) {
            ret.push(tok.value);
          }
          else if (part.num_min > 0 || part.den_min > 0) {
            ret.push(tok.value.replace(/./g, _numchars['?']));
          }
          else {
            ret.push('');
          }
        }
        else if (tok.rule === 'num+int') {
          if (have_fraction && integer) {
            ret.push(tok.value);
          }
          else if ((part.den_min > 0) && (integer || part.num_min)) {
            ret.push(tok.value.replace(/./g, _numchars['?']));
          }
          else {
            ret.push('');
          }
        }
        else if (tok.rule === 'den') {
          if (have_fraction) {
            ret.push(tok.value);
          }
          else if (part.den_min > 0 || part.den_min > 0) {
            ret.push(tok.value.replace(/./g, _numchars['?']));
          }
          else {
            ret.push('');
          }
        }
      }
      else {
        ret.push(tok.value);
      }
    }
    else if (tok.type === 'point') {
      // Excel always emits a period
      ret.push(l10n.decimal);
    }
    else if (tok.type === 'general') {
      general(ret, part, value, l10n);
    }
    else if (tok.type === 'exp') {
      ret.push(l10n.exponent);
    }
    else if (tok.type === 'minus') {
      ret.push(l10n.negative);
    }
    else if (tok.type === 'plus') {
      ret.push(l10n.positive);
    }
    else if (tok.type === 'text') {
      ret.push(value);
    }
    else if (tok.type === 'div') {
      if (have_fraction) {
        ret.push('/');
      }
      else if (part.num_min > 0 || part.den_min > 0) {
        ret.push(_numchars['?']);
      }
      else {
        ret.push(_numchars['#']);
      }
    }
    else if (tok.type === 'int') {
      if (part.int_pattern.length === 1) { // number isn't fragmented
        ret.push(integer);
      }
      else {
        const c_s = (!integer_bits_counter)
          ? Infinity
          : part.int_pattern.join('').length - counter.int;
        const c_e = (integer_bits_counter === part.int_pattern.length - 1)
          ? 0
          : part.int_pattern.join('').length - (counter.int + tok.num.length);
        ret.push(integer.substring(integer.length - c_s, integer.length - c_e));
        integer_bits_counter++;
        counter.int += tok.num.length;
      }
    }
    else if (tok.type === 'frac') {
      if (part.frac_pattern.length === 1) {
        // number isn't fragmented...
        ret.push(
          (fraction_pad.length < 2)
            ? fraction || fraction_pad
            : fraction + fraction_pad.slice(fraction.length)
        );
      }
      else {
        ret.push(fraction.slice(counter.frac, counter.frac + len));
        counter.frac += len;
      }
    }
    else if (tok.type in short_to_long) {
      if (part[tok.type + '_pattern'].length === 1) {
        // number isn't fragmented
        if (tok.type === 'int') {
          ret.push(integer);
        }
        if (tok.type === 'frac') {
          ret.push(fraction);
        }
        if (tok.type === 'man') {
          ret.push(mantissa);
        }
        if (tok.type === 'num') {
          ret.push(numerator);
        }
        if (tok.type === 'den') {
          ret.push(denominator);
        }
      }
      else {
        ret.push(short_to_long[tok.type].slice(counter[tok.type], counter[tok.type] + len));
        counter[tok.type] += len;
      }
    }
    else if (tok.type === 'year') {
      ret.push(year);
    }
    else if (tok.type === 'year-short') {
      const y = year % 100;
      ret.push(y < 10 ? '0' : '', y);
    }
    else if (tok.type === 'month') {
      ret.push((tok.pad && month < 10 ? '0' : ''), month);
    }
    else if (tok.type === 'monthname-single') {
      // This is what Excel does.
      // The Vietnamese list goes from ["Tháng 1", "Tháng 2", ... ] to [ "T", "T", ... ]
      // Simplified Chinese goes from [ 1月, ... 9月, 10月, 11月, 12月 ] to [ 1, ... 9, 1, 1, 1 ]
      if (part.date_system === EPOCH_1317) {
        ret.push(l10n.mmmm6[month - 1].charAt(0));
      }
      else {
        ret.push(l10n.mmmm[month - 1].charAt(0));
      }
    }
    else if (tok.type === 'monthname-short') {
      if (part.date_system === EPOCH_1317) {
        ret.push(l10n.mmm6[month - 1]);
      }
      else {
        ret.push(l10n.mmm[month - 1]);
      }
    }
    else if (tok.type === 'monthname') {
      if (part.date_system === EPOCH_1317) {
        ret.push(l10n.mmmm6[month - 1]);
      }
      else {
        ret.push(l10n.mmmm[month - 1]);
      }
    }
    else if (tok.type === 'weekday-short') {
      ret.push(l10n.ddd[weekday]);
    }
    else if (tok.type === 'weekday') {
      ret.push(l10n.dddd[weekday]);
    }
    else if (tok.type === 'day') {
      ret.push((tok.pad && day < 10 ? '0' : ''), day);
    }
    else if (tok.type === 'hour') {
      const h = hour % part.clock || (part.clock < 24 ? part.clock : 0);
      ret.push((tok.pad && h < 10 ? '0' : ''), h);
    }
    else if (tok.type === 'min') {
      ret.push((tok.pad && minute < 10 ? '0' : ''), minute);
    }
    else if (tok.type === 'sec') {
      ret.push((tok.pad && second < 10 ? '0' : ''), second);
    }
    else if (tok.type === 'subsec') {
      ret.push(l10n.decimal);
      // decimals is pre-determined by longest subsec token
      // but the number emitted is per-token
      const f = subsec.toFixed(part.sec_decimals);
      ret.push(f.slice(2, 2 + tok.decimals));
    }
    else if (tok.type === 'am') {
      const idx = hour < 12 ? 0 : 1;
      if (tok.short && !l10n_) {
        ret.push('AP'[idx]);
      }
      else {
        ret.push(l10n.ampm[idx]);
      }
    }
    else if (tok.type === 'hour-elap') {
      ret.push(String(Math.abs(date * 24 + hour)).padStart(tok.pad, '0'));
    }
    else if (tok.type === 'min-elap') {
      ret.push(String(Math.abs(date * 1440 + hour * 60 + minute)).padStart(tok.pad, '0'));
    }
    else if (tok.type === 'sec-elap') {
      ret.push(String(Math.abs(time + date * 86400)).padStart(tok.pad, '0'));
    }
    else if (tok.type === 'b-year') {
      ret.push(year + 543);
    }
    else if (tok.type === 'b-year-short') {
      const y = (year + 543) % 100;
      ret.push(y < 10 ? '0' : '', y);
    }
  }
  return ret.join('');
}