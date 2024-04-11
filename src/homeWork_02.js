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

// * Задание 2
const simpleCounter = {
  count: 'one',
};

const deepCounter = {
  count: 'one',
  deep: {
    one: 1,
    two: {
      a: 1,
      b: 2
    }
  }
};

// 1-й способ (поверхностное копирование):
const copiedCounter1 = {...simpleCounter};

// 2-й способ (поверхностное копирование):
const copiedCounter2 = Object.assign({}, simpleCounter);

// 3-й способ (глубокое копирование):
const copiedCounter3 = structuredClone(deepCounter);

// 4-й способ (глубокое копирование):
const copiedCounter4 = JSON.parse(JSON.stringify(deepCounter));

// 5-й способ (глубокое копирование):
function getDeepCopy(argument) {
  if (Array.isArray(argument)) {
    return argument.map(item => getDeepCopy(item));
  } else if (typeof argument === 'object' && argument !== null) {
    const obj = {};
    for (let key in argument) {
      obj[key] = getDeepCopy(argument[key]);
    }
    return obj;
  } else {
    return argument;
  }
}
const copiedCounter5 = getDeepCopy(deepCounter);

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

// * Задание 4
// Глобальный structuredClone() метод создает глубокий клон и обеспечивает структурированное клонирование объекта, включая все его вложенные объекты, массивы, мапы, сеты и т.п. Этот метод также позволяет переносить переносимые объекты в исходном значении, а не клонировать их в новый объект. Перенесенные объекты отделяются от исходного объекта и прикрепляются к новому объекту; они больше не доступны в исходном объекте.
// Синтаксис:
// structuredClone(value)
// structuredClone(value, options), где
// value - Объект, который необходимо клонировать. Это может быть любой структурированный клонируемый тип;
// options (опционально) - Объект со следующими свойствами (transfer): Массив передаваемых объектов , которые будут перемещены, а не клонированы в возвращаемый объект. Перенос делает исходный объект непригодным для использования

// Пример клонирования объекта:
// const mushrooms1 = {
//   amanita: ["muscaria", "virosa"],
// };
// const mushrooms2 = structuredClone(mushrooms1);

// Пример переноса объекта:
// const buffer1 = new ArrayBuffer(16);
// const object1 = {
//   buffer: buffer1,
// };
// const object2 = structuredClone(object1, { transfer: [buffer1] });

// * Бонус задание 2

function reverseStr(str) {
  return str.split('').reverse().join('');
}
console.log(reverseStr('abcdef'));