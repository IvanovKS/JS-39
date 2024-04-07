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
const boolean1 = true;
const boolean2 = false;
const boolean3 = 3 > 4;
const boolean4 = number16 <= 4;
const boolean5 = 3 == '3';
const boolean6 = 3 === '3';
const boolean7 = false === '';
const boolean8 = false == '';
const boolean9 = Boolean([]);
const boolean10 = Boolean(null);
const boolean11 = Boolean(Boolean(!false));
const boolean12 = Boolean(10);
const boolean13 = Boolean('10');
const boolean14 = !10;
const boolean15 = !!10;
const surname = 'Smith';
let boolean16;
surname.length === 5 ? boolean16 = true : boolean16 = false;

// 4) null
const null1 = null;
const null2 = Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object)));

// 5) undefined
const undefined1 = undefined;
let undefined2;
const obj1 = {};
const undefined3 = obj1.value;
const emptyFunction = () => {
};
const undefined4 = emptyFunction;

// 6) symbol
const symbol1 = Symbol();
const symbol2 = Symbol(10);
const symbol3 = Symbol('abc');
const symbol4 = Symbol({});

// 7) bigInt
const bigInt1 = 1n;
const bigInt2 = 1n + 2n;
const bigInt3 = BigInt(Number.MAX_SAFE_INTEGER);
const bigInt4 = BigInt('10');
const bigInt5 = BigInt("0x1fffffffffffff");

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