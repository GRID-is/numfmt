import test from 'tape';
import fmt from '../lib';

/*
const defaultOptions = {
  dateSpanLarge: false,
  leap1900bug: true,
  nbsp: true,
};
*/

const ISODATE = 'yyyy-mm-dd';
const ISODATETIME = 'yyyy-mm-dd\\Thh:mm:ss';

test('dateSpanLarge: ON', t => {
  t.is(fmt(ISODATETIME)(0.1, { leap1900: false, dateSpanLarge: true }), '1899-12-30T02:24:00', '1899-12-30T02:24:00');
  t.is(fmt(ISODATETIME)(-0.00001157407, { leap1900: false, dateSpanLarge: true }), '1899-12-29T23:59:59', '1899-12-29T23:59:59');

  t.is(fmt(ISODATETIME)(0, { leap1900: false, dateSpanLarge: true }), '1899-12-30T00:00:00', '1899-12-30T00:00:00');
  t.is(fmt(ISODATETIME)(-0.1, { leap1900: false, dateSpanLarge: true }), '1899-12-29T21:36:00', '1899-12-29T21:36:00');

  t.is(fmt('[s]')(-0.1, { leap1900: false, dateSpanLarge: true }), '-8640', '[s]');
  t.is(fmt('[m]')(-0.1, { leap1900: false, dateSpanLarge: true }), '-144', '[m]');
  t.is(fmt('[h]')(-0.1, { leap1900: false, dateSpanLarge: true }), '-2', '[h]');
  t.is(fmt('[s]')(-2, { leap1900: false, dateSpanLarge: true }), '-172800', '[s]');
  t.is(fmt('[m]')(-2, { leap1900: false, dateSpanLarge: true }), '-2880', '[m]');
  t.is(fmt('[h]')(-2, { leap1900: false, dateSpanLarge: true }), '-48', '[h]');

  t.is(fmt(ISODATETIME)(-0.2, { leap1900: false, dateSpanLarge: true }), '1899-12-29T19:12:00', '1899-12-29T19:12:00');
  t.is(fmt(ISODATETIME)(-0.3, { leap1900: false, dateSpanLarge: true }), '1899-12-29T16:48:00', '1899-12-29T16:48:00');
  t.is(fmt(ISODATETIME)(-0.4, { leap1900: false, dateSpanLarge: true }), '1899-12-29T14:24:00', '1899-12-29T14:24:00');
  t.is(fmt(ISODATETIME)(-0.5, { leap1900: false, dateSpanLarge: true }), '1899-12-29T12:00:00', '1899-12-29T12:00:00');
  t.is(fmt(ISODATETIME)(-0.6, { leap1900: false, dateSpanLarge: true }), '1899-12-29T09:36:00', '1899-12-29T09:36:00');
  t.is(fmt(ISODATETIME)(-0.7, { leap1900: false, dateSpanLarge: true }), '1899-12-29T07:12:00', '1899-12-29T07:12:00');
  t.is(fmt(ISODATETIME)(-0.8, { leap1900: false, dateSpanLarge: true }), '1899-12-29T04:48:00', '1899-12-29T04:48:00');
  t.is(fmt(ISODATETIME)(-0.9, { leap1900: false, dateSpanLarge: true }), '1899-12-29T02:24:00', '1899-12-29T02:24:00');
  t.is(fmt(ISODATETIME)(-1, { leap1900: false, dateSpanLarge: true }), '1899-12-29T00:00:00', '1899-12-29T00:00:00');
  t.is(fmt(ISODATETIME)(-1.1, { leap1900: false, dateSpanLarge: true }), '1899-12-28T21:36:00', '1899-12-28T21:36:00');
  t.is(fmt(ISODATETIME)(-1.2, { leap1900: false, dateSpanLarge: true }), '1899-12-28T19:12:00', '1899-12-28T19:12:00');
  t.is(fmt(ISODATETIME)(-1.3, { leap1900: false, dateSpanLarge: true }), '1899-12-28T16:48:00', '1899-12-28T16:48:00');
  t.is(fmt(ISODATETIME)(-1.4, { leap1900: false, dateSpanLarge: true }), '1899-12-28T14:24:00', '1899-12-28T14:24:00');
  t.is(fmt(ISODATETIME)(-1.5, { leap1900: false, dateSpanLarge: true }), '1899-12-28T12:00:00', '1899-12-28T12:00:00');
  t.is(fmt(ISODATETIME)(-1.6, { leap1900: false, dateSpanLarge: true }), '1899-12-28T09:36:00', '1899-12-28T09:36:00');
  t.is(fmt(ISODATETIME)(-1.7, { leap1900: false, dateSpanLarge: true }), '1899-12-28T07:12:00', '1899-12-28T07:12:00');
  t.is(fmt(ISODATETIME)(-1.8, { leap1900: false, dateSpanLarge: true }), '1899-12-28T04:48:00', '1899-12-28T04:48:00');
  t.is(fmt(ISODATETIME)(-1.9, { leap1900: false, dateSpanLarge: true }), '1899-12-28T02:24:00', '1899-12-28T02:24:00');
  t.is(fmt(ISODATETIME)(-2, { leap1900: false, dateSpanLarge: true }), '1899-12-28T00:00:00', '1899-12-28T00:00:00');

  // negative dates should not be affected by the leap year bug
  t.is(fmt(ISODATETIME)(-0.2, { dateSpanLarge: true }), '1899-12-29T19:12:00', '1899-12-29T19:12:00 [with 1900 bug]');
  t.is(fmt(ISODATETIME)(-0.3, { dateSpanLarge: true }), '1899-12-29T16:48:00', '1899-12-29T16:48:00 [with 1900 bug]');
  t.is(fmt(ISODATETIME)(-0.4, { dateSpanLarge: true }), '1899-12-29T14:24:00', '1899-12-29T14:24:00 [with 1900 bug]');
  t.is(fmt(ISODATETIME)(-0.5, { dateSpanLarge: true }), '1899-12-29T12:00:00', '1899-12-29T12:00:00 [with 1900 bug]');
  t.is(fmt(ISODATETIME)(-0.6, { dateSpanLarge: true }), '1899-12-29T09:36:00', '1899-12-29T09:36:00 [with 1900 bug]');
  t.is(fmt(ISODATETIME)(-0.7, { dateSpanLarge: true }), '1899-12-29T07:12:00', '1899-12-29T07:12:00 [with 1900 bug]');
  t.is(fmt(ISODATETIME)(-0.8, { dateSpanLarge: true }), '1899-12-29T04:48:00', '1899-12-29T04:48:00 [with 1900 bug]');
  t.is(fmt(ISODATETIME)(-0.9, { dateSpanLarge: true }), '1899-12-29T02:24:00', '1899-12-29T02:24:00 [with 1900 bug]');
  t.is(fmt(ISODATETIME)(-1, { dateSpanLarge: true }), '1899-12-29T00:00:00', '1899-12-29T00:00:00 [with 1900 bug]');
  t.is(fmt(ISODATETIME)(-1.1, { dateSpanLarge: true }), '1899-12-28T21:36:00', '1899-12-28T21:36:00 [with 1900 bug]');
  t.is(fmt(ISODATETIME)(-1.2, { dateSpanLarge: true }), '1899-12-28T19:12:00', '1899-12-28T19:12:00 [with 1900 bug]');
  t.is(fmt(ISODATETIME)(-1.3, { dateSpanLarge: true }), '1899-12-28T16:48:00', '1899-12-28T16:48:00 [with 1900 bug]');
  t.is(fmt(ISODATETIME)(-1.4, { dateSpanLarge: true }), '1899-12-28T14:24:00', '1899-12-28T14:24:00 [with 1900 bug]');
  t.is(fmt(ISODATETIME)(-1.5, { dateSpanLarge: true }), '1899-12-28T12:00:00', '1899-12-28T12:00:00 [with 1900 bug]');
  t.is(fmt(ISODATETIME)(-1.6, { dateSpanLarge: true }), '1899-12-28T09:36:00', '1899-12-28T09:36:00 [with 1900 bug]');
  t.is(fmt(ISODATETIME)(-1.7, { dateSpanLarge: true }), '1899-12-28T07:12:00', '1899-12-28T07:12:00 [with 1900 bug]');
  t.is(fmt(ISODATETIME)(-1.8, { dateSpanLarge: true }), '1899-12-28T04:48:00', '1899-12-28T04:48:00 [with 1900 bug]');
  t.is(fmt(ISODATETIME)(-1.9, { dateSpanLarge: true }), '1899-12-28T02:24:00', '1899-12-28T02:24:00 [with 1900 bug]');
  t.is(fmt(ISODATETIME)(-2, { dateSpanLarge: true }), '1899-12-28T00:00:00', '1899-12-28T00:00:00 [with 1900 bug]');

  t.is(fmt(ISODATE)(-45000, { leap1900: false, dateSpanLarge: true }), '1776-10-15', '1776-10-15');

  t.is(fmt(ISODATE)(35830289, { leap1900: false, dateSpanLarge: true }), '99999-12-30', '99999-12-30');
  t.is(fmt(ISODATE)(35830290, { leap1900: false, dateSpanLarge: true }), '99999-12-31', '99999-12-31');
  t.is(fmt(ISODATETIME)(35830290.9, { leap1900: false, dateSpanLarge: true }), '99999-12-31T21:36:00', '99999-12-31T21:36:00');
  t.is(fmt(ISODATETIME)(35830291, { leap1900: false, dateSpanLarge: true }), '######', 'out of bounds [MAX]');
  t.is(fmt(ISODATETIME)(35830291, { leap1900: false, dateSpanLarge: true, dateErrorNumber: true }), '35830291', 'out of bounds [MAX] (number mode)');

  // Google Sheets emits "00-1-01-02" for TEXT(-694324, ISODATE) which is clearly not useful to anyone
  t.is(fmt(ISODATE)(-694323, { leap1900: false, dateSpanLarge: true }), '-0001-01-02', '-0001-01-02');
  t.is(fmt(ISODATE)(-694324, { leap1900: false, dateSpanLarge: true }), '-0001-01-01', '-0001-01-01');
  t.is(fmt(ISODATETIME)(-694324.1, { leap1900: false, dateSpanLarge: true }), '######', 'out of bounds [MIN]');
  t.is(fmt(ISODATETIME)(-694324.1, { leap1900: false, dateSpanLarge: true, dateErrorNumber: true }), '-694324.1', 'out of bounds [MIN] (number mode)');

  t.end();
});

