/* global process */
import test from 'tape';
import fmt from '../lib';

const excelOpts = { dateSpanLarge: false, dateErrorNumber: false };

test('options cascade:', t => {
  const initialOptions = fmt.options();
  t.is(typeof initialOptions, 'object');
  // default behaviour
  fmt.options({ ...excelOpts, overflow: '⏰' });
  t.is(fmt('yyyy')(-1), '⏰', 'default option can be set');
  t.is(fmt('yyyy')(-1, { locale: 'fr' }), '⏰', 'default option (with other options)');
  // keep construction time behaviour
  t.is(fmt('yyyy', { overflow: '👻' })(-1), '👻', 'construction option overrides default');
  t.is(fmt('yyyy', { overflow: '👻' })(-1, { locale: 'fr' }), '👻', 'construction option overrides default (with other options)');
  // runtime override
  t.is(fmt('yyyy')(-1, { overflow: '👻' }), '👻', 'call argument option');
  t.is(fmt('yyyy', { overflow: '👻' })(-1, { overflow: '🧵' }), '🧵', 'call option overrides construction option');
  // resets
  fmt.options({ overflow: null });
  t.is(fmt('yyyy')(-1), '######', 'can reset top default option');
  fmt.options({ overflow: '🐞' });
  t.is(fmt('yyyy')(-1), '🐞', 'default option set again');
  fmt.options(null);
  t.is(fmt('yyyy')(-1, excelOpts), '######', 'can reset all global options');
  t.end();
});

test('option: overflow', t => {
  const opts = { ...excelOpts, overflow: '🦆' };
  fmt.options(opts);
  t.is(fmt('yyyy')(-1), '🦆', 'default can be set');
  fmt.options(null);
  t.is(fmt('yyyy', opts)(-1), '🦆', 'option can be set at construction time');
  t.is(fmt('yyyy')(-1, opts), '🦆', 'option can be set at call time');
  t.end();
});

test('option: locale', t => {
  fmt.options({ locale: 'fi' });
  t.is(fmt('mmmm')(2000), 'kesäkuuta', 'default can be set');
  fmt.options(null);
  t.is(fmt('mmmm', { locale: 'fi' })(2000), 'kesäkuuta', 'option can be set at construction time');
  t.is(fmt('mmmm')(2000, { locale: 'fi' }), 'kesäkuuta', 'option can be set at call time');
  t.end();
});

test('option: throws', t => {
  fmt.options({ throws: false });
  t.is(fmt('h #')(0), '######', 'default can be set');
  // FIXME
  // t.is(fmt('h #')(), '######', 'default can be set');
  fmt.options(null);
  t.is(fmt('h #', { throws: false })(0), '######', 'option can be set at construction time');
  t.end();
});

test('option: invalid', t => {
  fmt.options({ invalid: '🦂', throws: false });
  t.is(fmt('h #')(0), '🦂', 'default can be set');
  fmt.options({ invalid: null });
  t.is(fmt('h #', { invalid: '🦂' })(0), '🦂', 'option can be set at construction time');
  t.is(fmt('h #')(0, { invalid: '🦂' }), '🦂', 'option can be set at call time');
  fmt.options(null);
  t.end();
});

test('option: leap1900', t => {
  t.is(fmt('yyyy-mm-dd')(60, { leap1900: true }), '1900-02-29', 'unset');
  fmt.options({ leap1900: false });
  t.is(fmt('yyyy-mm-dd')(60), '1900-02-28', 'default can be set');
  fmt.options({ leap1900: null });
  t.is(fmt('yyyy-mm-dd', { leap1900: false })(60), '1900-02-28', 'option can be set at construction time');
  t.is(fmt('yyyy-mm-dd')(60, { leap1900: false }), '1900-02-28', 'option can be set at call time');
  fmt.options(null);
  t.end();
});

test('option: dateErrorThrows', t => {
  fmt.options({ ...excelOpts, dateErrorThrows: true });
  t.throws(() => fmt('yyyy')(-1), 'default can be set');
  fmt.options(excelOpts);
  t.throws(() => fmt('yyyy', { dateErrorThrows: true })(-1), 'option can be set at construction time');
  t.throws(() => fmt('yyyy')(-1, { dateErrorThrows: true }), 'option can be set at call time');
  t.throws(() => fmt('yyyy', { dateSpanLarge: true, dateErrorThrows: true })(-694325), 'option can be set at construction time');
  t.throws(() => fmt('yyyy')(-694325, { dateSpanLarge: true, dateErrorThrows: true }), 'option can be set at call time');
  fmt.options(null);
  t.end();
});

test('option: dateErrorNumber', t => {
  t.is(fmt('yyyy', excelOpts)(2958465), '9999', 'default');
  t.is(fmt('yyyy', excelOpts)(2958466), '######', 'default');
  fmt.options({ ...excelOpts, dateErrorNumber: true });
  t.is(fmt('yyyy')(2958466), '2958466', 'default can be set');
  t.is(fmt('yyyy')(-1), '-1', 'default can be set');
  fmt.options(excelOpts);
  t.is(fmt('yyyy', { dateErrorNumber: true })(2958466.9), '2958466.9', 'option can be set at construction time');
  t.is(fmt('yyyy')(2958466.9, { dateErrorNumber: true }), '2958466.9', 'option can be set at call time');
  fmt.options(null);
  t.end();
});

test('option: nbsp', t => {
  const spaceFmt = '???0" ". 0??';
  t.is(fmt(spaceFmt)(1), '   1 . 0  ', 'default');
  fmt.options({ nbsp: false });
  t.is(fmt(spaceFmt)(1), '   1 . 0  ', 'default can be set');
  fmt.options(null);
  t.is(fmt(spaceFmt, { nbsp: false })(1), '   1 . 0  ', 'option can be set at construction time');
  t.is(fmt(spaceFmt)(1, { nbsp: false }), '   1 . 0  ', 'option can be set at call time');
  t.end();
});

test('options work for .format too:', t => {
  t.is(fmt.format('yyyy', -1, { ...excelOpts, overflow: '🐢' }), '🐢', '.format + overflow');
  t.is(fmt.format('mmmm', 1, { locale: 'fr' }), 'janvier', '.format + locale');
  t.is(fmt.format('mmmm', 1, 'fr'), 'janvier', '.format with old-stlye locale arg');
  t.end();
});

// this test is flaky at best in node versions < 14 so only run it in 14+
if (parseInt(process.version.replace(/^v/, ''), 10) >= 14) {
  test('option: ignoreTimezone', t => {
    process.env.TZ = 'Asia/Calcutta';
    const baseDate = new Date(2000, 0, 1);
    t.is(baseDate.toUTCString(), 'Fri, 31 Dec 1999 18:30:00 GMT', 'Date has a timezone');
    const gmtStr = 'ddd, dd mmm yyyy hh:mm:ss "GMT"';
    t.is(fmt.format(gmtStr, baseDate), 'Sat, 01 Jan 2000 00:00:00 GMT', 'No setting');
    t.is(fmt.format(gmtStr, baseDate, { ignoreTimezone: true }), 'Fri, 31 Dec 1999 18:30:00 GMT', 'True');
    t.is(fmt.format(gmtStr, baseDate, { ignoreTimezone: false }), 'Sat, 01 Jan 2000 00:00:00 GMT', 'False');
    t.end();
  });
}

