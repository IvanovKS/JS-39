// * Задание 3
// 1) string
const string1 = 'Hello';
const string2 = "Good " + "morning";
const person = "Alex";
const string3 = `${string2}, ${person}`;
const string4 = `10-7=${10-7}`;
const string5 = 50 + 'px';
const string6 = 50 + '';
const string7 = 14..toString();
const string8 = (14).toString(2);
const string9 = String(14);
const string10 = String(14+14);

// 2) number
const number1 = 10;
const number2 = 10.5;
const number3 = -10.5;
const number4 = Infinity;
const number5 = 10*2;
const number6 = number1 * number2;
const number7 = number4 / 0;
const number8 = 10 * '2';
const number9 = 10 - string9;
const number10 = 10 - true;
const number11 = 10 - 'true';
const number12 = Number(10);
const number13 = Number('10px');
const number14 = + '10';
const number15 = + 'true';
const number16 = + true;
const number17 = + false;
const number18 = 'false' & 10;
const number19 = 'false' | 10;
const number20 = 10 ^ 20;
const number21 = parseInt('15');
const number22 = parseInt('15', 15);
const number23 = parseInt('15abc', 15);
const number24 = parseInt('abc', 3);
const number25 = parseInt('0x12');
const number26 = parseFloat('15.15');
const number27 = parseFloat('15.15.15');
const number28 = parseFloat('15.15abc');
const number29 = parseFloat('2.0' * Math.PI);
// 3) boolean
// 4) null
// 5) undefined
// 6) symbol
// 7) bigInt
console.log(number29);

// * Задание 4
// Если обратиться к переменным, созданным через let или const до их объявления, мы получим ReferenceError. Это происходит из-за того, что такие переменные попадают в так называемую "temporal dead zone" (это условная зона до их объявления).

// * Задание 5
const res = 'B' + 'a' + (1 - 'hello');
console.log(res);
// BaNan

const res2 = (true && 3) + 'd';
console.log(res2);
// 3d

const res3 = Boolean(true && 3) + 'd';
console.log(res3);
// trued