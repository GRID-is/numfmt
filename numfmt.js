!function(e,a){"object"==typeof exports&&"object"==typeof module?module.exports=a():"function"==typeof define&&define.amd?define([],a):"object"==typeof exports?exports.numfmt=a():e.numfmt=a()}("undefined"!=typeof self?self:this,(function(){return function(e){var a={};function t(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var r in e)t.d(n,r,function(a){return e[a]}.bind(null,r));return n},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=0)}([function(e,a,t){"use strict";t.r(a);var n={1078:"af",1052:"sq",1118:"am",5121:"ar_DZ",15361:"ar_BH",3073:"ar_EG",2049:"ar_IQ",11265:"ar_JO",13313:"ar_KW",12289:"ar_LB",4097:"ar_LY",6145:"ar_MA",8193:"ar_OM",16385:"ar_QA",1025:"ar_SA",10241:"ar_SY",7169:"ar_TN",14337:"ar_AE",9217:"ar_YE",1067:"hy",1101:"as",2092:"az_AZ",1068:"az_AZ",1069:"eu",1059:"be",2117:"bn",1093:"bn_IN",5146:"bs",1026:"bg",1109:"my",1027:"ca",2052:"zh_CN",3076:"zh_HK",5124:"zh_MO",4100:"zh_SG",1028:"zh_TW",1050:"hr",1029:"cs",1030:"da",1125:"dv",2067:"nl_BE",1043:"nl_NL",1126:"bin",3081:"en_AU",10249:"en_BZ",4105:"en_CA",9225:"en_CB",2057:"en_GB",16393:"en_IN",6153:"en_IE",8201:"en_JM",5129:"en_NZ",13321:"en_PH",7177:"en_ZA",11273:"en_TT",1033:"en_US",12297:"en_ZW",1061:"et",1071:"mk",1080:"fo",1065:"fa",1124:"fil",1035:"fi",2060:"fr_BE",11276:"fr_CM",3084:"fr_CA",9228:"fr_CG",12300:"fr_CI",1036:"fr_FR",5132:"fr_LU",13324:"fr_ML",6156:"fr_MC",14348:"fr_MA",10252:"fr_SN",4108:"fr_CH",7180:"fr",1122:"fy_NL",2108:"gd_IE",1084:"gd",1110:"gl",1079:"ka",3079:"de_AT",1031:"de_DE",5127:"de_LI",4103:"de_LU",2055:"de_CH",1032:"el",1140:"gn",1095:"gu",1279:"en",1037:"he",1081:"hi",1038:"hu",1039:"is",1136:"ig_NG",1057:"id",1040:"it_IT",2064:"it_CH",1041:"ja",1099:"kn",1120:"ks",1087:"kk",1107:"km",1111:"kok",1042:"ko",1088:"ky",1108:"lo",1142:"la",1062:"lv",1063:"lt",2110:"ms_BN",1086:"ms_MY",1100:"ml",1082:"mt",1112:"mni",1153:"mi",1102:"mr",1104:"mn",2128:"mn",1121:"ne",1044:"no_NO",2068:"no_NO",1096:"or",1045:"pl",1046:"pt_BR",2070:"pt_PT",1094:"pa",1047:"rm",2072:"ro_MO",1048:"ro_RO",1049:"ru",2073:"ru_MO",1083:"se",1103:"sa",3098:"sr_SP",2074:"sr_SP",1072:"st",1074:"tn",1113:"sd",1115:"si",1051:"sk",1060:"sl",1143:"so",1070:"sb",11274:"es_AR",16394:"es_BO",13322:"es_CL",9226:"es_CO",5130:"es_CR",7178:"es_DO",12298:"es_EC",17418:"es_SV",4106:"es_GT",18442:"es_HN",2058:"es_MX",19466:"es_NI",6154:"es_PA",15370:"es_PY",10250:"es_PE",20490:"es_PR",1034:"es_ES",14346:"es_UY",8202:"es_VE",1089:"sw",2077:"sv_FI",1053:"sv_SE",1114:"syc",1064:"tg",1097:"ta",1092:"tt",1098:"te",1054:"th",1105:"bo",1073:"ts",1055:"tr",1090:"tk",1058:"uk",1056:"ur",2115:"uz_UZ",1091:"uz_UZ",1075:"ve",1066:"vi",1106:"cy",1076:"xh",1085:"yi",1077:"zu"};function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=/^([a-z\d]+)(?:[_-]([a-z\d]+))?(?:\.([a-z\d]+))?(?:@([a-z\d]+))?$/i,o={},m={group:" ",decimal:".",positive:"+",negative:"-",percent:"%",exponent:"E",nan:"NaN",infinity:"∞",overflow:"#VALUE!",ampm:["AM","PM"],mmmm6:["Muharram","Safar","Rabiʻ I","Rabiʻ II","Jumada I","Jumada II","Rajab","Shaʻban","Ramadan","Shawwal","Dhuʻl-Qiʻdah","Dhuʻl-Hijjah"],mmm6:["Muh.","Saf.","Rab. I","Rab. II","Jum. I","Jum. II","Raj.","Sha.","Ram.","Shaw.","Dhuʻl-Q.","Dhuʻl-H."],mmmm:["January","February","March","April","May","June","July","August","September","October","November","December"],mmm:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dddd:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ddd:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]};function d(e){var a=u(e),t=null;if(a){var n=s(a);t=o[n.lang]||o[n.language]||null}return t}function s(e){var a=i.exec(e);if(!a)throw new SyntaxError("Malformed locale: ".concat(e));return{lang:a[1]+(a[2]?"_"+a[2]:""),language:a[1],territory:a[2]||"",codeset:a[3]||"",modifier:a[4]||""}}function u(e){if("number"==typeof e)return n[65535&e]||null;var a=parseInt(e,16);return isFinite(a)&&n[65535&a]?n[65535&a]||null:i.test(e)?e:null}function l(e){return Object.assign({},m,e)}function p(e,a){var t="object"===r(a)?a:s(a);return o[t.lang]=l(e),t.language===t.lang||o[t.language]||(o[t.language]=l(e)),o[t.lang]}var f=l({group:","});function c(e,a){if("number"!=typeof e)return e;if(e<0)return-c(-e,a);if(a){var t=Math.pow(10,a||0)||1;return c(e*t,0)/t}return Math.round(e)}f.isDefault=!0,p({group:",",ampm:["上午","下午"],mmmm:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],mmm:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],dddd:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],ddd:["周日","周一","周二","周三","周四","周五","周六"]},"zh_CN"),p({group:",",nan:"非數值",ampm:["上午","下午"],mmmm:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],mmm:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],dddd:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],ddd:["週日","週一","週二","週三","週四","週五","週六"]},"zh_TW"),p({group:",",ampm:["午前","午後"],mmmm:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],mmm:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],dddd:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],ddd:["日","月","火","水","木","金","土"]},"ja"),p({group:",",ampm:["오전","오후"],mmmm:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],mmm:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],dddd:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],ddd:["일","월","화","수","목","금","토"]},"ko"),p({group:",",ampm:["ก่อนเที่ยง","หลังเที่ยง"],mmmm:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],mmm:["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],dddd:["วันอาทิตย์","วันจันทร์","วันอังคาร","วันพุธ","วันพฤหัสบดี","วันศุกร์","วันเสาร์"],ddd:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."]},"th"),p({decimal:",",ampm:["dop.","odp."],mmmm:["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince"],mmm:["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],dddd:["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"],ddd:["ne","po","út","st","čt","pá","so"]},"cs"),p({group:".",decimal:",",mmmm:["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"],mmm:["jan.","feb.","mar.","apr.","maj","jun.","jul.","aug.","sep.","okt.","nov.","dec."],dddd:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],ddd:["søn.","man.","tir.","ons.","tor.","fre.","lør."]},"da"),p({group:".",decimal:",",ampm:["a.m.","p.m."],mmmm:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],mmm:["jan.","feb.","mrt.","apr.","mei","jun.","jul.","aug.","sep.","okt.","nov.","dec."],dddd:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],ddd:["zo","ma","di","wo","do","vr","za"]},"nl"),p({group:","},"en"),p({decimal:",",nan:"epäluku",ampm:["ap.","ip."],mmmm:["tammikuuta","helmikuuta","maaliskuuta","huhtikuuta","toukokuuta","kesäkuuta","heinäkuuta","elokuuta","syyskuuta","lokakuuta","marraskuuta","joulukuuta"],mmm:["tammik.","helmik.","maalisk.","huhtik.","toukok.","kesäk.","heinäk.","elok.","syysk.","lokak.","marrask.","jouluk."],dddd:["sunnuntaina","maanantaina","tiistaina","keskiviikkona","torstaina","perjantaina","lauantaina"],ddd:["su","ma","ti","ke","to","pe","la"]},"fi"),p({group:" ",decimal:",",mmmm:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],mmm:["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],dddd:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],ddd:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."]},"fr"),p({group:".",decimal:",",mmmm:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],mmm:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sept.","Okt.","Nov.","Dez."],dddd:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],ddd:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."]},"de"),p({group:".",decimal:",",ampm:["π.μ.","μ.μ."],mmmm:["Ιανουαρίου","Φεβρουαρίου","Μαρτίου","Απριλίου","Μαΐου","Ιουνίου","Ιουλίου","Αυγούστου","Σεπτεμβρίου","Οκτωβρίου","Νοεμβρίου","Δεκεμβρίου"],mmm:["Ιαν","Φεβ","Μαρ","Απρ","Μαΐ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],dddd:["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"],ddd:["Κυρ","Δευ","Τρί","Τετ","Πέμ","Παρ","Σάβ"]},"el"),p({decimal:",",ampm:["de.","du."],mmmm:["január","február","március","április","május","június","július","augusztus","szeptember","október","november","december"],mmm:["jan.","febr.","márc.","ápr.","máj.","jún.","júl.","aug.","szept.","okt.","nov.","dec."],dddd:["vasárnap","hétfő","kedd","szerda","csütörtök","péntek","szombat"],ddd:["V","H","K","Sze","Cs","P","Szo"]},"hu"),p({group:".",decimal:",",ampm:["f.h.","e.h."],mmmm:["janúar","febrúar","mars","apríl","maí","júní","júlí","ágúst","september","október","nóvember","desember"],mmm:["jan.","feb.","mar.","apr.","maí","jún.","júl.","ágú.","sep.","okt.","nóv.","des."],dddd:["sunnudagur","mánudagur","þriðjudagur","miðvikudagur","fimmtudagur","föstudagur","laugardagur"],ddd:["sun.","mán.","þri.","mið.","fim.","fös.","lau."]},"is"),p({group:".",decimal:",",mmmm:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],mmm:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],dddd:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],ddd:["Min","Sen","Sel","Rab","Kam","Jum","Sab"]},"id"),p({group:".",decimal:",",mmmm:["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],mmm:["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],dddd:["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"],ddd:["dom","lun","mar","mer","gio","ven","sab"]},"it"),p({decimal:",",ampm:["a.m.","p.m."],mmmm:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"],mmm:["jan.","feb.","mar.","apr.","mai","jun.","jul.","aug.","sep.","okt.","nov.","des."],dddd:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],ddd:["søn.","man.","tir.","ons.","tor.","fre.","lør."]},"nb"),p({decimal:",",mmmm:["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","września","października","listopada","grudnia"],mmm:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru"],dddd:["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"],ddd:["niedz.","pon.","wt.","śr.","czw.","pt.","sob."]},"pl"),p({group:".",decimal:",",mmmm:["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],mmm:["jan.","fev.","mar.","abr.","mai.","jun.","jul.","ago.","set.","out.","nov.","dez."],dddd:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"],ddd:["dom.","seg.","ter.","qua.","qui.","sex.","sáb."]},"pt"),p({decimal:",",nan:"не число",mmmm:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],mmm:["янв.","февр.","мар.","апр.","мая","июн.","июл.","авг.","сент.","окт.","нояб.","дек."],dddd:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],ddd:["вс","пн","вт","ср","чт","пт","сб"]},"ru"),p({decimal:",",mmmm:["januára","februára","marca","apríla","mája","júna","júla","augusta","septembra","októbra","novembra","decembra"],mmm:["jan","feb","mar","apr","máj","jún","júl","aug","sep","okt","nov","dec"],dddd:["nedeľa","pondelok","utorok","streda","štvrtok","piatok","sobota"],ddd:["ne","po","ut","st","št","pi","so"]},"sk"),p({group:".",decimal:",",ampm:["a. m.","p. m."],mmmm:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],mmm:["ene.","feb.","mar.","abr.","may.","jun.","jul.","ago.","sept.","oct.","nov.","dic."],dddd:["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],ddd:["dom.","lun.","mar.","mié.","jue.","vie.","sáb."]},"es"),p({decimal:",",ampm:["fm","em"],mmmm:["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"],mmm:["jan.","feb.","mars","apr.","maj","juni","juli","aug.","sep.","okt.","nov.","dec."],dddd:["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"],ddd:["sön","mån","tis","ons","tors","fre","lör"]},"sv"),p({group:".",decimal:",",ampm:["ÖÖ","ÖS"],mmmm:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],mmm:["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],dddd:["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],ddd:["Paz","Pzt","Sal","Çar","Per","Cum","Cmt"]},"tr");function g(e,a,t){var n,r,i=e<0?-1:1,o=Math.pow(10,a||2),m=Math.pow(10,t||2),d=Math.abs(e),s=0,u=0,l=0,p=1;if((e=d)%1==0)r=[e*i,1];else if(e<1e-19)r=[i,1e19];else if(e>1e19)r=[1e19*i,1];else{do{if(d=1/(d-Math.floor(d)),n=p,p=p*Math.floor(d)+s,s=n,u=l,(l=Math.floor(e*p+.5))>=o||p>=m)return[i*u,s]}while(Math.abs(e-l/p)>=1e-10&&d!==Math.floor(d));r=[i*l,p]}return r}var h=Math.pow(2,2),_=Math.pow(2,3),v=Math.pow(2,4),b=Math.pow(2,5),y=Math.pow(2,6),j=Math.pow(2,7),k=Math.pow(2,8),M=Math.pow(2,9),z={"#":"",0:"0","?":" "},x={"@":"text","-":"minus","+":"plus"},F=["#000","#FFF","#F00","#0F0","#00F","#FF0","#F0F","#0FF","#000","#FFF","#F00","#0F0","#00F","#FF0","#F0F","#0FF","#800","#080","#008","#880","#808","#088","#CCC","#888","#99F","#936","#FFC","#CFF","#606","#F88","#06C","#CCF","#008","#F0F","#FF0","#0FF","#808","#800","#088","#00F","#0CF","#CFF","#CFC","#FF9","#9CF","#F9C","#C9F","#FC9","#36F","#3CC","#9C0","#FC0"];function w(e,a,t){return a[t+"_max"]=e.length,a[t+"_min"]=e.replace(/#/g,"").length,a}var S={};function A(e){if(!(e in S)){for(var a=[],t=e.replace(/^[#,]+/,"").replace(/[1-9]\d*/g,(function(e){return"?".repeat(e.length)})),n=0;n<t.length;n++){var r=t.charAt(n);a[n]=r in z?z[r]:r}S[e]=a.join("")}return S[e]}function C(e,a){"string"==typeof e&&(e={type:"string",value:e=e.replace(/ /g,z["?"])}),"string"===e.type&&a.length&&"string"===a[a.length-1].type?a[a.length-1].value+=e.value:a.push(e)}function E(e){for(var a,t,n=[],r={scale:1,text:!1,date:0,date_eval:!1,date_system:null,sec_decimals:0,clock:24,int_pattern:[],frac_pattern:[],man_pattern:[],den_pattern:[],num_pattern:[],tokens:n},i=e+"",o="int",m=!1,d=null,s=[],l=!1;i&&!m;){if(a=/^General/i.exec(i))C({type:"general"},n);else if("int"===o&&(a=/^[#?0]+(?:,[#?0]+)*/.exec(i))||"den"===o&&(a=/^[#?\d]+/.exec(i))||(a=/^[#?0]+/.exec(i)))r[o+"_pattern"].push(a[0]),C(d={type:o,num:a[0]},n);else if((a=/^\//.exec(i))&&r[o+"_pattern"].length){if(!d)throw new SyntaxError("Missing a numerator in pattern ".concat(e));r.fractions=!0,r.num_pattern.push(r[o+"_pattern"].pop()),d.type="num",o="den",C({type:"div"},n)}else if(a=/^,+/.exec(i)){var p=i.charAt(1)in z;t.slice(-1)in z&&(a[0].length>1||!p)?r.scale=Math.pow(.001,a[0].length):C(a[0],n)}else{if(a=/^;/.exec(i)){m=!0;break}if(a=/^[@+-]/.exec(i))"@"===a[0]&&(r.text=!0),C({type:x[a[0]]},n);else if(a=/^(?:\[(h+|m+|s+)\])/i.exec(i)){var f=a[1].toLowerCase(),c=f[0],g={type:"",size:0,date:1,raw:a[0],pad:f.length};"h"===c?(g.size=v,g.type="hour-elap"):"m"===c?(g.size=b,g.type="min-elap"):(g.size=y,g.type="sec-elap"),r.date=r.date|g.size,s.push(g),C(g,n)}else if(a=/^(?:B2)/i.exec(i))l||(r.date_system=6);else if(a=/^(?:B1)/i.exec(i))l||(r.date_system=1);else if(a=/^(?:([hHmMsSyYbBdDegG])\1*)/.exec(i)){var S={type:"",size:0,date:1,raw:a[0]},E=a[0].toLowerCase(),N=E[0];if("y"===E||"yy"===E)S.size=2,S.type="year-short";else if("y"===N||"e"===N)S.size=2,S.type="year";else if("b"===E||"bb"===E)S.size=2,S.type="b-year-short";else if("b"===N)S.size=2,S.type="b-year";else if("d"===E||"dd"===E)S.size=_,S.type="day",S.pad=/dd/.test(E);else if("ddd"===E)S.size=_,S.type="weekday-short";else if("d"===N)S.size=_,S.type="weekday";else if("h"===N)S.size=v,S.type="hour",S.pad=/hh/i.test(E);else if("m"===N){3===E.length?(S.size=h,S.type="monthname-short"):5===E.length?(S.size=h,S.type="monthname-single"):E.length>=4&&(S.size=h,S.type="monthname");var I=s[s.length-1];!S.type&&I&&!I.used&&I.size&(v|y)&&(I.used=!0,S.size=b,S.type="min",S.pad=/mm/.test(E)),S.type||(S.size=h,S.type="month",S.pad=/mm/.test(E),S.indeterminate=!0)}else if("s"===N){S.size=y,S.type="sec",S.pad=/ss/.test(E);var O=s[s.length-1];O&&O.size&b?S.used=!0:O&&O.indeterminate&&(delete O.indeterminate,O.size=b,O.type="min",S.used=!0)}r.date=r.date|S.size,r.date_eval=!0,s.push(S),C(S,n)}else if(a=/^(?:AM\/PM|am\/pm|A\/P)/.exec(i))r.clock=12,r.date=r.date|v,r.date_eval=!0,C({type:"am",short:"A/P"===a[0]},n);else if(r.date&&(a=/^\.0{1,3}/i.exec(i))){var J=a[0].length-1,D=[y,j,k,M][J];r.date=r.date|D,r.date_eval=!0,r.sec_decimals=Math.max(r.sec_decimals,J),C({type:"subsec",size:D,decimals:J,date:1,raw:a[0]},n)}else if((a=/^\\(.)/.exec(i))||(a=/^"([^"]*?)"/.exec(i)))C(a[1],n);else if(a=/^\[(<[=>]?|>=?|=)\s*(-?[.\d]+)\]/.exec(i))r.condition=[a[1],parseFloat(a[2],10)];else if(a=/^\[\$([^\]]+)\]/.exec(i)){var P=a[1].split("-"),T=P.length<2?"":P[P.length-1],L=P[0];L&&C(L,n);var R=u(T);R&&(r.locale=R);var B=parseInt(T,16);if(isFinite(B)&&16711680&B)6===(B>>16&255)&&(r.date_system=6);l=!0}else if(a=/^\[(black|blue|cyan|green|magenta|red|white|yellow|color\s*(\d+))\]/i.exec(i))r.color=a[2]?F[parseInt(a[2],10)]||"#000":a[1].toLowerCase();else if(a=/^\[(DBNum1|ENG|HIJ|JPN|TWN)\]/i.exec(i));else if(a=/^%/.exec(i))r.scale=100,C("%",n);else if(a=/^_(\\.|.)/.exec(i))C(" ",n);else if(a=/^\./.exec(i))C({type:"point"},n),r.dec_fractions=!0,o="frac";else if(a=/^[Ee]([+-]?|(?=[0#?]))/.exec(i))r.exponential=!0,r.exp_plus="+"===a[1],o="man",C({type:"exp",plus:"+"===a[1]},n);else if(a=/^\*(\\.|.)/.exec(i));else{if(a=/^[BENn[]/.exec(i))throw new SyntaxError("Unexpected char ".concat(i.charAt(0)," in pattern ").concat(e));C((a=[i[0]])[0],n)}}t=a[0],i=i.slice(a?a[0].length:1)}if(r.pattern=e.slice(0,e.length-i.length),/^((?:\[[^\]]+\])+)(;|$)/.test(r.pattern)&&!/^\[(?:h+|m+|s+)\]/.test(r.pattern)&&C({type:"text"},n),r.fractions&&r.dec_fractions||r.fractions&&r.exponential)throw new SyntaxError("Invalid pattern: ".concat(r.pattern));var H=r.int_pattern.join("");if(r.grouping=H.indexOf(",")>=0,r.grouping){var U=H.split(","),G=U.length;2===G?r.group_pri=r.group_sec=U[1].length:G>2&&(r.group_pri=U[G-1].length,r.group_sec=U[G-2].length)}else r.group_pri=0,r.group_sec=0;w(H.replace(/[,]/g,""),r,"int"),w(r.frac_pattern.join(""),r,"frac"),w(r.man_pattern.join(""),r,"man");var Z=r.num_pattern.join(""),K=r.den_pattern.join(""),W=/\?/.test(K)||/\?/.test(Z);if(K=K.replace(/\d/g,W?"?":"#"),W&&(K=K.replace(/#$/g,"?")),w(Z,r,"num"),w(K,r,"den"),W&&(Z=Z.replace(/#$/g,"?")),r.int_padding=A(r.int_pattern.join("")),r.frac_padding=A(r.frac_pattern.join("")),r.man_padding=A(r.man_pattern.join("")),r.num_padding=A(Z),r.den_padding=A(K),r.den_pattern.length&&(r.denominator=parseInt(r.den_pattern.join("").replace(/\D/g,""),10)),r.integer=!!r.int_pattern.join("").length,r.fractions&&n.forEach((function(e,a){var t=n[a+1];"string"===e.type&&t&&("num"===t.type?e.rule="num+int":"div"===t.type?e.rule="num":"den"===t.type&&(e.rule="den"))})),r.date&&(r.int_pattern.length||r.frac_pattern.length||1!==r.scale||r.text))throw new Error("Illegal format");return r.date_system||(r.date_system=1),r}var N={total:1,sign:0,period:0,int:1,frac:0};var I=function(e,a){return e.replace(/\./,a.decimal)};function O(e,a,t,n){var r=0|t,i=t<0&&(!a.condition||"<>"===a.condition[0]||">="===a.condition[0]||">"===a.condition[0]);if("string"==typeof t)e.push(t);else if(t===r)i&&e.push(n.negative),e.push(Math.abs(r));else{i&&e.push(n.negative);var o=0,m=Math.abs(t);m&&(o=Math.floor(Math.log10(m)));var d=o<0?m*Math.pow(10,-o):m/Math.pow(10,o);10===d&&(d=1,o++);var s=function(e){var a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=Math.abs(e);if(!t)return N;var n=a&&e<0?1:0,r=Math.floor(t),i=Math.floor(Math.log10(t)+1),o=0,m=0;if(r!==t){o=1;for(var d=String(c(i<0?t*Math.pow(10,-i):t/Math.pow(10,i),15)),s=d.length,u=!0,l=0;l<=d.length;){if("."===d[l]){s--;break}"0"===d[l]&&u?s--:u=!1,l++}m=s-i}return{total:n+Math.max(i,1)+o+m,digits:Math.max(i,0)+m,sign:n,period:o,int:Math.max(i,1),frac:m}}(m),u=function(){var a,t=Math.abs(o);a=1===d?d:c(d,5),e.push(I(a+"",n),n.exponent,o<0?n.negative:n.positive,t<10?"0":"",t)};if(o>=-4&&o<=-1){var l=m.toPrecision(10+o).replace(/0+$/,"");e.push(I(l,n))}else if(10===o){var p=m.toFixed(10).slice(0,12).replace(/\.$/,"");e.push(I(p,n))}else if(Math.abs(o)<=9){if(s.total<=11){var f=c(m,9).toFixed(s.frac);e.push(I(f,n))}else 9===o?e.push(Math.floor(m)):o>=0&&o<9?e.push(c(m,9-o)):u()}else s.total>=12?u():Math.floor(m)===m?e.push(Math.floor(m)):e.push(I(c(m,9).toFixed(s.frac),n))}return e}var J=Math.floor;function D(e){if(0===e)return[1900,1,0];if(60===e)return[1900,2,29];if(e<60)return[1900,e<32?1:2,(e-1)%31+1];var a=e+68569+2415019,t=J(4*a/146097);a-=J((146097*t+3)/4);var n=J(4e3*(a+1)/1461001);a=a-J(1461*n/4)+31;var r=J(80*a/2447),i=a-J(2447*r/80);return[0|100*(t-49)+n+(a=J(r/11)),0|r+2-12*a,0|i]}function P(e){return D(e+1462)}function T(e){if(60===e)throw new Error("#VALUE!");if(e<=1)return[1317,8,29];if(e<60)return[1317,e<32?9:10,1+(e-2)%30];var a=10631/30,t=e+466935,n=J(t/10631),r=J(((t-=10631*n)-.1335)/a);t-=J(r*a+.1335);var i=J((t+28.5001)/29.5);return 13===i?[30*n+r,12,30]:[30*n+r,i,t-J(29.5001*i-29)]}var L={int:"integer",frac:"fraction",man:"mantissa",num:"numerator",den:"denominator"};function R(e,a,t){var n="",r="",i="",o="",m="",d=0,s=0|e,u=0,l=0,p=1,h=0,_=0,x=0,F=0,w=0,S=0,A=t||f;if(!a.text&&isFinite(a.scale)&&1!==a.scale&&(e*=a.scale),a.exponential){var C=Math.abs(e);C&&(d=Math.floor(Math.log(C)/Math.LN10)),a.int_max>1&&(d=Math.floor(d/a.int_max)*a.int_max),C=d<0?C*Math.pow(10,-d):C/Math.pow(10,d),e=e<0?-C:C,n+=Math.abs(d)}if(a.integer){var E=Math.abs(c(e,a.fractions?1:a.frac_max));m+=E<1?"":Math.floor(E)}if(a.grouping){var N="",I=m.length;for(I>a.group_pri&&(I-=a.group_pri,N=A.group+m.slice(I,I+a.group_pri)+N);I>a.group_sec;)I-=a.group_sec,N=A.group+m.slice(I,I+a.group_sec)+N;m=I?m.slice(0,I)+N:N}a.dec_fractions&&(o=String(c(e,a.frac_max)).split(".")[1]||"");var J=!1;if(a.fractions){var R=Math.abs(a.integer?e%1:e);if(R)if(J=!0,isFinite(a.denominator))i+=a.denominator,"0"===(r+=c(R*a.denominator))&&(r="",i="",J=!1,m||(m="0"));else{var B=g(R,a.integer?a.num_max:1/0,a.den_max);r+=B[0],i+=B[1],a.integer&&"0"===r&&(m||(m="0"),r="",i="",J=!1)}}if(a.date_eval&&(e<0||e>2958465))return A.overflow;if(a.date){var H=86400*(e-(s=0|e));if(S=H-(u=Math.floor(H)),Math.abs(S)<1e-6?S=0:S>.9999&&(S=0,86400===(u+=1)&&(u=0,s+=1)),s||a.date_system){var U=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return 6===a?T(e):-1===a?P(e):D(e)}(e,a.date_system);l=U[0],p=U[1],h=U[2]}if(u||S){var G=a.date&M||a.date&k||a.date&j||a.date&y||a.date&b||a.date&v;G===M?S>.9995&&(u++,S=0):G===k?S>.995&&(u++,S=0):G===j?S>.95&&(u++,S=0):G===y||G===b?S>=.5&&u++:G===v&&S>=.5&&u++,w=Math.floor(u)%60,F=Math.floor(u/60)%60,x=Math.floor(u/60/60)%60}_=(6+s)%7}a.int_padding&&(m=1===a.int_padding.length?m||a.int_padding:a.int_padding.substring(0,a.int_padding.length-m.length)+m),a.num_padding&&(r=1===a.num_padding.length?r||a.num_padding:a.num_padding.substring(0,a.num_padding.length-r.length)+r),a.den_padding&&(i=1===a.den_padding.length?i||a.den_padding:i+a.den_padding.slice(i.length));var Z=a.frac_padding;if(a.man_padding){var K=a.exp_plus?"+":"";n=1===a.man_padding.length?(d<0?"-":K)+(n||a.man_padding):(d<0?"-":K)+a.man_padding.slice(0,a.man_padding.length-n.length)+n}for(var W=[],Y=0,$={int:0,frac:0,man:0,num:0,den:0},q=0,V=a.tokens.length;q<V;q++){var Q=a.tokens[q],X=Q.num?Q.num.length:0;if("string"===Q.type)Q.rule?"num"===Q.rule?J?W.push(Q.value):a.num_min>0||a.den_min>0?W.push(Q.value.replace(/./g,z["?"])):W.push(""):"num+int"===Q.rule?J&&m?W.push(Q.value):a.den_min>0&&(m||a.num_min)?W.push(Q.value.replace(/./g,z["?"])):W.push(""):"den"===Q.rule&&(J?W.push(Q.value):a.den_min>0||a.den_min>0?W.push(Q.value.replace(/./g,z["?"])):W.push("")):W.push(Q.value);else if("point"===Q.type)W.push(A.decimal);else if("general"===Q.type)O(W,a,e,A);else if("exp"===Q.type)W.push(A.exponent);else if("minus"===Q.type)W.push(A.negative);else if("plus"===Q.type)W.push(A.positive);else if("text"===Q.type)W.push(e);else if("div"===Q.type)J?W.push("/"):a.num_min>0||a.den_min>0?W.push(z["?"]):W.push(z["#"]);else if("int"===Q.type)if(1===a.int_pattern.length)W.push(m);else{var ee=Y?a.int_pattern.join("").length-$.int:1/0,ae=Y===a.int_pattern.length-1?0:a.int_pattern.join("").length-($.int+Q.num.length);W.push(m.substring(m.length-ee,m.length-ae)),Y++,$.int+=Q.num.length}else if("frac"===Q.type)1===a.frac_pattern.length?W.push(Z.length<2?o||Z:o+Z.slice(o.length)):(W.push(o.slice($.frac,$.frac+X)),$.frac+=X);else if(Q.type in L)1===a[Q.type+"_pattern"].length?("int"===Q.type&&W.push(m),"frac"===Q.type&&W.push(o),"man"===Q.type&&W.push(n),"num"===Q.type&&W.push(r),"den"===Q.type&&W.push(i)):(W.push(L[Q.type].slice($[Q.type],$[Q.type]+X)),$[Q.type]+=X);else if("year"===Q.type)W.push(l);else if("year-short"===Q.type){var te=l%100;W.push(te<10?"0":"",te)}else if("month"===Q.type)W.push(Q.pad&&p<10?"0":"",p);else if("monthname-single"===Q.type)6===a.date_system?W.push(A.mmmm6[p-1].charAt(0)):W.push(A.mmmm[p-1].charAt(0));else if("monthname-short"===Q.type)6===a.date_system?W.push(A.mmm6[p-1]):W.push(A.mmm[p-1]);else if("monthname"===Q.type)6===a.date_system?W.push(A.mmmm6[p-1]):W.push(A.mmmm[p-1]);else if("weekday-short"===Q.type)W.push(A.ddd[_]);else if("weekday"===Q.type)W.push(A.dddd[_]);else if("day"===Q.type)W.push(Q.pad&&h<10?"0":"",h);else if("hour"===Q.type){var ne=x%a.clock||(a.clock<24?a.clock:0);W.push(Q.pad&&ne<10?"0":"",ne)}else if("min"===Q.type)W.push(Q.pad&&F<10?"0":"",F);else if("sec"===Q.type)W.push(Q.pad&&w<10?"0":"",w);else if("subsec"===Q.type){W.push(A.decimal);var re=S.toFixed(a.sec_decimals);W.push(re.slice(2,2+Q.decimals))}else if("am"===Q.type){var ie=x<12?0:1;Q.short&&!t?W.push("AP"[ie]):W.push(A.ampm[ie])}else if("hour-elap"===Q.type)W.push(String(Math.abs(24*s+x)).padStart(Q.pad,"0"));else if("min-elap"===Q.type)W.push(String(Math.abs(1440*s+60*x+F)).padStart(Q.pad,"0"));else if("sec-elap"===Q.type)W.push(String(Math.abs(u+86400*s)).padStart(Q.pad,"0"));else if("b-year"===Q.type)W.push(l+543);else if("b-year-short"===Q.type){var oe=(l+543)%100;W.push(oe<10?"0":"",oe)}}return W.join("")}function B(e,a){for(var t=0;t<3;t++){var n=a[t];if(n){var r=void 0;if(n.condition){var i=n.condition[0],o=n.condition[1];"="===i?r=e===o:">"===i?r=e>o:"<"===i?r=e<o:">="===i?r=e>=o:"<="===i?r=e<=o:"<>"===i&&(r=e!==o)}else r=!0;if(r)return n}}}var H=E("@");var U=function(e,a){var t,n=[],r=!1,i=null,o=e,m=0,s=!1,u=0,l=0;do{(s=E(o)).condition&&(l++,r=!0),s.text&&(i=s),s.locale&&(t=d(s.locale)),n.push(s),m=";"===o.charAt(s.pattern.length)?1:0,o=o.slice(s.pattern.length+m),u++}while(m&&u<4&&l<3);if(l>2)throw new Error("Unexpected condition");if(m)throw new Error("Unexpected partition");if(!r){if(n.length<4&&i)for(var p=0,c=n.length;p<c;p++)n[p]===i&&n.splice(p,1);n.length<1&&i&&(n[0]=E("General")),n.length<2&&n.push(E("-"+n[0].pattern)),n.length<3&&n.push(E(n[0].pattern)),n.length<4&&n.push(i||E("@")),n[0].condition=[">",0],n[1].condition=["<",0],n[2].condition=null}var g=function(e){return function(e,a,t){if(e instanceof Date){var n=(e-=60*e.getTimezoneOffset()*1e3)/864e5;e=n-(n<=-25509?-25568:-25569)}var r=a[3]?a[3]:H;if("boolean"==typeof e&&(e=e?"TRUE":"FALSE"),null==e)return"";if("number"!=typeof e)return R(e,r,t);if(!isFinite(e)){var i=t||f;return isNaN(e)?i.nan:(e<0?i.negative:"")+i.infinity}var o=B(e,a);return o?R(e,o,t):""}(e,n,t||a)};return g.color=function(e){return function(e,a){if("number"!=typeof e||!isFinite(e))return(a[3]?a[3].color:H.color)||"black";var t=B(e,a);return t&&t.color||"black"}(e,n)},g.isDate=function(){return!!(n[0]&&n[0].date||n[1]&&n[1].date||n[2]&&n[2].date||n[3]&&n[3].date)},g.pattern=e,g.locale=a,g},G={};function Z(e,a){try{return U(e,a)}catch(n){var t=function(){return"######"};return t.color=function(){return"black"},t.isDate=function(){return!1},t.pattern=e,t.locale=a,t.error=n.message,t}}function K(e,a){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];e||(e="General");var n=a?u(a)||a:"";if(G[n]||(G[n]={}),!G[n][e]){var r=d(n),i=t?Z(e,r):U(e,r);G[n][e]=i}return G[n][e]}K.isDate=function(e){return K(e).isDate()},K.dec2frac=g,K.round=c,K.codeToLocale=n,K.parseLocale=s,K.getLocale=d,K.addLocale=function(e,a){var t=s(a);return delete G[t.lang],delete G[t.language],p(e,t)},K.format=function(e,a,t){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return K(e,t,n)(a)},K.is_date=K.isDate;a.default=K}]).default}));