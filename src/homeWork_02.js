// * Задание 1
// 1-й способ:
const counter1 = {
  count: 'one',
};

// 2-й способ:
const counter2 = new Object();
counter2.count = 'two';

// 3-й способ:
function Count(count) {
  this.count = count;
}
const counter3 = new Count('three');

// 4-й способ:
const counter4 = Object.create(counter1);
counter4.count = 'four';

const counter4_ = Object.create(counter1, {
  count: { value: 'four_', writable: true, enumerable: true, configurable: false },
});

// 5-й способ:
const counter5 = Object.assign({}, counter1);
counter5.count = 'five';

// 6-й способ:
class Count_ {
  constructor(count) {
    this.count = count;
  }
}
const counter6 = new Count_('six');

// * Задание 3
// 1-й способ (function declaration):
function makeCounter1(argument) {
  return `function declaration = ${argument}`;
}

// 2-й способ (function expression):
const makeCounter2 = function (argument) {
  return `function expression = ${argument}`;
}

// 3-й способ (arrow function):
const makeCounter3 = (argument) => `arrow function = ${argument}`;

// 4-й способ (named function expressions):
const makeCounter4 = function makeCounter_ (argument) {
  return `named function expressions = ${argument}`;
}

// 5-й способ (callback functions + higher-order functions)):
const callback = function (num) {
  return `callback functions + higher-order functions = ${num}`;
}
const makeCounter5 = function (callback, argument) {
  return callback(argument);
}

// 6-й способ (IIFE):
const makeCounter6 = (function() {
  return `IIFE = 6`;
})();

// 7-й способ (anonymous functions):
const num = [7];
const makeCounter7 = (() => `anonymous functions = ${num[0]}`);

// 8-й способ (constructor functions):
function MakeCount(number) {
  this.showCount = function() {
    return `constructor functions = ${number}`
  }
}
const makeCounter8 = new MakeCount(8);

console.group('makeCounterGroup:');
console.log(makeCounter1(1));
console.log(makeCounter2(2));
console.log(makeCounter3(3));
console.log(makeCounter4(4));
console.log(makeCounter5(callback, 5));
console.log(makeCounter6);
console.log(makeCounter7());
console.log(makeCounter8.showCount());
console.groupEnd();

// * Бонус задание 2

function reverseStr(str) {
  return str.split('').reverse().join('');
}
console.log(reverseStr('abcdef'));