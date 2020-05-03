import test from 'tape';
import fmt from '../lib';

test(t => {

  t.ok(typeof fmt('" Excellent"') === 'function', '" Excellent"');
  t.ok(typeof fmt('" Fair"') === 'function', '" Fair"');
  t.ok(typeof fmt('" Good"') === 'function', '" Good"');
  t.ok(typeof fmt('" Poor"') === 'function', '" Poor"');
  t.ok(typeof fmt('" Very Good"') === 'function', '" Very Good"');
  t.ok(typeof fmt('"$"#,##0') === 'function', '"$"#,##0');
  t.ok(typeof fmt('"$"#,##0.00') === 'function', '"$"#,##0.00');
  t.ok(typeof fmt('"$"#,##0.00_);[Red]\\("$"#,##0.00\\)') === 'function', '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)');
  t.ok(typeof fmt('"$"#,##0.00_);\\("$"#,##0.00\\)') === 'function', '"$"#,##0.00_);\\("$"#,##0.00\\)');
  t.ok(typeof fmt('"$"#,##0;[Red]\\-"$"#,##0') === 'function', '"$"#,##0;[Red]\\-"$"#,##0');
  t.ok(typeof fmt('"$"#,##0_);[Red]\\("$"#,##0\\)') === 'function', '"$"#,##0_);[Red]\\("$"#,##0\\)');
  t.ok(typeof fmt('"$"#,##0_);\\("$"#,##0\\)') === 'function', '"$"#,##0_);\\("$"#,##0\\)');
  t.ok(typeof fmt('"Haha!"\\ @\\ "Yeah!"') === 'function', '"Haha!"\\ @\\ "Yeah!"');
  t.ok(typeof fmt('"TRUE";"TRUE";"FALSE"') === 'function', '"TRUE";"TRUE";"FALSE"');
  t.ok(typeof fmt('"True";"True";"False";@') === 'function', '"True";"True";"False";@');
  t.ok(typeof fmt('"Years: "0') === 'function', '"Years: "0');
  t.ok(typeof fmt('"Yes";"Yes";"No";@') === 'function', '"Yes";"Yes";"No";@');
  t.ok(typeof fmt('"kl "hh:mm:ss;@') === 'function', '"kl "hh:mm:ss;@');
  t.ok(typeof fmt('"£"#,##0.00') === 'function', '"£"#,##0.00');
  t.ok(typeof fmt('"£"#,##0;[Red]\\-"£"#,##0') === 'function', '"£"#,##0;[Red]\\-"£"#,##0');
  t.ok(typeof fmt('"€"#,##0.00') === 'function', '"€"#,##0.00');
  t.ok(typeof fmt('"€"\\ #,##0.00_-') === 'function', '"€"\\ #,##0.00_-');
  t.ok(typeof fmt('"上午/下午 "hh"時"mm"分"ss"秒 "') === 'function', '"上午/下午 "hh"時"mm"分"ss"秒 "');
  t.ok(typeof fmt('"￥"#,##0.00;"￥"\\-#,##0.00') === 'function', '"￥"#,##0.00;"￥"\\-#,##0.00');
  t.ok(typeof fmt('#') === 'function', '#');
  t.ok(typeof fmt('# ?/?') === 'function', '# ?/?');
  t.ok(typeof fmt('# ??/??') === 'function', '# ??/??');
  t.ok(typeof fmt('#" "?/?') === 'function', '#" "?/?');
  t.ok(typeof fmt('#" "??/??') === 'function', '#" "??/??');
  t.ok(typeof fmt('#"abded"\\ ??/??') === 'function', '#"abded"\\ ??/??');
  t.ok(typeof fmt('###0.00;-###0.00') === 'function', '###0.00;-###0.00');
  t.ok(typeof fmt('###0;-###0') === 'function', '###0;-###0');
  t.ok(typeof fmt('##0.0E+0') === 'function', '##0.0E+0');
  t.ok(typeof fmt('#,##0') === 'function', '#,##0');
  t.ok(typeof fmt('#,##0 ;(#,##0)') === 'function', '#,##0 ;(#,##0)');
  t.ok(typeof fmt('#,##0 ;[Red](#,##0)') === 'function', '#,##0 ;[Red](#,##0)');
  t.ok(typeof fmt('#,##0"р.";[Red]\\-#,##0"р."') === 'function', '#,##0"р.";[Red]\\-#,##0"р."');
  t.ok(typeof fmt('#,##0.0') === 'function', '#,##0.0');
  t.ok(typeof fmt('#,##0.00') === 'function', '#,##0.00');
  t.ok(typeof fmt('#,##0.00 "�"') === 'function', '#,##0.00 "�"');
  t.ok(typeof fmt('#,##0.00 €;-#,##0.00 €') === 'function', '#,##0.00 €;-#,##0.00 €');
  t.ok(typeof fmt('#,##0.00"р.";[Red]\\-#,##0.00"р."') === 'function', '#,##0.00"р.";[Red]\\-#,##0.00"р."');
  t.ok(typeof fmt('#,##0.000') === 'function', '#,##0.000');
  t.ok(typeof fmt('#,##0.0000') === 'function', '#,##0.0000');
  t.ok(typeof fmt('#,##0.00000') === 'function', '#,##0.00000');
  t.ok(typeof fmt('#,##0.000000') === 'function', '#,##0.000000');
  t.ok(typeof fmt('#,##0.0000000') === 'function', '#,##0.0000000');
  t.ok(typeof fmt('#,##0.00000000') === 'function', '#,##0.00000000');
  t.ok(typeof fmt('#,##0.000000000') === 'function', '#,##0.000000000');
  t.ok(typeof fmt('#,##0.00000000;[Red]#,##0.00000000') === 'function', '#,##0.00000000;[Red]#,##0.00000000');
  t.ok(typeof fmt('#,##0.0000_ ') === 'function', '#,##0.0000_ ');
  t.ok(typeof fmt('#,##0.000_ ') === 'function', '#,##0.000_ ');
  t.ok(typeof fmt('#,##0.000_);\\(#,##0.000\\)') === 'function', '#,##0.000_);\\(#,##0.000\\)');
  t.ok(typeof fmt('#,##0.00;(#,##0.00)') === 'function', '#,##0.00;(#,##0.00)');
  t.ok(typeof fmt('#,##0.00;(#,##0.00);0.00') === 'function', '#,##0.00;(#,##0.00);0.00');
  t.ok(typeof fmt('#,##0.00;[Red](#,##0.00)') === 'function', '#,##0.00;[Red](#,##0.00)');
  t.ok(typeof fmt('#,##0.00;[Red]\\(#,##0.00\\)') === 'function', '#,##0.00;[Red]\\(#,##0.00\\)');
  t.ok(typeof fmt('#,##0.00;\\(#,##0.00\\)') === 'function', '#,##0.00;\\(#,##0.00\\)');
  t.ok(typeof fmt('#,##0.00[$₹-449]_);\\(#,##0.00[$₹-449]\\)') === 'function', '#,##0.00[$₹-449]_);\\(#,##0.00[$₹-449]\\)');
  t.ok(typeof fmt('#,##0.00\\ "р."') === 'function', '#,##0.00\\ "р."');
  t.ok(typeof fmt('#,##0.00\\ "р.";[Red]\\-#,##0.00\\ "р."') === 'function', '#,##0.00\\ "р.";[Red]\\-#,##0.00\\ "р."');
  t.ok(typeof fmt('#,##0.00\\ [$€-407]') === 'function', '#,##0.00\\ [$€-407]');
  t.ok(typeof fmt('#,##0.00\\ [$€-40C]') === 'function', '#,##0.00\\ [$€-40C]');
  t.ok(typeof fmt('#,##0.00_);\\(#,##0.00\\)') === 'function', '#,##0.00_);\\(#,##0.00\\)');
  t.ok(typeof fmt('#,##0.00_р_.;[Red]\\-#,##0.00_р_.') === 'function', '#,##0.00_р_.;[Red]\\-#,##0.00_р_.');
  t.ok(typeof fmt('#,##0.00_р_.;\\-#,##0.00_р_.') === 'function', '#,##0.00_р_.;\\-#,##0.00_р_.');
  t.ok(typeof fmt('#,##0.0;[Red]#,##0.0') === 'function', '#,##0.0;[Red]#,##0.0');
  t.ok(typeof fmt('#,##0.0_ ;\\-#,##0.0\\ ') === 'function', '#,##0.0_ ;\\-#,##0.0\\ ');
  t.ok(typeof fmt('#,##0.0_);[Red]\\(#,##0.0\\)') === 'function', '#,##0.0_);[Red]\\(#,##0.0\\)');
  t.ok(typeof fmt('#,##0.0_);\\(#,##0.0\\)') === 'function', '#,##0.0_);\\(#,##0.0\\)');
  t.ok(typeof fmt('#,##0;\\-#,##0;0') === 'function', '#,##0;\\-#,##0;0');
  t.ok(typeof fmt('#,##0\\ "р.";[Red]\\-#,##0\\ "р."') === 'function', '#,##0\\ "р.";[Red]\\-#,##0\\ "р."');
  t.ok(typeof fmt('#,##0\\ "р.";\\-#,##0\\ "р."') === 'function', '#,##0\\ "р.";\\-#,##0\\ "р."');
  t.ok(typeof fmt('#,##0\\ ;[Red]\\(#,##0\\)') === 'function', '#,##0\\ ;[Red]\\(#,##0\\)');
  t.ok(typeof fmt('#,##0\\ ;\\(#,##0\\)') === 'function', '#,##0\\ ;\\(#,##0\\)');
  t.ok(typeof fmt('#,##0_ ') === 'function', '#,##0_ ');
  t.ok(typeof fmt('#,##0_ ;[Red]\\-#,##0\\ ') === 'function', '#,##0_ ;[Red]\\-#,##0\\ ');
  t.ok(typeof fmt('#,##0_);[Red]\\(#,##0\\)') === 'function', '#,##0_);[Red]\\(#,##0\\)');
  t.ok(typeof fmt('#,##0_р_.;[Red]\\-#,##0_р_.') === 'function', '#,##0_р_.;[Red]\\-#,##0_р_.');
  t.ok(typeof fmt('#,##0_р_.;\\-#,##0_р_.') === 'function', '#,##0_р_.;\\-#,##0_р_.');
  t.ok(typeof fmt('#.0000,,') === 'function', '#.0000,,');
  t.ok(typeof fmt('#0') === 'function', '#0');
  t.ok(typeof fmt('#0.00') === 'function', '#0.00');
  t.ok(typeof fmt('#0.0000') === 'function', '#0.0000');
  t.ok(typeof fmt('#\\ ?/10') === 'function', '#\\ ?/10');
  t.ok(typeof fmt('#\\ ?/2') === 'function', '#\\ ?/2');
  t.ok(typeof fmt('#\\ ?/4') === 'function', '#\\ ?/4');
  t.ok(typeof fmt('#\\ ?/8') === 'function', '#\\ ?/8');
  t.ok(typeof fmt('#\\ ?/?') === 'function', '#\\ ?/?');
  t.ok(typeof fmt('#\\ ??/100') === 'function', '#\\ ??/100');
  t.ok(typeof fmt('#\\ ??/100;[Red]\\(#\\ ??/16\\)') === 'function', '#\\ ??/100;[Red]\\(#\\ ??/16\\)');
  t.ok(typeof fmt('#\\ ??/16') === 'function', '#\\ ??/16');
  t.ok(typeof fmt('#\\ ??/??') === 'function', '#\\ ??/??');
  t.ok(typeof fmt('#\\ ??/?????????') === 'function', '#\\ ??/?????????');
  t.ok(typeof fmt('#\\ ???/???') === 'function', '#\\ ???/???');
  t.ok(typeof fmt('**\\ #,###,#00,000.00,**') === 'function', '**\\ #,###,#00,000.00,**');
  t.ok(typeof fmt('0') === 'function', '0');
  t.ok(typeof fmt('0"abde".0"??"000E+00') === 'function', '0"abde".0"??"000E+00');
  t.ok(typeof fmt('0%') === 'function', '0%');
  t.ok(typeof fmt('0.0') === 'function', '0.0');
  t.ok(typeof fmt('0.0%') === 'function', '0.0%');
  t.ok(typeof fmt('0.00') === 'function', '0.00');
  t.ok(typeof fmt('0.00"°"') === 'function', '0.00"°"');
  t.ok(typeof fmt('0.00%') === 'function', '0.00%');
  t.ok(typeof fmt('0.000') === 'function', '0.000');
  t.ok(typeof fmt('0.000%') === 'function', '0.000%');
  t.ok(typeof fmt('0.0000') === 'function', '0.0000');
  t.ok(typeof fmt('0.000000') === 'function', '0.000000');
  t.ok(typeof fmt('0.00000000') === 'function', '0.00000000');
  t.ok(typeof fmt('0.000000000') === 'function', '0.000000000');
  t.ok(typeof fmt('0.000000000%') === 'function', '0.000000000%');
  t.ok(typeof fmt('0.00000000000') === 'function', '0.00000000000');
  t.ok(typeof fmt('0.000000000000000') === 'function', '0.000000000000000');
  t.ok(typeof fmt('0.00000000E+00') === 'function', '0.00000000E+00');
  t.ok(typeof fmt('0.0000E+00') === 'function', '0.0000E+00');
  t.ok(typeof fmt('0.00;[Red]0.00') === 'function', '0.00;[Red]0.00');
  t.ok(typeof fmt('0.00E+00') === 'function', '0.00E+00');
  t.ok(typeof fmt('0.00_);[Red]\\(0.00\\)') === 'function', '0.00_);[Red]\\(0.00\\)');
  t.ok(typeof fmt('0.00_);\\(0.00\\)') === 'function', '0.00_);\\(0.00\\)');
  t.ok(typeof fmt('0.0_ ') === 'function', '0.0_ ');
  t.ok(typeof fmt('00.00.00.000') === 'function', '00.00.00.000');
  t.ok(typeof fmt('00.000%') === 'function', '00.000%');
  t.ok(typeof fmt('0000') === 'function', '0000');
  t.ok(typeof fmt('00000') === 'function', '00000');
  t.ok(typeof fmt('00000000') === 'function', '00000000');
  t.ok(typeof fmt('000000000') === 'function', '000000000');
  t.ok(typeof fmt('00000\\-0000') === 'function', '00000\\-0000');
  t.ok(typeof fmt('00000\\-00000') === 'function', '00000\\-00000');
  t.ok(typeof fmt('000\\-00\\-0000') === 'function', '000\\-00\\-0000');
  t.ok(typeof fmt('0;[Red]0') === 'function', '0;[Red]0');
  t.ok(typeof fmt('0\\-00000\\-00000\\-0') === 'function', '0\\-00000\\-00000\\-0');
  t.ok(typeof fmt('0_);[Red]\\(0\\)') === 'function', '0_);[Red]\\(0\\)');
  t.ok(typeof fmt('0_);\\(0\\)') === 'function', '0_);\\(0\\)');
  t.ok(typeof fmt('@') === 'function', '@');
  t.ok(typeof fmt('A/P') === 'function', 'A/P');
  t.ok(typeof fmt('AM/PM') === 'function', 'AM/PM');
  t.ok(typeof fmt('AM/PMh"時"mm"分"ss"秒";@') === 'function', 'AM/PMh"時"mm"分"ss"秒";@');
  t.ok(typeof fmt('D') === 'function', 'D');
  t.ok(typeof fmt('DD') === 'function', 'DD');
  t.ok(typeof fmt('DD/MM/YY;@') === 'function', 'DD/MM/YY;@');
  t.ok(typeof fmt('DD/MM/YYYY') === 'function', 'DD/MM/YYYY');
  t.ok(typeof fmt('DD/MM/YYYY;@') === 'function', 'DD/MM/YYYY;@');
  t.ok(typeof fmt('DDD') === 'function', 'DDD');
  t.ok(typeof fmt('DDDD') === 'function', 'DDDD');
  t.ok(typeof fmt('DDDD", "MMMM\\ DD", "YYYY') === 'function', 'DDDD", "MMMM\\ DD", "YYYY');
  t.ok(typeof fmt('GENERAL') === 'function', 'GENERAL');
  t.ok(typeof fmt('General') === 'function', 'General');
  t.ok(typeof fmt('H') === 'function', 'H');
  t.ok(typeof fmt('H:MM:SS\\ AM/PM') === 'function', 'H:MM:SS\\ AM/PM');
  t.ok(typeof fmt('HH:MM') === 'function', 'HH:MM');
  t.ok(typeof fmt('HH:MM:SS\\ AM/PM') === 'function', 'HH:MM:SS\\ AM/PM');
  t.ok(typeof fmt('HHM') === 'function', 'HHM');
  t.ok(typeof fmt('HHMM') === 'function', 'HHMM');
  t.ok(typeof fmt('HH[MM]') === 'function', 'HH[MM]');
  t.ok(typeof fmt('HH[M]') === 'function', 'HH[M]');
  t.ok(typeof fmt('M/D/YYYY') === 'function', 'M/D/YYYY');
  t.ok(typeof fmt('M/D/YYYY\\ H:MM') === 'function', 'M/D/YYYY\\ H:MM');
  t.ok(typeof fmt('MM/DD/YY') === 'function', 'MM/DD/YY');
  t.ok(typeof fmt('S') === 'function', 'S');
  t.ok(typeof fmt('SS') === 'function', 'SS');
  t.ok(typeof fmt('YY') === 'function', 'YY');
  t.ok(typeof fmt('YYM') === 'function', 'YYM');
  t.ok(typeof fmt('YYMM') === 'function', 'YYMM');
  t.ok(typeof fmt('YYMMM') === 'function', 'YYMMM');
  t.ok(typeof fmt('YYMMMM') === 'function', 'YYMMMM');
  t.ok(typeof fmt('YYMMMMM') === 'function', 'YYMMMMM');
  t.ok(typeof fmt('YYYY') === 'function', 'YYYY');
  t.ok(typeof fmt('YYYY-MM-DD HH:MM:SS') === 'function', 'YYYY-MM-DD HH:MM:SS');
  t.ok(typeof fmt('YYYY\\-MM\\-DD') === 'function', 'YYYY\\-MM\\-DD');
  t.ok(typeof fmt('[$$-409]#,##0') === 'function', '[$$-409]#,##0');
  t.ok(typeof fmt('[$$-409]#,##0.00') === 'function', '[$$-409]#,##0.00');
  t.ok(typeof fmt('[$$-409]#,##0.00_);[Red]\\([$$-409]#,##0.00\\)') === 'function', '[$$-409]#,##0.00_);[Red]\\([$$-409]#,##0.00\\)');
  t.ok(typeof fmt('[$$-C09]#,##0.00') === 'function', '[$$-C09]#,##0.00');
  t.ok(typeof fmt('[$-100042A]h:mm:ss\\ AM/PM;@') === 'function', '[$-100042A]h:mm:ss\\ AM/PM;@');
  t.ok(typeof fmt('[$-1010409]0.000%') === 'function', '[$-1010409]0.000%');
  t.ok(typeof fmt('[$-1010409]General') === 'function', '[$-1010409]General');
  t.ok(typeof fmt('[$-1010409]d/m/yyyy\\ h:mm\\ AM/PM;@') === 'function', '[$-1010409]d/m/yyyy\\ h:mm\\ AM/PM;@');
  t.ok(typeof fmt('[$-1010409]dddd, mmmm dd, yyyy') === 'function', '[$-1010409]dddd, mmmm dd, yyyy');
  t.ok(typeof fmt('[$-1010409]m/d/yyyy') === 'function', '[$-1010409]m/d/yyyy');
  t.ok(typeof fmt('[$-1409]h:mm:ss\\ AM/PM;@') === 'function', '[$-1409]h:mm:ss\\ AM/PM;@');
  t.ok(typeof fmt('[$-2000000]h:mm:ss;@') === 'function', '[$-2000000]h:mm:ss;@');
  t.ok(typeof fmt('[$-2010401]d/mm/yyyy\\ h:mm\\ AM/PM;@') === 'function', '[$-2010401]d/mm/yyyy\\ h:mm\\ AM/PM;@');
  t.ok(typeof fmt('[$-4000439]h:mm:ss\\ AM/PM;@') === 'function', '[$-4000439]h:mm:ss\\ AM/PM;@');
  t.ok(typeof fmt('[$-4010439]d/m/yyyy\\ h:mm\\ AM/PM;@') === 'function', '[$-4010439]d/m/yyyy\\ h:mm\\ AM/PM;@');
  t.ok(typeof fmt('[$-409]AM/PM\\ hh:mm:ss;@') === 'function', '[$-409]AM/PM\\ hh:mm:ss;@');
  t.ok(typeof fmt('[$-409]d/m/yyyy\\ hh:mm;@') === 'function', '[$-409]d/m/yyyy\\ hh:mm;@');
  t.ok(typeof fmt('[$-409]d\\-mmm;@') === 'function', '[$-409]d\\-mmm;@');
  t.ok(typeof fmt('[$-409]d\\-mmm\\-yy;@') === 'function', '[$-409]d\\-mmm\\-yy;@');
  t.ok(typeof fmt('[$-409]d\\-mmm\\-yyyy;@') === 'function', '[$-409]d\\-mmm\\-yyyy;@');
  t.ok(typeof fmt('[$-409]dd/mm/yyyy\\ hh:mm;@') === 'function', '[$-409]dd/mm/yyyy\\ hh:mm;@');
  t.ok(typeof fmt('[$-409]dd\\-mmm\\-yy;@') === 'function', '[$-409]dd\\-mmm\\-yy;@');
  t.ok(typeof fmt('[$-409]h:mm:ss\\ AM/PM;@') === 'function', '[$-409]h:mm:ss\\ AM/PM;@');
  t.ok(typeof fmt('[$-409]h:mm\\ AM/PM;@') === 'function', '[$-409]h:mm\\ AM/PM;@');
  t.ok(typeof fmt('[$-409]m/d/yy\\ h:mm\\ AM/PM;@') === 'function', '[$-409]m/d/yy\\ h:mm\\ AM/PM;@');
  t.ok(typeof fmt('[$-409]mmm\\-yy;@') === 'function', '[$-409]mmm\\-yy;@');
  t.ok(typeof fmt('[$-409]mmmm\\ d\\,\\ yyyy;@') === 'function', '[$-409]mmmm\\ d\\,\\ yyyy;@');
  t.ok(typeof fmt('[$-409]mmmm\\-yy;@') === 'function', '[$-409]mmmm\\-yy;@');
  t.ok(typeof fmt('[$-409]mmmmm;@') === 'function', '[$-409]mmmmm;@');
  t.ok(typeof fmt('[$-409]mmmmm\\-yy;@') === 'function', '[$-409]mmmmm\\-yy;@');
  t.ok(typeof fmt('[$-40E]h\\ "óra"\\ m\\ "perckor"\\ AM/PM;@') === 'function', '[$-40E]h\\ "óra"\\ m\\ "perckor"\\ AM/PM;@');
  t.ok(typeof fmt('[$-412]AM/PM\\ h"시"\\ mm"분"\\ ss"초";@') === 'function', '[$-412]AM/PM\\ h"시"\\ mm"분"\\ ss"초";@');
  t.ok(typeof fmt('[$-41C]h:mm:ss\\.AM/PM;@') === 'function', '[$-41C]h:mm:ss\\.AM/PM;@');
  t.ok(typeof fmt('[$-449]hh:mm:ss\\ AM/PM;@') === 'function', '[$-449]hh:mm:ss\\ AM/PM;@');
  t.ok(typeof fmt('[$-44E]hh:mm:ss\\ AM/PM;@') === 'function', '[$-44E]hh:mm:ss\\ AM/PM;@');
  t.ok(typeof fmt('[$-44F]hh:mm:ss\\ AM/PM;@') === 'function', '[$-44F]hh:mm:ss\\ AM/PM;@');
  t.ok(typeof fmt('[$-D000409]h:mm\\ AM/PM;@') === 'function', '[$-D000409]h:mm\\ AM/PM;@');
  t.ok(typeof fmt('[$-D010000]d/mm/yyyy\\ h:mm\\ "น.";@') === 'function', '[$-D010000]d/mm/yyyy\\ h:mm\\ "น.";@');
  t.ok(typeof fmt('[$-F400]h:mm:ss\\ AM/PM') === 'function', '[$-F400]h:mm:ss\\ AM/PM');
  t.ok(typeof fmt('[$-F800]dddd\\,\\ mmmm\\ dd\\,\\ yyyy') === 'function', '[$-F800]dddd\\,\\ mmmm\\ dd\\,\\ yyyy');
  t.ok(typeof fmt('[$AUD]\\ #,##0.00') === 'function', '[$AUD]\\ #,##0.00');
  t.ok(typeof fmt('[$RD$-1C0A]#,##0.00;[Red]\\-[$RD$-1C0A]#,##0.00') === 'function', '[$RD$-1C0A]#,##0.00;[Red]\\-[$RD$-1C0A]#,##0.00');
  t.ok(typeof fmt('[$SFr.-810]\\ #,##0.00_);[Red]\\([$SFr.-810]\\ #,##0.00\\)') === 'function', '[$SFr.-810]\\ #,##0.00_);[Red]\\([$SFr.-810]\\ #,##0.00\\)');
  t.ok(typeof fmt('[$£-809]#,##0.00;[Red][$£-809]#,##0.00') === 'function', '[$£-809]#,##0.00;[Red][$£-809]#,##0.00');
  t.ok(typeof fmt('[$¥-411]#,##0.00') === 'function', '[$¥-411]#,##0.00');
  t.ok(typeof fmt('[$¥-804]#,##0.00') === 'function', '[$¥-804]#,##0.00');
  t.ok(typeof fmt('[<0]"";0%') === 'function', '[<0]"";0%');
  t.ok(typeof fmt('[<=9999999]###\\-####;\\(###\\)\\ ###\\-####') === 'function', '[<=9999999]###\\-####;\\(###\\)\\ ###\\-####');
  t.ok(typeof fmt('[=0]?;#,##0.00') === 'function', '[=0]?;#,##0.00');
  t.ok(typeof fmt('[=0]?;0%') === 'function', '[=0]?;0%');
  t.ok(typeof fmt('[=0]?;[<4.16666666666667][hh]:mm:ss;[hh]:mm') === 'function', '[=0]?;[<4.16666666666667][hh]:mm:ss;[hh]:mm');
  t.ok(typeof fmt('[>999999]#,,"M";[>999]#,"K";#') === 'function', '[>999999]#,,"M";[>999]#,"K";#');
  t.ok(typeof fmt('[>999999]#.000,,"M";[>999]#.000,"K";#.000') === 'function', '[>999999]#.000,,"M";[>999]#.000,"K";#.000');
  t.ok(typeof fmt("[>=100000]0.000\\ \\\";[Red]0.000\\ \\<\\ \\>\\ \\\"\\ \\&\\ \\'\\ ") === 'function', "[>=100000]0.000\\ \\\";[Red]0.000\\ \\<\\ \\>\\ \\\"\\ \\&\\ \\'\\ ");
  t.ok(typeof fmt('[>=100000]0.000\\ \\<;[Red]0.000\\ \\>') === 'function', '[>=100000]0.000\\ \\<;[Red]0.000\\ \\>');
  t.ok(typeof fmt('[BLACK]@') === 'function', '[BLACK]@');
  t.ok(typeof fmt('[BLUE]GENERAL') === 'function', '[BLUE]GENERAL');
  t.ok(typeof fmt('[Black]@') === 'function', '[Black]@');
  t.ok(typeof fmt('[Blue]General') === 'function', '[Blue]General');
  t.ok(typeof fmt('[CYAN]@') === 'function', '[CYAN]@');
  t.ok(typeof fmt('[Cyan]@') === 'function', '[Cyan]@');
  t.ok(typeof fmt('[DBNum1][$-804]AM/PMh"时"mm"分";@') === 'function', '[DBNum1][$-804]AM/PMh"时"mm"分";@');
  t.ok(typeof fmt('[DBNum1][$-804]General') === 'function', '[DBNum1][$-804]General');
  t.ok(typeof fmt('[DBNum1][$-804]h"时"mm"分";@') === 'function', '[DBNum1][$-804]h"时"mm"分";@');
  t.ok(typeof fmt('[ENG][$-1004]dddd\\,\\ d\\ mmmm\\,\\ yyyy;@') === 'function', '[ENG][$-1004]dddd\\,\\ d\\ mmmm\\,\\ yyyy;@');
  t.ok(typeof fmt('[ENG][$-101040D]d\\ mmmm\\ yyyy;@') === 'function', '[ENG][$-101040D]d\\ mmmm\\ yyyy;@');
  t.ok(typeof fmt('[ENG][$-101042A]d\\ mmmm\\ yyyy;@') === 'function', '[ENG][$-101042A]d\\ mmmm\\ yyyy;@');
  t.ok(typeof fmt('[ENG][$-140C]dddd\\ "YeahWoo!"\\ ddd\\ mmmm\\ yyyy;@') === 'function', '[ENG][$-140C]dddd\\ "YeahWoo!"\\ ddd\\ mmmm\\ yyyy;@');
  t.ok(typeof fmt('[ENG][$-2C0A]dddd\\ d" de "mmmm" de "yyyy;@') === 'function', '[ENG][$-2C0A]dddd\\ d" de "mmmm" de "yyyy;@');
  t.ok(typeof fmt('[ENG][$-402]dd\\ mmmm\\ yyyy\\ "г.";@') === 'function', '[ENG][$-402]dd\\ mmmm\\ yyyy\\ "г.";@');
  t.ok(typeof fmt('[ENG][$-403]dddd\\,\\ d" / "mmmm" / "yyyy;@') === 'function', '[ENG][$-403]dddd\\,\\ d" / "mmmm" / "yyyy;@');
  t.ok(typeof fmt('[ENG][$-405]d\\.\\ mmmm\\ yyyy;@') === 'function', '[ENG][$-405]d\\.\\ mmmm\\ yyyy;@');
  t.ok(typeof fmt('[ENG][$-408]d\\ mmmm\\ yyyy;@') === 'function', '[ENG][$-408]d\\ mmmm\\ yyyy;@');
  t.ok(typeof fmt('[ENG][$-409]d\\-mmm;@') === 'function', '[ENG][$-409]d\\-mmm;@');
  t.ok(typeof fmt('[ENG][$-409]d\\-mmm\\-yy;@') === 'function', '[ENG][$-409]d\\-mmm\\-yy;@');
  t.ok(typeof fmt('[ENG][$-409]d\\-mmm\\-yyyy;@') === 'function', '[ENG][$-409]d\\-mmm\\-yyyy;@');
  t.ok(typeof fmt('[ENG][$-409]dd\\-mmm\\-yy;@') === 'function', '[ENG][$-409]dd\\-mmm\\-yy;@');
  t.ok(typeof fmt('[ENG][$-409]mmm\\-yy;@') === 'function', '[ENG][$-409]mmm\\-yy;@');
  t.ok(typeof fmt('[ENG][$-409]mmmm\\ d\\,\\ yyyy;@') === 'function', '[ENG][$-409]mmmm\\ d\\,\\ yyyy;@');
  t.ok(typeof fmt('[ENG][$-409]mmmm\\-yy;@') === 'function', '[ENG][$-409]mmmm\\-yy;@');
  t.ok(typeof fmt('[ENG][$-40B]d\\.\\ mmmm\\t\\a\\ yyyy;@') === 'function', '[ENG][$-40B]d\\.\\ mmmm\\t\\a\\ yyyy;@');
  t.ok(typeof fmt('[ENG][$-40C]d/mmm/yyyy;@') === 'function', '[ENG][$-40C]d/mmm/yyyy;@');
  t.ok(typeof fmt('[ENG][$-40E]yyyy/\\ mmmm\\ d\\.;@') === 'function', '[ENG][$-40E]yyyy/\\ mmmm\\ d\\.;@');
  t.ok(typeof fmt('[ENG][$-40F]dd\\.\\ mmmm\\ yyyy;@') === 'function', '[ENG][$-40F]dd\\.\\ mmmm\\ yyyy;@');
  t.ok(typeof fmt('[ENG][$-410]d\\ mmmm\\ yyyy;@') === 'function', '[ENG][$-410]d\\ mmmm\\ yyyy;@');
  t.ok(typeof fmt('[ENG][$-415]d\\ mmmm\\ yyyy;@') === 'function', '[ENG][$-415]d\\ mmmm\\ yyyy;@');
  t.ok(typeof fmt('[ENG][$-416]d\\ \\ mmmm\\,\\ yyyy;@') === 'function', '[ENG][$-416]d\\ \\ mmmm\\,\\ yyyy;@');
  t.ok(typeof fmt('[ENG][$-418]d\\ mmmm\\ yyyy;@') === 'function', '[ENG][$-418]d\\ mmmm\\ yyyy;@');
  t.ok(typeof fmt('[ENG][$-41A]d\\.\\ mmmm\\ yyyy\\.;@') === 'function', '[ENG][$-41A]d\\.\\ mmmm\\ yyyy\\.;@');
  t.ok(typeof fmt('[ENG][$-41B]d\\.\\ mmmm\\ yyyy;@') === 'function', '[ENG][$-41B]d\\.\\ mmmm\\ yyyy;@');
  t.ok(typeof fmt('[ENG][$-41D]"den "\\ d\\ mmmm\\ yyyy;@') === 'function', '[ENG][$-41D]"den "\\ d\\ mmmm\\ yyyy;@');
  t.ok(typeof fmt('[ENG][$-420]dddd\\,\\ dd\\ mmmm\\,\\ yyyy;@') === 'function', '[ENG][$-420]dddd\\,\\ dd\\ mmmm\\,\\ yyyy;@');
  t.ok(typeof fmt('[ENG][$-421]dd\\ mmmm\\ yyyy;@') === 'function', '[ENG][$-421]dd\\ mmmm\\ yyyy;@');
  t.ok(typeof fmt('[ENG][$-424]dddd\\,\\ d\\.\\ mmmm\\ yyyy;@') === 'function', '[ENG][$-424]dddd\\,\\ d\\.\\ mmmm\\ yyyy;@');
  t.ok(typeof fmt('[ENG][$-425]dddd\\,\\ d\\.\\ mmmm\\ yyyy;@') === 'function', '[ENG][$-425]dddd\\,\\ d\\.\\ mmmm\\ yyyy;@');
  t.ok(typeof fmt('[ENG][$-426]dddd\\,\\ yyyy". gada "d\\.\\ mmmm;@') === 'function', '[ENG][$-426]dddd\\,\\ yyyy". gada "d\\.\\ mmmm;@');
  t.ok(typeof fmt('[ENG][$-427]yyyy\\ "m."\\ mmmm\\ d\\ "d.";@') === 'function', '[ENG][$-427]yyyy\\ "m."\\ mmmm\\ d\\ "d.";@');
  t.ok(typeof fmt('[ENG][$-42B]dddd\\,\\ d\\ mmmm\\ yyyy;@') === 'function', '[ENG][$-42B]dddd\\,\\ d\\ mmmm\\ yyyy;@');
  t.ok(typeof fmt('[ENG][$-42C]d\\ mmmm\\ yyyy;@') === 'function', '[ENG][$-42C]d\\ mmmm\\ yyyy;@');
  t.ok(typeof fmt('[ENG][$-42D]yyyy"(e)ko"\\ mmmm"ren"\\ d"a";@') === 'function', '[ENG][$-42D]yyyy"(e)ko"\\ mmmm"ren"\\ d"a";@');
  t.ok(typeof fmt('[ENG][$-42F]dddd\\,\\ dd\\ mmmm\\ yyyy;@') === 'function', '[ENG][$-42F]dddd\\,\\ dd\\ mmmm\\ yyyy;@');
  t.ok(typeof fmt('[ENG][$-437]yyyy\\ \\წ\\ლ\\ი\\ს\\ dd\\ mm\\,\\ dddd;@') === 'function', '[ENG][$-437]yyyy\\ \\წ\\ლ\\ი\\ს\\ dd\\ mm\\,\\ dddd;@');
  t.ok(typeof fmt('[ENG][$-438]d\\.\\ mmmm\\ yyyy;@') === 'function', '[ENG][$-438]d\\.\\ mmmm\\ yyyy;@');
  t.ok(typeof fmt('[ENG][$-43F]d\\ mmmm\\ yyyy\\ "ж.";@') === 'function', '[ENG][$-43F]d\\ mmmm\\ yyyy\\ "ж.";@');
  t.ok(typeof fmt('[ENG][$-444]d\\ mmmm\\ yyyy;@') === 'function', '[ENG][$-444]d\\ mmmm\\ yyyy;@');
  t.ok(typeof fmt('[ENG][$-449]dd\\ mmmm\\ yyyy;@') === 'function', '[ENG][$-449]dd\\ mmmm\\ yyyy;@');
  t.ok(typeof fmt('[ENG][$-44E]d\\ mmmm\\ yyyy;@') === 'function', '[ENG][$-44E]d\\ mmmm\\ yyyy;@');
  t.ok(typeof fmt('[ENG][$-44F]dd\\ mmmm\\ yyyy\\ dddd;@') === 'function', '[ENG][$-44F]dd\\ mmmm\\ yyyy\\ dddd;@');
  t.ok(typeof fmt('[ENG][$-457]dd\\ mmmm\\ yyyy;@') === 'function', '[ENG][$-457]dd\\ mmmm\\ yyyy;@');
  t.ok(typeof fmt('[ENG][$-813]dddd\\ d\\ mmmm\\ yyyy;@') === 'function', '[ENG][$-813]dddd\\ d\\ mmmm\\ yyyy;@');
  t.ok(typeof fmt('[ENG][$-81A]dddd\\,\\ d\\.\\ mmmm\\ yyyy;@') === 'function', '[ENG][$-81A]dddd\\,\\ d\\.\\ mmmm\\ yyyy;@');
  t.ok(typeof fmt('[ENG][$-82C]d\\ mmmm\\ yyyy;@') === 'function', '[ENG][$-82C]d\\ mmmm\\ yyyy;@');
  t.ok(typeof fmt('[ENG][$-843]yyyy\\ "й""и""л"\\ d/mmmm;@') === 'function', '[ENG][$-843]yyyy\\ "й""и""л"\\ d/mmmm;@');
  t.ok(typeof fmt('[ENG][$-C07]dddd\\,\\ dd\\.\\ mmmm\\ yyyy;@') === 'function', '[ENG][$-C07]dddd\\,\\ dd\\.\\ mmmm\\ yyyy;@');
  t.ok(typeof fmt('[ENG][$-FC19]yyyy\\,\\ dd\\ mmmm;@') === 'function', '[ENG][$-FC19]yyyy\\,\\ dd\\ mmmm;@');
  t.ok(typeof fmt('[ENG][$-FC22]d\\ mmmm\\ yyyy" р.";@') === 'function', '[ENG][$-FC22]d\\ mmmm\\ yyyy" р.";@');
  t.ok(typeof fmt('[ENG][$-FC23]d\\ mmmm\\ yyyy;@') === 'function', '[ENG][$-FC23]d\\ mmmm\\ yyyy;@');
  t.ok(typeof fmt('[GREEN]#,###') === 'function', '[GREEN]#,###');
  t.ok(typeof fmt('[Green]#,###') === 'function', '[Green]#,###');
  t.ok(typeof fmt('[HH]') === 'function', '[HH]');
  t.ok(typeof fmt('[HIJ][$-2060401]d/mm/yyyy\\ h:mm\\ AM/PM;@') === 'function', '[HIJ][$-2060401]d/mm/yyyy\\ h:mm\\ AM/PM;@');
  t.ok(typeof fmt('[HIJ][$-2060401]d\\ mmmm\\ yyyy;@') === 'function', '[HIJ][$-2060401]d\\ mmmm\\ yyyy;@');
  t.ok(typeof fmt('[H]') === 'function', '[H]');
  t.ok(typeof fmt('[JPN][$-411]gggyy"年"m"月"d"日"\\ dddd;@') === 'function', '[JPN][$-411]gggyy"年"m"月"d"日"\\ dddd;@');
  t.ok(typeof fmt('[MAGENTA]0.00') === 'function', '[MAGENTA]0.00');
  t.ok(typeof fmt('[Magenta]0.00') === 'function', '[Magenta]0.00');
  t.ok(typeof fmt('[RED]#.##') === 'function', '[RED]#.##');
  t.ok(typeof fmt('[Red]#.##') === 'function', '[Red]#.##');
  t.ok(typeof fmt('[Red][<-25]General;[Blue][>25]General;[Green]General;[Yellow]General\\ ') === 'function', '[Red][<-25]General;[Blue][>25]General;[Green]General;[Yellow]General\\ ');
  t.ok(typeof fmt('[Red][<=-25]General;[Blue][>=25]General;[Green]General;[Yellow]General') === 'function', '[Red][<=-25]General;[Blue][>=25]General;[Green]General;[Yellow]General');
  t.ok(typeof fmt('[Red][<>50]General;[Blue]000') === 'function', '[Red][<>50]General;[Blue]000');
  t.ok(typeof fmt('[Red][=50]General;[Blue]000') === 'function', '[Red][=50]General;[Blue]000');
  t.ok(typeof fmt('[SS]') === 'function', '[SS]');
  t.ok(typeof fmt('[S]') === 'function', '[S]');
  t.ok(typeof fmt('[TWN][DBNum1][$-404]y"年"m"月"d"日";@') === 'function', '[TWN][DBNum1][$-404]y"年"m"月"d"日";@');
  t.ok(typeof fmt('[WHITE]0.0') === 'function', '[WHITE]0.0');
  t.ok(typeof fmt('[White]0.0') === 'function', '[White]0.0');
  t.ok(typeof fmt('[YELLOW]@') === 'function', '[YELLOW]@');
  t.ok(typeof fmt('[Yellow]@') === 'function', '[Yellow]@');
  t.ok(typeof fmt('[h]') === 'function', '[h]');
  t.ok(typeof fmt('[h]:mm:ss') === 'function', '[h]:mm:ss');
  t.ok(typeof fmt('[h]:mm:ss;@') === 'function', '[h]:mm:ss;@');
  t.ok(typeof fmt('[h]\\.mm" Uhr ";@') === 'function', '[h]\\.mm" Uhr ";@');
  t.ok(typeof fmt('[hh]') === 'function', '[hh]');
  t.ok(typeof fmt('[s]') === 'function', '[s]');
  t.ok(typeof fmt('[ss]') === 'function', '[ss]');
  t.ok(typeof fmt('\\#\\r\\e\\c') === 'function', '\\#\\r\\e\\c');
  t.ok(typeof fmt('\\$#,##0_);[Red]"($"#,##0\\)') === 'function', '\\$#,##0_);[Red]"($"#,##0\\)');
  t.ok(typeof fmt('\\$0.00') === 'function', '\\$0.00');
  t.ok(typeof fmt('\\C\\O\\B\\ \\o\\n\\ @') === 'function', '\\C\\O\\B\\ \\o\\n\\ @');
  t.ok(typeof fmt('\\C\\R\\O\\N\\T\\A\\B\\ \\o\\n\\ @') === 'function', '\\C\\R\\O\\N\\T\\A\\B\\ \\o\\n\\ @');
  t.ok(typeof fmt('\\R\\e\\s\\u\\l\\t\\ \\o\\n\\ @') === 'function', '\\R\\e\\s\\u\\l\\t\\ \\o\\n\\ @');
  t.ok(typeof fmt('\\S\\Q\\L\\ \\:\\ @') === 'function', '\\S\\Q\\L\\ \\:\\ @');
  t.ok(typeof fmt('\\S\\Q\\L\\ \\R\\e\\q\\u\\e\\s\\t\\ \\f\\o\\r\\ @') === 'function', '\\S\\Q\\L\\ \\R\\e\\q\\u\\e\\s\\t\\ \\f\\o\\r\\ @');
  t.ok(typeof fmt('\\c\\c\\c?????0"aaaa"0"bbbb"000000.00%') === 'function', '\\c\\c\\c?????0"aaaa"0"bbbb"000000.00%');
  t.ok(typeof fmt('\\u\\n\\t\\i\\l\\ h:mm;@') === 'function', '\\u\\n\\t\\i\\l\\ h:mm;@');
  t.ok(typeof fmt('_ "￥"* #,##0.00_ "Positive";_ "￥"* \\-#,##0.00_ ;_ "￥"* "-"??_ "Negtive";_ @_ \\ "Zero"') === 'function', '_ "￥"* #,##0.00_ "Positive";_ "￥"* \\-#,##0.00_ ;_ "￥"* "-"??_ "Negtive";_ @_ \\ "Zero"');
  t.ok(typeof fmt('_ * #,##0.00_)[$﷼-429]_ ;_ * \\(#,##0.00\\)[$﷼-429]_ ;_ * "-"??_)[$﷼-429]_ ;_ @_ ') === 'function', '_ * #,##0.00_)[$﷼-429]_ ;_ * \\(#,##0.00\\)[$﷼-429]_ ;_ * "-"??_)[$﷼-429]_ ;_ @_ ');
  t.ok(typeof fmt('_ * #,##0_ ;_ * \\-#,##0_ ;[Red]_ * "-"_ ;_ @_ ') === 'function', '_ * #,##0_ ;_ * \\-#,##0_ ;[Red]_ * "-"_ ;_ @_ ');
  t.ok(typeof fmt('_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)') === 'function', '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)');
  t.ok(typeof fmt('_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"??_);_(@_)') === 'function', '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"??_);_(@_)');
  t.ok(typeof fmt('_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)') === 'function', '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)');
  t.ok(typeof fmt('_(* #,##0.0000_);_(* \\(#,##0.0000\\);_(* "-"??_);_(@_)') === 'function', '_(* #,##0.0000_);_(* \\(#,##0.0000\\);_(* "-"??_);_(@_)');
  t.ok(typeof fmt('_(* #,##0.000_);_(* \\(#,##0.000\\);_(* "-"??_);_(@_)') === 'function', '_(* #,##0.000_);_(* \\(#,##0.000\\);_(* "-"??_);_(@_)');
  t.ok(typeof fmt('_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)') === 'function', '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)');
  t.ok(typeof fmt('_(* #,##0.0_);_(* \\(#,##0.0\\);_(* "-"??_);_(@_)') === 'function', '_(* #,##0.0_);_(* \\(#,##0.0\\);_(* "-"??_);_(@_)');
  t.ok(typeof fmt('_(* #,##0_);_(* \\(#,##0\\);_(* "-"??_);_(@_)') === 'function', '_(* #,##0_);_(* \\(#,##0\\);_(* "-"??_);_(@_)');
  t.ok(typeof fmt('_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)') === 'function', '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)');
  t.ok(typeof fmt('_([$ANG]\\ * #,##0.0_);_([$ANG]\\ * \\(#,##0.0\\);_([$ANG]\\ * "-"?_);_(@_)') === 'function', '_([$ANG]\\ * #,##0.0_);_([$ANG]\\ * \\(#,##0.0\\);_([$ANG]\\ * "-"?_);_(@_)');
  t.ok(typeof fmt('_-"€"\\ * #,##0.00_-;_-"€"\\ * #,##0.00\\-;_-"€"\\ * "-"??_-;_-@_-') === 'function', '_-"€"\\ * #,##0.00_-;_-"€"\\ * #,##0.00\\-;_-"€"\\ * "-"??_-;_-@_-');
  t.ok(typeof fmt('_-* #,##0.00" TL"_-;\\-* #,##0.00" TL"_-;_-* \\-??" TL"_-;_-@_-') === 'function', '_-* #,##0.00" TL"_-;\\-* #,##0.00" TL"_-;_-* \\-??" TL"_-;_-@_-');
  t.ok(typeof fmt('_-* #,##0.00" €"_-;\\-* #,##0.00" €"_-;_-* \\-??" €"_-;_-@_-') === 'function', '_-* #,##0.00" €"_-;\\-* #,##0.00" €"_-;_-* \\-??" €"_-;_-@_-');
  t.ok(typeof fmt('_-* #,##0.00\\ "р."_-;\\-* #,##0.00\\ "р."_-;_-* "-"??\\ "р."_-;_-@_-') === 'function', '_-* #,##0.00\\ "р."_-;\\-* #,##0.00\\ "р."_-;_-* "-"??\\ "р."_-;_-@_-');
  t.ok(typeof fmt('_-* #,##0.00\\ "€"_-;\\-* #,##0.00\\ "€"_-;_-* "-"??\\ "€"_-;_-@_-') === 'function', '_-* #,##0.00\\ "€"_-;\\-* #,##0.00\\ "€"_-;_-* "-"??\\ "€"_-;_-@_-');
  t.ok(typeof fmt('_-* #,##0.00\\ [$€-407]_-;\\-* #,##0.00\\ [$€-407]_-;_-* \\-??\\ [$€-407]_-;_-@_-') === 'function', '_-* #,##0.00\\ [$€-407]_-;\\-* #,##0.00\\ [$€-407]_-;_-* \\-??\\ [$€-407]_-;_-@_-');
  t.ok(typeof fmt('_-* #,##0.0\\ _F_-;\\-* #,##0.0\\ _F_-;_-* "-"??\\ _F_-;_-@_-') === 'function', '_-* #,##0.0\\ _F_-;\\-* #,##0.0\\ _F_-;_-* "-"??\\ _F_-;_-@_-');
  t.ok(typeof fmt('_-* #,##0\\ "€"_-;\\-* #,##0\\ "€"_-;_-* "-"\\ "€"_-;_-@_-') === 'function', '_-* #,##0\\ "€"_-;\\-* #,##0\\ "€"_-;_-* "-"\\ "€"_-;_-@_-');
  t.ok(typeof fmt('_-* #,##0_-;\\-* #,##0_-;_-* "-"??_-;_-@_-') === 'function', '_-* #,##0_-;\\-* #,##0_-;_-* "-"??_-;_-@_-');
  t.ok(typeof fmt('_-\\$* #,##0.0_ ;_-\\$* \\-#,##0.0\\ ;_-\\$* "-"?_ ;_-@_ ') === 'function', '_-\\$* #,##0.0_ ;_-\\$* \\-#,##0.0\\ ;_-\\$* "-"?_ ;_-@_ ');
  t.ok(typeof fmt('d') === 'function', 'd');
  t.ok(typeof fmt('d-mmm') === 'function', 'd-mmm');
  t.ok(typeof fmt('d-mmm-yy') === 'function', 'd-mmm-yy');
  t.ok(typeof fmt('d/m') === 'function', 'd/m');
  t.ok(typeof fmt('d/m/yy;@') === 'function', 'd/m/yy;@');
  t.ok(typeof fmt('d/m/yyyy;@') === 'function', 'd/m/yyyy;@');
  t.ok(typeof fmt('d/mm/yy;@') === 'function', 'd/mm/yy;@');
  t.ok(typeof fmt('d/mm/yyyy;@') === 'function', 'd/mm/yyyy;@');
  t.ok(typeof fmt('d\\-mmm') === 'function', 'd\\-mmm');
  t.ok(typeof fmt('d\\-mmm\\-yyyy') === 'function', 'd\\-mmm\\-yyyy');
  t.ok(typeof fmt('dd') === 'function', 'dd');
  t.ok(typeof fmt('dd"-"mmm"-"yyyy') === 'function', 'dd"-"mmm"-"yyyy');
  t.ok(typeof fmt('dd/m/yyyy') === 'function', 'dd/m/yyyy');
  t.ok(typeof fmt('dd/mm/yy') === 'function', 'dd/mm/yy');
  t.ok(typeof fmt('dd/mm/yy;@') === 'function', 'dd/mm/yy;@');
  t.ok(typeof fmt('dd/mm/yy\\ hh:mm') === 'function', 'dd/mm/yy\\ hh:mm');
  t.ok(typeof fmt('dd/mm/yyyy') === 'function', 'dd/mm/yyyy');
  t.ok(typeof fmt('dd/mm/yyyy\\ hh:mm:ss') === 'function', 'dd/mm/yyyy\\ hh:mm:ss');
  t.ok(typeof fmt('dd/mmm') === 'function', 'dd/mmm');
  t.ok(typeof fmt('dd\\-mm\\-yy') === 'function', 'dd\\-mm\\-yy');
  t.ok(typeof fmt('dd\\-mmm\\-yy') === 'function', 'dd\\-mmm\\-yy');
  t.ok(typeof fmt('dd\\-mmm\\-yyyy\\ hh:mm:ss.000') === 'function', 'dd\\-mmm\\-yyyy\\ hh:mm:ss.000');
  t.ok(typeof fmt('dd\\/mm\\/yy') === 'function', 'dd\\/mm\\/yy');
  t.ok(typeof fmt('dd\\/mm\\/yyyy') === 'function', 'dd\\/mm\\/yyyy');
  t.ok(typeof fmt('ddd') === 'function', 'ddd');
  t.ok(typeof fmt('dddd') === 'function', 'dddd');
  t.ok(typeof fmt('dddd, mmmm dd, yyyy') === 'function', 'dddd, mmmm dd, yyyy');
  t.ok(typeof fmt('h') === 'function', 'h');
  t.ok(typeof fmt('h"时"mm"分"ss"秒";@') === 'function', 'h"时"mm"分"ss"秒";@');
  t.ok(typeof fmt('h"時"mm"分"ss"秒";@') === 'function', 'h"時"mm"分"ss"秒";@');
  t.ok(typeof fmt('h:mm') === 'function', 'h:mm');
  t.ok(typeof fmt('h:mm AM/PM') === 'function', 'h:mm AM/PM');
  t.ok(typeof fmt('h:mm:ss') === 'function', 'h:mm:ss');
  t.ok(typeof fmt('h:mm:ss AM/PM') === 'function', 'h:mm:ss AM/PM');
  t.ok(typeof fmt('h:mm:ss;@') === 'function', 'h:mm:ss;@');
  t.ok(typeof fmt('h:mm;@') === 'function', 'h:mm;@');
  t.ok(typeof fmt('h\\.mm" Uhr ";@') === 'function', 'h\\.mm" Uhr ";@');
  t.ok(typeof fmt('h\\.mm" h";@') === 'function', 'h\\.mm" h";@');
  t.ok(typeof fmt('h\\.mm" u.";@') === 'function', 'h\\.mm" u.";@');
  t.ok(typeof fmt('hh":"mm AM/PM') === 'function', 'hh":"mm AM/PM');
  t.ok(typeof fmt('hh:mm:ss') === 'function', 'hh:mm:ss');
  t.ok(typeof fmt('hh:mm:ss\\ AM/PM') === 'function', 'hh:mm:ss\\ AM/PM');
  t.ok(typeof fmt('hh\\.mm" h";@') === 'function', 'hh\\.mm" h";@');
  t.ok(typeof fmt('hhm') === 'function', 'hhm');
  t.ok(typeof fmt('hhmm') === 'function', 'hhmm');
  t.ok(typeof fmt('m"月"d"日"') === 'function', 'm"月"d"日"');
  t.ok(typeof fmt('m/d/yy') === 'function', 'm/d/yy');
  t.ok(typeof fmt('m/d/yy h:mm') === 'function', 'm/d/yy h:mm');
  t.ok(typeof fmt('m/d/yy;@') === 'function', 'm/d/yy;@');
  t.ok(typeof fmt('m/d/yy\\ h:mm') === 'function', 'm/d/yy\\ h:mm');
  t.ok(typeof fmt('m/d/yy\\ h:mm;@') === 'function', 'm/d/yy\\ h:mm;@');
  t.ok(typeof fmt('m/d/yyyy') === 'function', 'm/d/yyyy');
  t.ok(typeof fmt('m/d/yyyy;@') === 'function', 'm/d/yyyy;@');
  t.ok(typeof fmt('m/d/yyyy\\ h:mm:ss;@') === 'function', 'm/d/yyyy\\ h:mm:ss;@');
  t.ok(typeof fmt('m/d;@') === 'function', 'm/d;@');
  t.ok(typeof fmt('m\\/d\\/yyyy') === 'function', 'm\\/d\\/yyyy');
  t.ok(typeof fmt('mm/dd') === 'function', 'mm/dd');
  t.ok(typeof fmt('mm/dd/yy') === 'function', 'mm/dd/yy');
  t.ok(typeof fmt('mm/dd/yy;@') === 'function', 'mm/dd/yy;@');
  t.ok(typeof fmt('mm/dd/yyyy') === 'function', 'mm/dd/yyyy');
  t.ok(typeof fmt('mm:ss') === 'function', 'mm:ss');
  t.ok(typeof fmt('mm:ss.0;@') === 'function', 'mm:ss.0;@');
  t.ok(typeof fmt('mmm d, yyyy') === 'function', 'mmm d, yyyy');
  t.ok(typeof fmt('mmm" "d", "yyyy') === 'function', 'mmm" "d", "yyyy');
  t.ok(typeof fmt('mmm-yy') === 'function', 'mmm-yy');
  t.ok(typeof fmt('mmm-yy;@') === 'function', 'mmm-yy;@');
  t.ok(typeof fmt('mmm/yy') === 'function', 'mmm/yy');
  t.ok(typeof fmt('mmm\\-yy') === 'function', 'mmm\\-yy');
  t.ok(typeof fmt('mmm\\-yy;@') === 'function', 'mmm\\-yy;@');
  t.ok(typeof fmt('mmm\\-yyyy') === 'function', 'mmm\\-yyyy');
  t.ok(typeof fmt('mmmm\\ d\\,\\ yyyy') === 'function', 'mmmm\\ d\\,\\ yyyy');
  t.ok(typeof fmt('mmmm\\ yyyy') === 'function', 'mmmm\\ yyyy');
  t.ok(typeof fmt('mmss.0') === 'function', 'mmss.0');
  t.ok(typeof fmt('s') === 'function', 's');
  t.ok(typeof fmt('ss') === 'function', 'ss');
  t.ok(typeof fmt('yy') === 'function', 'yy');
  t.ok(typeof fmt('yy/mm/dd') === 'function', 'yy/mm/dd');
  t.ok(typeof fmt('yy\\.mm\\.dd') === 'function', 'yy\\.mm\\.dd');
  t.ok(typeof fmt('yym') === 'function', 'yym');
  t.ok(typeof fmt('yymm') === 'function', 'yymm');
  t.ok(typeof fmt('yymmm') === 'function', 'yymmm');
  t.ok(typeof fmt('yymmmm') === 'function', 'yymmmm');
  t.ok(typeof fmt('yymmmmm') === 'function', 'yymmmmm');
  t.ok(typeof fmt('yyyy') === 'function', 'yyyy');
  t.ok(typeof fmt('yyyy"년"\\ m"월"\\ d"일";@') === 'function', 'yyyy"년"\\ m"월"\\ d"일";@');
  t.ok(typeof fmt('yyyy-m-d h:mm AM/PM') === 'function', 'yyyy-m-d h:mm AM/PM');
  t.ok(typeof fmt('yyyy-mm-dd') === 'function', 'yyyy-mm-dd');
  t.ok(typeof fmt('yyyy/mm/dd') === 'function', 'yyyy/mm/dd');
  t.ok(typeof fmt('yyyy\\-m\\-d\\ hh:mm:ss') === 'function', 'yyyy\\-m\\-d\\ hh:mm:ss');
  t.ok(typeof fmt('yyyy\\-mm\\-dd') === 'function', 'yyyy\\-mm\\-dd');
  t.ok(typeof fmt('yyyy\\-mm\\-dd;@') === 'function', 'yyyy\\-mm\\-dd;@');
  t.ok(typeof fmt('yyyy\\-mm\\-dd\\ h:mm') === 'function', 'yyyy\\-mm\\-dd\\ h:mm');
  t.ok(typeof fmt('yyyy\\-mm\\-dd\\Thh:mm') === 'function', 'yyyy\\-mm\\-dd\\Thh:mm');
  t.ok(typeof fmt('yyyy\\-mm\\-dd\\Thhmmss.000') === 'function', 'yyyy\\-mm\\-dd\\Thhmmss.000');

  t.end();
});
