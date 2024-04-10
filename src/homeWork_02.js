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

// * Бонус задание 2

function reverseStr(str) {
  return str.split('').reverse().join('');
}
console.log(reverseStr('abcdef'));