test('Excel leap 1900 bug: ON', t => {
  t.is(fmt(ISODATE)(61, { leap1900: true }), '1900-03-01', '1900-03-01');
  t.is(fmt(ISODATE)(60, { leap1900: true }), '1900-02-29', '1900-02-29');
  t.is(fmt(ISODATE)(59, { leap1900: true }), '1900-02-28', '1900-02-28');
  t.is(fmt(ISODATE)(58, { leap1900: true }), '1900-02-27', '1900-02-27');
  t.is(fmt(ISODATE)(57, { leap1900: true }), '1900-02-26', '1900-02-26');
  t.is(fmt(ISODATE)(56, { leap1900: true }), '1900-02-25', '1900-02-25');
  t.is(fmt(ISODATE)(55, { leap1900: true }), '1900-02-24', '1900-02-24');
  t.is(fmt(ISODATE)(54, { leap1900: true }), '1900-02-23', '1900-02-23');
  t.is(fmt(ISODATE)(53, { leap1900: true }), '1900-02-22', '1900-02-22');
  t.is(fmt(ISODATE)(52, { leap1900: true }), '1900-02-21', '1900-02-21');
  t.is(fmt(ISODATE)(51, { leap1900: true }), '1900-02-20', '1900-02-20');
  t.is(fmt(ISODATE)(50, { leap1900: true }), '1900-02-19', '1900-02-19');
  t.is(fmt(ISODATE)(49, { leap1900: true }), '1900-02-18', '1900-02-18');
  t.is(fmt(ISODATE)(48, { leap1900: true }), '1900-02-17', '1900-02-17');
  t.is(fmt(ISODATE)(47, { leap1900: true }), '1900-02-16', '1900-02-16');
  t.is(fmt(ISODATE)(46, { leap1900: true }), '1900-02-15', '1900-02-15');
  t.is(fmt(ISODATE)(45, { leap1900: true }), '1900-02-14', '1900-02-14');
  t.is(fmt(ISODATE)(44, { leap1900: true }), '1900-02-13', '1900-02-13');
  t.is(fmt(ISODATE)(43, { leap1900: true }), '1900-02-12', '1900-02-12');
  t.is(fmt(ISODATE)(42, { leap1900: true }), '1900-02-11', '1900-02-11');
  t.is(fmt(ISODATE)(41, { leap1900: true }), '1900-02-10', '1900-02-10');
  t.is(fmt(ISODATE)(40, { leap1900: true }), '1900-02-09', '1900-02-09');
  t.is(fmt(ISODATE)(39, { leap1900: true }), '1900-02-08', '1900-02-08');
  t.is(fmt(ISODATE)(38, { leap1900: true }), '1900-02-07', '1900-02-07');
  t.is(fmt(ISODATE)(37, { leap1900: true }), '1900-02-06', '1900-02-06');
  t.is(fmt(ISODATE)(36, { leap1900: true }), '1900-02-05', '1900-02-05');
  t.is(fmt(ISODATE)(35, { leap1900: true }), '1900-02-04', '1900-02-04');
  t.is(fmt(ISODATE)(34, { leap1900: true }), '1900-02-03', '1900-02-03');
  t.is(fmt(ISODATE)(33, { leap1900: true }), '1900-02-02', '1900-02-02');
  t.is(fmt(ISODATE)(32, { leap1900: true }), '1900-02-01', '1900-02-01');
  t.is(fmt(ISODATE)(31, { leap1900: true }), '1900-01-31', '1900-01-31');
  t.is(fmt(ISODATE)(30, { leap1900: true }), '1900-01-30', '1900-01-30');
  t.is(fmt(ISODATE)(29, { leap1900: true }), '1900-01-29', '1900-01-29');
  t.is(fmt(ISODATE)(28, { leap1900: true }), '1900-01-28', '1900-01-28');
  t.is(fmt(ISODATE)(27, { leap1900: true }), '1900-01-27', '1900-01-27');
  t.is(fmt(ISODATE)(26, { leap1900: true }), '1900-01-26', '1900-01-26');
  t.is(fmt(ISODATE)(25, { leap1900: true }), '1900-01-25', '1900-01-25');
  t.is(fmt(ISODATE)(24, { leap1900: true }), '1900-01-24', '1900-01-24');
  t.is(fmt(ISODATE)(23, { leap1900: true }), '1900-01-23', '1900-01-23');
  t.is(fmt(ISODATE)(22, { leap1900: true }), '1900-01-22', '1900-01-22');
  t.is(fmt(ISODATE)(21, { leap1900: true }), '1900-01-21', '1900-01-21');
  t.is(fmt(ISODATE)(20, { leap1900: true }), '1900-01-20', '1900-01-20');
  t.is(fmt(ISODATE)(19, { leap1900: true }), '1900-01-19', '1900-01-19');
  t.is(fmt(ISODATE)(18, { leap1900: true }), '1900-01-18', '1900-01-18');
  t.is(fmt(ISODATE)(17, { leap1900: true }), '1900-01-17', '1900-01-17');
  t.is(fmt(ISODATE)(16, { leap1900: true }), '1900-01-16', '1900-01-16');
  t.is(fmt(ISODATE)(15, { leap1900: true }), '1900-01-15', '1900-01-15');
  t.is(fmt(ISODATE)(14, { leap1900: true }), '1900-01-14', '1900-01-14');
  t.is(fmt(ISODATE)(13, { leap1900: true }), '1900-01-13', '1900-01-13');
  t.is(fmt(ISODATE)(12, { leap1900: true }), '1900-01-12', '1900-01-12');
  t.is(fmt(ISODATE)(11, { leap1900: true }), '1900-01-11', '1900-01-11');
  t.is(fmt(ISODATE)(10, { leap1900: true }), '1900-01-10', '1900-01-10');
  t.is(fmt(ISODATE)(9, { leap1900: true }), '1900-01-09', '1900-01-09');
  t.is(fmt(ISODATE)(8, { leap1900: true }), '1900-01-08', '1900-01-08');
  t.is(fmt(ISODATE)(7, { leap1900: true }), '1900-01-07', '1900-01-07');
  t.is(fmt(ISODATE)(6, { leap1900: true }), '1900-01-06', '1900-01-06');
  t.is(fmt(ISODATE)(5, { leap1900: true }), '1900-01-05', '1900-01-05');
  t.is(fmt(ISODATE)(4, { leap1900: true }), '1900-01-04', '1900-01-04');
  t.is(fmt(ISODATE)(3, { leap1900: true }), '1900-01-03', '1900-01-03');
  t.is(fmt(ISODATE)(2, { leap1900: true }), '1900-01-02', '1900-01-02');
  t.is(fmt(ISODATE)(1, { leap1900: true }), '1900-01-01', '1900-01-01');
  t.is(fmt(ISODATE)(0, { leap1900: true }), '1900-01-00', '1900-01-00');
  t.end();
});

