// tests converted from SSF
import test from 'tape';
import numdec from '../lib/numdec';

function _f (v) {
  return numdec(v).total;
}

test('numdec', t => {
  t.is(_f(1.234567E-14), 22, '1.234567E-14');
  t.is(_f(1.234567E-13), 21, '1.234567E-13');
  t.is(_f(0.000000000001234567), 20, '0.000000000001234567');
  t.is(_f(0.00000000001234567), 19, '0.00000000001234567');
  t.is(_f(0.0000000001234567), 18, '0.0000000001234567');
  t.is(_f(0.000000001234567), 17, '0.000000001234567');
  t.is(_f(0.00000001234567), 16, '0.00000001234567');
  t.is(_f(0.0000001234567), 15, '0.0000001234567');
  t.is(_f(0.000001234567), 14, '0.000001234567');
  t.is(_f(0.00001234567), 13, '0.00001234567');
  t.is(_f(0.0001234567), 12, '0.0001234567');
  t.is(_f(0.001234567), 11, '0.001234567');
  t.is(_f(0.01234567), 10, '0.01234567');
  t.is(_f(0.1234567), 9, '0.1234567');
  t.is(_f(1.234567), 8, '1.234567');
  t.is(_f(12.34567), 8, '12.34567');
  t.is(_f(123.4567), 8, '123.4567');
  t.is(_f(1234.567), 8, '1234.567');
  t.is(_f(12345.67), 8, '12345.67');
  t.is(_f(123456.7), 8, '123456.7');
  t.is(_f(1234567), 7, '1234567');
  t.is(_f(12345670), 8, '12345670');
  t.is(_f(123456700), 9, '123456700');
  t.is(_f(1234567000), 10, '1234567000');
  t.is(_f(12345670000), 11, '12345670000');
  t.is(_f(123456700000), 12, '123456700000');
  t.is(_f(1234567000000), 13, '1234567000000');
  t.is(_f(12345670000000), 14, '12345670000000');
  t.is(_f(123456700000000), 15, '123456700000000');
  t.is(_f(0.00000000000001), 16, '0.00000000000001');
  t.is(_f(0.0000000000001), 15, '0.0000000000001');
  t.is(_f(0.000000000001), 14, '0.000000000001');
  t.is(_f(0.00000000001), 13, '0.00000000001');
  t.is(_f(0.0000000001), 12, '0.0000000001');
  t.is(_f(0.000000001), 11, '0.000000001');
  t.is(_f(0.00000001), 10, '0.00000001');
  t.is(_f(0.0000001), 9, '0.0000001');
  t.is(_f(0.000001), 8, '0.000001');
  t.is(_f(0.00001), 7, '0.00001');
  t.is(_f(0.0001), 6, '0.0001');
  t.is(_f(0.001), 5, '0.001');
  t.is(_f(0.01), 4, '0.01');
  t.is(_f(0.1), 3, '0.1');
  t.is(_f(1), 1, '1');
  t.is(_f(10), 2, '10');
  t.is(_f(100), 3, '100');
  t.is(_f(1000), 4, '1000');
  t.is(_f(10000), 5, '10000');
  t.is(_f(100000), 6, '100000');
  t.is(_f(1000000), 7, '1000000');
  t.is(_f(10000000), 8, '10000000');
  t.is(_f(100000000), 9, '100000000');
  t.is(_f(1000000000), 10, '1000000000');
  t.is(_f(10000000000), 11, '10000000000');
  t.is(_f(100000000000), 12, '100000000000');
  t.is(_f(1000000000000), 13, '1000000000000');
  t.is(_f(10000000000000), 14, '10000000000000');
  t.is(_f(100000000000000), 15, '100000000000000');
  t.is(_f(0.000000000000012), 17, '0.000000000000012');
  t.is(_f(0.00000000000012), 16, '0.00000000000012');
  t.is(_f(0.0000000000012), 15, '0.0000000000012');
  t.is(_f(0.000000000012), 14, '0.000000000012');
  t.is(_f(0.00000000012), 13, '0.00000000012');
  t.is(_f(0.0000000012), 12, '0.0000000012');
  t.is(_f(0.000000012), 11, '0.000000012');
  t.is(_f(0.00000012), 10, '0.00000012');
  t.is(_f(0.0000012), 9, '0.0000012');
  t.is(_f(0.000012), 8, '0.000012');
  t.is(_f(0.00012), 7, '0.00012');
  t.is(_f(0.0012), 6, '0.0012');
  t.is(_f(0.012), 5, '0.012');
  t.is(_f(0.12), 4, '0.12');
  t.is(_f(1.2), 3, '1.2');
  t.is(_f(12), 2, '12');
  t.is(_f(120), 3, '120');
  t.is(_f(1200), 4, '1200');
  t.is(_f(12000), 5, '12000');
  t.is(_f(120000), 6, '120000');
  t.is(_f(1200000), 7, '1200000');
  t.is(_f(12000000), 8, '12000000');
  t.is(_f(120000000), 9, '120000000');
  t.is(_f(1200000000), 10, '1200000000');
  t.is(_f(12000000000), 11, '12000000000');
  t.is(_f(120000000000), 12, '120000000000');
  t.is(_f(1200000000000), 13, '1200000000000');
  t.is(_f(12000000000000), 14, '12000000000000');
  t.is(_f(120000000000000), 15, '120000000000000');
  t.is(_f(0.0000000000000123), 18, '0.0000000000000123');
  t.is(_f(0.000000000000123), 17, '0.000000000000123');
  t.is(_f(0.00000000000123), 16, '0.00000000000123');
  t.is(_f(0.0000000000123), 15, '0.0000000000123');
  t.is(_f(0.000000000123), 14, '0.000000000123');
  t.is(_f(0.00000000123), 13, '0.00000000123');
  t.is(_f(0.0000000123), 12, '0.0000000123');
  t.is(_f(0.000000123), 11, '0.000000123');
  t.is(_f(0.00000123), 10, '0.00000123');
  t.is(_f(0.0000123), 9, '0.0000123');
  t.is(_f(0.000123), 8, '0.000123');
  t.is(_f(0.00123), 7, '0.00123');
  t.is(_f(0.0123), 6, '0.0123');
  t.is(_f(0.123), 5, '0.123');
  t.is(_f(1.23), 4, '1.23');
  t.is(_f(12.3), 4, '12.3');
  t.is(_f(123), 3, '123');
  t.is(_f(1230), 4, '1230');
  t.is(_f(12300), 5, '12300');
  t.is(_f(123000), 6, '123000');
  t.is(_f(1230000), 7, '1230000');
  t.is(_f(12300000), 8, '12300000');
  t.is(_f(123000000), 9, '123000000');
  t.is(_f(1230000000), 10, '1230000000');
  t.is(_f(12300000000), 11, '12300000000');
  t.is(_f(123000000000), 12, '123000000000');
  t.is(_f(1230000000000), 13, '1230000000000');
  t.is(_f(12300000000000), 14, '12300000000000');
  t.is(_f(123000000000000), 15, '123000000000000');
  t.is(_f(0.00000000000001234), 19, '0.00000000000001234');
  t.is(_f(0.0000000000001234), 18, '0.0000000000001234');
  t.is(_f(0.000000000001234), 17, '0.000000000001234');
  t.is(_f(0.00000000001234), 16, '0.00000000001234');
  t.is(_f(0.0000000001234), 15, '0.0000000001234');
  t.is(_f(0.000000001234), 14, '0.000000001234');
  t.is(_f(0.00000001234), 13, '0.00000001234');
  t.is(_f(0.0000001234), 12, '0.0000001234');
  t.is(_f(0.000001234), 11, '0.000001234');
  t.is(_f(0.00001234), 10, '0.00001234');
  t.is(_f(0.0001234), 9, '0.0001234');
  t.is(_f(0.001234), 8, '0.001234');
  t.is(_f(0.01234), 7, '0.01234');
  t.is(_f(0.1234), 6, '0.1234');
  t.is(_f(1.234), 5, '1.234');
  t.is(_f(12.34), 5, '12.34');
  t.is(_f(123.4), 5, '123.4');
  t.is(_f(1234), 4, '1234');
  t.is(_f(12340), 5, '12340');
  t.is(_f(123400), 6, '123400');
  t.is(_f(1234000), 7, '1234000');
  t.is(_f(12340000), 8, '12340000');
  t.is(_f(123400000), 9, '123400000');
  t.is(_f(1234000000), 10, '1234000000');
  t.is(_f(12340000000), 11, '12340000000');
  t.is(_f(123400000000), 12, '123400000000');
  t.is(_f(1234000000000), 13, '1234000000000');
  t.is(_f(12340000000000), 14, '12340000000000');
  t.is(_f(123400000000000), 15, '123400000000000');
  t.is(_f(0.000000000000012345), 20, '0.000000000000012345');
  t.is(_f(0.00000000000012345), 19, '0.00000000000012345');
  t.is(_f(0.0000000000012345), 18, '0.0000000000012345');
  t.is(_f(0.000000000012345), 17, '0.000000000012345');
  t.is(_f(0.00000000012345), 16, '0.00000000012345');
  t.is(_f(0.0000000012345), 15, '0.0000000012345');
  t.is(_f(0.000000012345), 14, '0.000000012345');
  t.is(_f(0.00000012345), 13, '0.00000012345');
  t.is(_f(0.0000012345), 12, '0.0000012345');
  t.is(_f(0.000012345), 11, '0.000012345');
  t.is(_f(0.00012345), 10, '0.00012345');
  t.is(_f(0.0012345), 9, '0.0012345');
  t.is(_f(0.012345), 8, '0.012345');
  t.is(_f(0.12345), 7, '0.12345');
  t.is(_f(1.2345), 6, '1.2345');
  t.is(_f(12.345), 6, '12.345');
  t.is(_f(123.45), 6, '123.45');
  t.is(_f(1234.5), 6, '1234.5');
  t.is(_f(12345), 5, '12345');
  t.is(_f(123450), 6, '123450');
  t.is(_f(1234500), 7, '1234500');
  t.is(_f(12345000), 8, '12345000');
  t.is(_f(123450000), 9, '123450000');
  t.is(_f(1234500000), 10, '1234500000');
  t.is(_f(12345000000), 11, '12345000000');
  t.is(_f(123450000000), 12, '123450000000');
  t.is(_f(1234500000000), 13, '1234500000000');
  t.is(_f(12345000000000), 14, '12345000000000');
  t.is(_f(123450000000000), 15, '123450000000000');
  t.is(_f(1.23456E-14), 21, '1.23456E-14');
  t.is(_f(0.000000000000123456), 20, '0.000000000000123456');
  t.is(_f(0.00000000000123456), 19, '0.00000000000123456');
  t.is(_f(0.0000000000123456), 18, '0.0000000000123456');
  t.is(_f(0.000000000123456), 17, '0.000000000123456');
  t.is(_f(0.00000000123456), 16, '0.00000000123456');
  t.is(_f(0.0000000123456), 15, '0.0000000123456');
  t.is(_f(0.000000123456), 14, '0.000000123456');
  t.is(_f(0.00000123456), 13, '0.00000123456');
  t.is(_f(0.0000123456), 12, '0.0000123456');
  t.is(_f(0.000123456), 11, '0.000123456');
  t.is(_f(0.00123456), 10, '0.00123456');
  t.is(_f(0.0123456), 9, '0.0123456');
  t.is(_f(0.123456), 8, '0.123456');
  t.is(_f(1.23456), 7, '1.23456');
  t.is(_f(12.3456), 7, '12.3456');
  t.is(_f(123.456), 7, '123.456');
  t.is(_f(1234.56), 7, '1234.56');
  t.is(_f(12345.6), 7, '12345.6');
  t.is(_f(123456), 6, '123456');
  t.is(_f(1234560), 7, '1234560');
  t.is(_f(12345600), 8, '12345600');
  t.is(_f(123456000), 9, '123456000');
  t.is(_f(1234560000), 10, '1234560000');
  t.is(_f(12345600000), 11, '12345600000');
  t.is(_f(123456000000), 12, '123456000000');
  t.is(_f(1234560000000), 13, '1234560000000');
  t.is(_f(12345600000000), 14, '12345600000000');
  t.is(_f(123456000000000), 15, '123456000000000');
  t.is(_f(1.234567E-14), 22, '1.234567E-14');
  t.is(_f(1.234567E-13), 21, '1.234567E-13');
  t.is(_f(0.000000000001234567), 20, '0.000000000001234567');
  t.is(_f(0.00000000001234567), 19, '0.00000000001234567');
  t.is(_f(0.0000000001234567), 18, '0.0000000001234567');
  t.is(_f(0.000000001234567), 17, '0.000000001234567');
  t.is(_f(0.00000001234567), 16, '0.00000001234567');
  t.is(_f(0.0000001234567), 15, '0.0000001234567');
  t.is(_f(0.000001234567), 14, '0.000001234567');
  t.is(_f(0.00001234567), 13, '0.00001234567');
  t.is(_f(0.0001234567), 12, '0.0001234567');
  t.is(_f(0.001234567), 11, '0.001234567');
  t.is(_f(0.01234567), 10, '0.01234567');
  t.is(_f(0.1234567), 9, '0.1234567');
  t.is(_f(1.234567), 8, '1.234567');
  t.is(_f(12.34567), 8, '12.34567');
  t.is(_f(123.4567), 8, '123.4567');
  t.is(_f(1234.567), 8, '1234.567');
  t.is(_f(12345.67), 8, '12345.67');
  t.is(_f(123456.7), 8, '123456.7');
  t.is(_f(1234567), 7, '1234567');
  t.is(_f(12345670), 8, '12345670');
  t.is(_f(123456700), 9, '123456700');
  t.is(_f(1234567000), 10, '1234567000');
  t.is(_f(12345670000), 11, '12345670000');
  t.is(_f(123456700000), 12, '123456700000');
  t.is(_f(1234567000000), 13, '1234567000000');
  t.is(_f(12345670000000), 14, '12345670000000');
  t.is(_f(123456700000000), 15, '123456700000000');
  t.is(_f(1.2345678E-14), 23, '1.2345678E-14');
  t.is(_f(1.2345678E-13), 22, '1.2345678E-13');
  t.is(_f(1.2345678E-12), 21, '1.2345678E-12');
  t.is(_f(0.000000000012345678), 20, '0.000000000012345678');
  t.is(_f(0.00000000012345678), 19, '0.00000000012345678');
  t.is(_f(0.0000000012345678), 18, '0.0000000012345678');
  t.is(_f(0.000000012345678), 17, '0.000000012345678');
  t.is(_f(0.00000012345678), 16, '0.00000012345678');
  t.is(_f(0.0000012345678), 15, '0.0000012345678');
  t.is(_f(0.000012345678), 14, '0.000012345678');
  t.is(_f(0.00012345678), 13, '0.00012345678');
  t.is(_f(0.0012345678), 12, '0.0012345678');
  t.is(_f(0.012345678), 11, '0.012345678');
  t.is(_f(0.12345678), 10, '0.12345678');
  t.is(_f(1.2345678), 9, '1.2345678');
  t.is(_f(12.345678), 9, '12.345678');
  t.is(_f(123.45678), 9, '123.45678');
  t.is(_f(1234.5678), 9, '1234.5678');
  t.is(_f(12345.678), 9, '12345.678');
  t.is(_f(123456.78), 9, '123456.78');
  t.is(_f(1234567.8), 9, '1234567.8');
  t.is(_f(12345678), 8, '12345678');
  t.is(_f(123456780), 9, '123456780');
  t.is(_f(1234567800), 10, '1234567800');
  t.is(_f(12345678000), 11, '12345678000');
  t.is(_f(123456780000), 12, '123456780000');
  t.is(_f(1234567800000), 13, '1234567800000');
  t.is(_f(12345678000000), 14, '12345678000000');
  t.is(_f(123456780000000), 15, '123456780000000');
  t.is(_f(1.23456789E-14), 24, '1.23456789E-14');
  t.is(_f(1.23456789E-13), 23, '1.23456789E-13');
  t.is(_f(1.23456789E-12), 22, '1.23456789E-12');
  t.is(_f(1.23456789E-11), 21, '1.23456789E-11');
  t.is(_f(0.000000000123456789), 20, '0.000000000123456789');
  t.is(_f(0.00000000123456789), 19, '0.00000000123456789');
  t.is(_f(0.0000000123456789), 18, '0.0000000123456789');
  t.is(_f(0.000000123456789), 17, '0.000000123456789');
  t.is(_f(0.00000123456789), 16, '0.00000123456789');
  t.is(_f(0.0000123456789), 15, '0.0000123456789');
  t.is(_f(0.000123456789), 14, '0.000123456789');
  t.is(_f(0.00123456789), 13, '0.00123456789');
  t.is(_f(0.0123456789), 12, '0.0123456789');
  t.is(_f(0.123456789), 11, '0.123456789');
  t.is(_f(1.23456789), 10, '1.23456789');
  t.is(_f(12.3456789), 10, '12.3456789');
  t.is(_f(123.456789), 10, '123.456789');
  t.is(_f(1234.56789), 10, '1234.56789');
  t.is(_f(12345.6789), 10, '12345.6789');
  t.is(_f(123456.789), 10, '123456.789');
  t.is(_f(1234567.89), 10, '1234567.89');
  t.is(_f(12345678.9), 10, '12345678.9');
  t.is(_f(123456789), 9, '123456789');
  t.is(_f(1234567890), 10, '1234567890');
  t.is(_f(12345678900), 11, '12345678900');
  t.is(_f(123456789000), 12, '123456789000');
  t.is(_f(1234567890000), 13, '1234567890000');
  t.is(_f(12345678900000), 14, '12345678900000');
  t.is(_f(123456789000000), 15, '123456789000000');
  t.is(_f(1.234567891E-14), 25, '1.234567891E-14');
  t.is(_f(1.234567891E-13), 24, '1.234567891E-13');
  t.is(_f(1.234567891E-12), 23, '1.234567891E-12');
  t.is(_f(1.234567891E-11), 22, '1.234567891E-11');
  t.is(_f(1.234567891E-10), 21, '1.234567891E-10');
  t.is(_f(0.000000001234567891), 20, '0.000000001234567891');
  t.is(_f(0.00000001234567891), 19, '0.00000001234567891');
  t.is(_f(0.0000001234567891), 18, '0.0000001234567891');
  t.is(_f(0.000001234567891), 17, '0.000001234567891');
  t.is(_f(0.00001234567891), 16, '0.00001234567891');
  t.is(_f(0.0001234567891), 15, '0.0001234567891');
  t.is(_f(0.001234567891), 14, '0.001234567891');
  t.is(_f(0.01234567891), 13, '0.01234567891');
  t.is(_f(0.1234567891), 12, '0.1234567891');
  t.is(_f(1.234567891), 11, '1.234567891');
  t.is(_f(12.34567891), 11, '12.34567891');
  t.is(_f(123.4567891), 11, '123.4567891');
  t.is(_f(1234.567891), 11, '1234.567891');
  t.is(_f(12345.67891), 11, '12345.67891');
  t.is(_f(123456.7891), 11, '123456.7891');
  t.is(_f(1234567.891), 11, '1234567.891');
  t.is(_f(12345678.91), 11, '12345678.91');
  t.is(_f(123456789.1), 11, '123456789.1');
  t.is(_f(1234567891), 10, '1234567891');
  t.is(_f(12345678910), 11, '12345678910');
  t.is(_f(123456789100), 12, '123456789100');
  t.is(_f(1234567891000), 13, '1234567891000');
  t.is(_f(12345678910000), 14, '12345678910000');
  t.is(_f(123456789100000), 15, '123456789100000');
  t.is(_f(1.2345678912E-14), 26, '1.2345678912E-14'); // 0.000000000000012345678912
  t.is(_f(1.2345678912E-13), 25, '1.2345678912E-13');
  t.is(_f(1.2345678912E-12), 24, '1.2345678912E-12');
  t.is(_f(1.2345678912E-11), 23, '1.2345678912E-11');
  t.is(_f(1.2345678912E-10), 22, '1.2345678912E-10');
  t.is(_f(1.2345678912E-09), 21, '1.2345678912E-09');
  t.is(_f(0.000000012345678912), 20, '0.000000012345678912');
  t.is(_f(0.00000012345678912), 19, '0.00000012345678912');
  t.is(_f(0.0000012345678912), 18, '0.0000012345678912');
  t.is(_f(0.000012345678912), 17, '0.000012345678912');
  t.is(_f(0.00012345678912), 16, '0.00012345678912');
  t.is(_f(0.0012345678912), 15, '0.0012345678912');
  t.is(_f(0.012345678912), 14, '0.012345678912');
  t.is(_f(0.12345678912), 13, '0.12345678912');
  t.is(_f(1.2345678912), 12, '1.2345678912');
  t.is(_f(12.345678912), 12, '12.345678912');
  t.is(_f(123.45678912), 12, '123.45678912');
  t.is(_f(1234.5678912), 12, '1234.5678912');
  t.is(_f(12345.678912), 12, '12345.678912');
  t.is(_f(123456.78912), 12, '123456.78912');
  t.is(_f(1234567.8912), 12, '1234567.8912');
  t.is(_f(12345678.912), 12, '12345678.912');
  t.is(_f(123456789.12), 12, '123456789.12');
  t.is(_f(1234567891.2), 12, '1234567891.2');
  t.is(_f(12345678912), 11, '12345678912');
  t.is(_f(123456789120), 12, '123456789120');
  t.is(_f(1234567891200), 13, '1234567891200');
  t.is(_f(12345678912000), 14, '12345678912000');
  t.is(_f(123456789120000), 15, '123456789120000');
  t.is(_f(1.23456789123E-14), 27, '1.23456789123E-14');
  t.is(_f(1.23456789123E-13), 26, '1.23456789123E-13');
  t.is(_f(1.23456789123E-12), 25, '1.23456789123E-12');
  t.is(_f(1.23456789123E-11), 24, '1.23456789123E-11');
  t.is(_f(1.23456789123E-10), 23, '1.23456789123E-10');
  t.is(_f(1.23456789123E-09), 22, '1.23456789123E-09');
  t.is(_f(1.23456789123E-08), 21, '1.23456789123E-08');
  t.is(_f(0.000000123456789123), 20, '0.000000123456789123');
  t.is(_f(0.00000123456789123), 19, '0.00000123456789123');
  t.is(_f(0.0000123456789123), 18, '0.0000123456789123');
  t.is(_f(0.000123456789123), 17, '0.000123456789123');
  t.is(_f(0.00123456789123), 16, '0.00123456789123');
  t.is(_f(0.0123456789123), 15, '0.0123456789123');
  t.is(_f(0.123456789123), 14, '0.123456789123');
  t.is(_f(1.23456789123), 13, '1.23456789123');
  t.is(_f(12.3456789123), 13, '12.3456789123');
  t.is(_f(123.456789123), 13, '123.456789123');
  t.is(_f(1234.56789123), 13, '1234.56789123');
  t.is(_f(12345.6789123), 13, '12345.6789123');
  t.is(_f(123456.789123), 13, '123456.789123');
  t.is(_f(1234567.89123), 13, '1234567.89123');
  t.is(_f(12345678.9123), 13, '12345678.9123');
  t.is(_f(123456789.123), 13, '123456789.123');
  t.is(_f(1234567891.23), 13, '1234567891.23');
  t.is(_f(12345678912.3), 13, '12345678912.3');
  t.is(_f(123456789123), 12, '123456789123');
  t.is(_f(1234567891230), 13, '1234567891230');
  t.is(_f(12345678912300), 14, '12345678912300');
  t.is(_f(123456789123000), 15, '123456789123000');
  t.is(_f(1.234567891234E-14), 28, '1.234567891234E-14');
  t.is(_f(1.234567891234E-13), 27, '1.234567891234E-13');
  t.is(_f(1.234567891234E-12), 26, '1.234567891234E-12');
  t.is(_f(1.234567891234E-11), 25, '1.234567891234E-11');
  t.is(_f(1.234567891234E-10), 24, '1.234567891234E-10');
  t.is(_f(1.234567891234E-09), 23, '1.234567891234E-09');
  t.is(_f(1.234567891234E-08), 22, '1.234567891234E-08');
  t.is(_f(1.234567891234E-07), 21, '1.234567891234E-07');
  t.is(_f(0.000001234567891234), 20, '0.000001234567891234');
  t.is(_f(0.00001234567891234), 19, '0.00001234567891234');
  t.is(_f(0.0001234567891234), 18, '0.0001234567891234');
  t.is(_f(0.001234567891234), 17, '0.001234567891234');
  t.is(_f(0.01234567891234), 16, '0.01234567891234');
  t.is(_f(0.1234567891234), 15, '0.1234567891234');
  t.is(_f(1.234567891234), 14, '1.234567891234');
  t.is(_f(12.34567891234), 14, '12.34567891234');
  t.is(_f(123.4567891234), 14, '123.4567891234');
  t.is(_f(1234.567891234), 14, '1234.567891234');
  t.is(_f(12345.67891234), 14, '12345.67891234');
  t.is(_f(123456.7891234), 14, '123456.7891234');
  t.is(_f(1234567.891234), 14, '1234567.891234');
  t.is(_f(12345678.91234), 14, '12345678.91234');
  t.is(_f(123456789.1234), 14, '123456789.1234');
  t.is(_f(1234567891.234), 14, '1234567891.234');
  t.is(_f(12345678912.34), 14, '12345678912.34');
  t.is(_f(123456789123.4), 14, '123456789123.4');
  t.is(_f(1234567891234), 13, '1234567891234');
  t.is(_f(12345678912340), 14, '12345678912340');
  t.is(_f(123456789123400), 15, '123456789123400');
  t.is(_f(1.2345678912345E-14), 29, '1.2345678912345E-14');
  t.is(_f(1.2345678912345E-13), 28, '1.2345678912345E-13');
  t.is(_f(1.2345678912345E-12), 27, '1.2345678912345E-12');
  t.is(_f(1.2345678912345E-11), 26, '1.2345678912345E-11');
  t.is(_f(1.2345678912345E-10), 25, '1.2345678912345E-10');
  t.is(_f(1.2345678912345E-09), 24, '1.2345678912345E-09');
  t.is(_f(1.2345678912345E-08), 23, '1.2345678912345E-08');
  t.is(_f(1.2345678912345E-07), 22, '1.2345678912345E-07');
  t.is(_f(1.2345678912345E-06), 21, '1.2345678912345E-06');
  t.is(_f(0.000012345678912345), 20, '0.000012345678912345');
  t.is(_f(0.00012345678912345), 19, '0.00012345678912345');
  t.is(_f(0.0012345678912345), 18, '0.0012345678912345');
  t.is(_f(0.012345678912345), 17, '0.012345678912345');
  t.is(_f(0.12345678912345), 16, '0.12345678912345');
  t.is(_f(1.2345678912345), 15, '1.2345678912345');
  t.is(_f(12.345678912345), 15, '12.345678912345');
  t.is(_f(123.45678912345), 15, '123.45678912345');
  t.is(_f(1234.5678912345), 15, '1234.5678912345');
  t.is(_f(12345.678912345), 15, '12345.678912345');
  t.is(_f(123456.78912345), 15, '123456.78912345');
  t.is(_f(1234567.8912345), 15, '1234567.8912345');
  t.is(_f(12345678.912345), 15, '12345678.912345');
  t.is(_f(123456789.12345), 15, '123456789.12345');
  t.is(_f(1234567891.2345), 15, '1234567891.2345');
  t.is(_f(12345678912.345), 15, '12345678912.345');
  t.is(_f(123456789123.45), 15, '123456789123.45');
  t.is(_f(1234567891234.5), 15, '1234567891234.5');
  t.is(_f(12345678912345), 14, '12345678912345');
  t.is(_f(123456789123450), 15, '123456789123450');
  t.is(_f(1.23456789123456E-14), 30, '1.23456789123456E-14');
  t.is(_f(1.23456789123456E-13), 29, '1.23456789123456E-13');
  t.is(_f(1.23456789123456E-12), 28, '1.23456789123456E-12');
  t.is(_f(1.23456789123456E-11), 27, '1.23456789123456E-11');
  t.is(_f(1.23456789123456E-10), 26, '1.23456789123456E-10');
  t.is(_f(1.23456789123456E-09), 25, '1.23456789123456E-09');
  t.is(_f(1.23456789123456E-08), 24, '1.23456789123456E-08');
  t.is(_f(1.23456789123456E-07), 23, '1.23456789123456E-07');
  t.is(_f(1.23456789123456E-06), 22, '1.23456789123456E-06');
  t.is(_f(1.23456789123456E-05), 21, '1.23456789123456E-05');
  t.is(_f(0.000123456789123456), 20, '0.000123456789123456');
  t.is(_f(0.00123456789123456), 19, '0.00123456789123456');
  t.is(_f(0.0123456789123456), 18, '0.0123456789123456');
  t.is(_f(0.123456789123456), 17, '0.123456789123456');
  t.is(_f(1.23456789123456), 16, '1.23456789123456');
  t.is(_f(12.3456789123456), 16, '12.3456789123456');
  t.is(_f(123.456789123456), 16, '123.456789123456');
  t.is(_f(1234.56789123456), 16, '1234.56789123456');
  t.is(_f(12345.6789123456), 16, '12345.6789123456');
  t.is(_f(123456.789123456), 16, '123456.789123456');
  t.is(_f(1234567.89123456), 16, '1234567.89123456');
  t.is(_f(12345678.9123456), 16, '12345678.9123456');
  t.is(_f(123456789.123456), 16, '123456789.123456');
  t.is(_f(1234567891.23456), 16, '1234567891.23456');
  t.is(_f(12345678912.3456), 16, '12345678912.3456');
  t.is(_f(123456789123.456), 16, '123456789123.456');
  t.is(_f(1234567891234.56), 16, '1234567891234.56');
  t.is(_f(12345678912345.6), 16, '12345678912345.6');
  t.is(_f(123456789123456), 15, '123456789123456');
  t.is(_f(-1.234567E-14), 23, '-1.234567E-14');
  t.is(_f(-1.234567E-13), 22, '-1.234567E-13');
  t.is(_f(-0.000000000001234567), 21, '-0.000000000001234567');
  t.is(_f(-0.00000000001234567), 20, '-0.00000000001234567');
  t.is(_f(-0.0000000001234567), 19, '-0.0000000001234567');
  t.is(_f(-0.000000001234567), 18, '-0.000000001234567');
  t.is(_f(-0.00000001234567), 17, '-0.00000001234567');
  t.is(_f(-0.0000001234567), 16, '-0.0000001234567');
  t.is(_f(-0.000001234567), 15, '-0.000001234567');
  t.is(_f(-0.00001234567), 14, '-0.00001234567');
  t.is(_f(-0.0001234567), 13, '-0.0001234567');
  t.is(_f(-0.001234567), 12, '-0.001234567');
  t.is(_f(-0.01234567), 11, '-0.01234567');
  t.is(_f(-0.1234567), 10, '-0.1234567');
  t.is(_f(-1.234567), 9, '-1.234567');
  t.is(_f(-12.34567), 9, '-12.34567');
  t.is(_f(-123.4567), 9, '-123.4567');
  t.is(_f(-1234.567), 9, '-1234.567');
  t.is(_f(-12345.67), 9, '-12345.67');
  t.is(_f(-123456.7), 9, '-123456.7');
  t.is(_f(-1234567), 8, '-1234567');
  t.is(_f(-12345670), 9, '-12345670');
  t.is(_f(-123456700), 10, '-123456700');
  t.is(_f(-1234567000), 11, '-1234567000');
  t.is(_f(-12345670000), 12, '-12345670000');
  t.is(_f(-123456700000), 13, '-123456700000');
  t.is(_f(-1234567000000), 14, '-1234567000000');
  t.is(_f(-12345670000000), 15, '-12345670000000');
  t.is(_f(-123456700000000), 16, '-123456700000000');

  // supposed corner cases, found on teh internets
  // https://stackoverflow.com/questions/9539513/
  t.is(_f(0.0028), 6, '0.0028');
  t.is(_f(0.0029), 6, '0.0029');
  t.is(_f(0.0408), 6, '0.0408');
  t.is(_f(0.1584), 6, '0.1584');
  t.is(_f(4.3573), 6, '4.3573');
  t.is(_f(11.6894), 7, '11.6894');
  t.is(_f(0), 1, '0');
  t.is(_f(1), 1, '1.0');
  t.is(_f(0.123), 5, '0.123');
  t.is(_f(1e-3), 5, '1e-3');
  t.is(_f(-1e2), 4, '-1e2');
  t.is(_f(-1e-2), 5, '-1e-2');
  t.is(_f(-0.1), 4, '-0.1');
  t.is(_f(1 / 3), 17, '1/3');
  t.is(_f(3.14), 4, '3.14');
  t.is(_f(2e-3), 5, '2e-3');
  t.is(_f(2e-14), 16, '2e-14');
  t.is(_f(Math.PI), 16, 'Math.PI');
  t.is(_f(1e-9), 11, '1e-9');
  t.is(_f(1e-10), 12, '1e-10');
  t.is(_f(-3.14e-13), 18, '-3.14e-13');
  t.is(_f(3e-13), 15, '3e-13');
  t.is(_f(3e-14), 16, '3e-14');
  t.is(_f(123.12345678901234567890), 16, '123.12345678901235...'); // overflows
  t.is(_f(5555), 4, '5555');
  t.is(_f(555.5), 5, '555.5');
  t.is(_f(55.55), 5, '55.55');
  t.is(_f(0.0000005), 9, '0.0000005');
  t.is(_f(5e-7), 9, '5e-7');
  t.is(_f(0.00000055), 10, '0.00000055');
  t.is(_f(5e-8), 10, '5e-8');
  t.is(_f(0.000006), 8, '0.000006');
  t.is(_f(0.0000007), 9, '0.0000007');
  t.is(_f(0.123), 5, '0.123');
  t.is(_f(0.121), 5, '0.121');
  t.is(_f(0.1215), 6, '0.1215');

  t.end();
});