test('Excel 1900 bug: OFF', t => {
  t.is(fmt(ISODATE)(61, { leap1900: false }), '1900-03-01', '1900-03-01');
  t.is(fmt(ISODATE)(60, { leap1900: false }), '1900-02-28', '1900-02-28');
  t.is(fmt(ISODATE)(59, { leap1900: false }), '1900-02-27', '1900-02-27');
  t.is(fmt(ISODATE)(58, { leap1900: false }), '1900-02-26', '1900-02-26');
  t.is(fmt(ISODATE)(57, { leap1900: false }), '1900-02-25', '1900-02-25');
  t.is(fmt(ISODATE)(56, { leap1900: false }), '1900-02-24', '1900-02-24');
  t.is(fmt(ISODATE)(55, { leap1900: false }), '1900-02-23', '1900-02-23');
  t.is(fmt(ISODATE)(54, { leap1900: false }), '1900-02-22', '1900-02-22');
  t.is(fmt(ISODATE)(53, { leap1900: false }), '1900-02-21', '1900-02-21');
  t.is(fmt(ISODATE)(52, { leap1900: false }), '1900-02-20', '1900-02-20');
  t.is(fmt(ISODATE)(51, { leap1900: false }), '1900-02-19', '1900-02-19');
  t.is(fmt(ISODATE)(50, { leap1900: false }), '1900-02-18', '1900-02-18');
  t.is(fmt(ISODATE)(49, { leap1900: false }), '1900-02-17', '1900-02-17');
  t.is(fmt(ISODATE)(48, { leap1900: false }), '1900-02-16', '1900-02-16');
  t.is(fmt(ISODATE)(47, { leap1900: false }), '1900-02-15', '1900-02-15');
  t.is(fmt(ISODATE)(46, { leap1900: false }), '1900-02-14', '1900-02-14');
  t.is(fmt(ISODATE)(45, { leap1900: false }), '1900-02-13', '1900-02-13');
  t.is(fmt(ISODATE)(44, { leap1900: false }), '1900-02-12', '1900-02-12');
  t.is(fmt(ISODATE)(43, { leap1900: false }), '1900-02-11', '1900-02-11');
  t.is(fmt(ISODATE)(42, { leap1900: false }), '1900-02-10', '1900-02-10');
  t.is(fmt(ISODATE)(41, { leap1900: false }), '1900-02-09', '1900-02-09');
  t.is(fmt(ISODATE)(40, { leap1900: false }), '1900-02-08', '1900-02-08');
  t.is(fmt(ISODATE)(39, { leap1900: false }), '1900-02-07', '1900-02-07');
  t.is(fmt(ISODATE)(38, { leap1900: false }), '1900-02-06', '1900-02-06');
  t.is(fmt(ISODATE)(37, { leap1900: false }), '1900-02-05', '1900-02-05');
  t.is(fmt(ISODATE)(36, { leap1900: false }), '1900-02-04', '1900-02-04');
  t.is(fmt(ISODATE)(35, { leap1900: false }), '1900-02-03', '1900-02-03');
  t.is(fmt(ISODATE)(34, { leap1900: false }), '1900-02-02', '1900-02-02');
  t.is(fmt(ISODATE)(33, { leap1900: false }), '1900-02-01', '1900-02-01');
  t.is(fmt(ISODATE)(32, { leap1900: false }), '1900-01-31', '1900-01-31');
  t.is(fmt(ISODATE)(31, { leap1900: false }), '1900-01-30', '1900-01-30');
  t.is(fmt(ISODATE)(30, { leap1900: false }), '1900-01-29', '1900-01-29');
  t.is(fmt(ISODATE)(29, { leap1900: false }), '1900-01-28', '1900-01-28');
  t.is(fmt(ISODATE)(28, { leap1900: false }), '1900-01-27', '1900-01-27');
  t.is(fmt(ISODATE)(27, { leap1900: false }), '1900-01-26', '1900-01-26');
  t.is(fmt(ISODATE)(26, { leap1900: false }), '1900-01-25', '1900-01-25');
  t.is(fmt(ISODATE)(25, { leap1900: false }), '1900-01-24', '1900-01-24');
  t.is(fmt(ISODATE)(24, { leap1900: false }), '1900-01-23', '1900-01-23');
  t.is(fmt(ISODATE)(23, { leap1900: false }), '1900-01-22', '1900-01-22');
  t.is(fmt(ISODATE)(22, { leap1900: false }), '1900-01-21', '1900-01-21');
  t.is(fmt(ISODATE)(21, { leap1900: false }), '1900-01-20', '1900-01-20');
  t.is(fmt(ISODATE)(20, { leap1900: false }), '1900-01-19', '1900-01-19');
  t.is(fmt(ISODATE)(19, { leap1900: false }), '1900-01-18', '1900-01-18');
  t.is(fmt(ISODATE)(18, { leap1900: false }), '1900-01-17', '1900-01-17');
  t.is(fmt(ISODATE)(17, { leap1900: false }), '1900-01-16', '1900-01-16');
  t.is(fmt(ISODATE)(16, { leap1900: false }), '1900-01-15', '1900-01-15');
  t.is(fmt(ISODATE)(15, { leap1900: false }), '1900-01-14', '1900-01-14');
  t.is(fmt(ISODATE)(14, { leap1900: false }), '1900-01-13', '1900-01-13');
  t.is(fmt(ISODATE)(13, { leap1900: false }), '1900-01-12', '1900-01-12');
  t.is(fmt(ISODATE)(12, { leap1900: false }), '1900-01-11', '1900-01-11');
  t.is(fmt(ISODATE)(11, { leap1900: false }), '1900-01-10', '1900-01-10');
  t.is(fmt(ISODATE)(10, { leap1900: false }), '1900-01-09', '1900-01-09');
  t.is(fmt(ISODATE)(9, { leap1900: false }), '1900-01-08', '1900-01-08');
  t.is(fmt(ISODATE)(8, { leap1900: false }), '1900-01-07', '1900-01-07');
  t.is(fmt(ISODATE)(7, { leap1900: false }), '1900-01-06', '1900-01-06');
  t.is(fmt(ISODATE)(6, { leap1900: false }), '1900-01-05', '1900-01-05');
  t.is(fmt(ISODATE)(5, { leap1900: false }), '1900-01-04', '1900-01-04');
  t.is(fmt(ISODATE)(4, { leap1900: false }), '1900-01-03', '1900-01-03');
  t.is(fmt(ISODATE)(3, { leap1900: false }), '1900-01-02', '1900-01-02');
  t.is(fmt(ISODATE)(2, { leap1900: false }), '1900-01-01', '1900-01-01');
  t.is(fmt(ISODATE)(1, { leap1900: false }), '1899-12-31', '1899-12-31');
  t.is(fmt(ISODATE)(0, { leap1900: false }), '1899-12-30', '1899-12-30');
  t.end();
});

