// *Задание 1

// В JavaScript массивы являются особой разновидностью объектов, которая может содержать в себе различные структуры данных: строки, числа, булевы значения, а также другие массивы, объекты и функции. Это делает их ближе к хеш-таблицам, чем к обычным массивам в других языках программирования.
// Из-за этого свойства массивы в JavaScript могут оказаться менее эффективными по сравнению с массивами в других языках при работе с большими объемами данных. Организация данных в массивах JavaScript может привести к конфликтам в производительности, когда массивы используются для хранения разнородных данных, в отличие от массивов в других языках, которые обычно работают только с элементами одного и того же типа.
// Хотя массивы в JavaScript часто бывают удобными, их универсальность может привести к проблемам эффективности при работе с большими объемами данных. В таких случаях может быть предпочтительнее использовать другие структуры данных, более точно соответствующие типам операций, которые необходимо выполнять.

// *Задание 2

// Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply)
function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = { item: 'some value' };

console.group('Task 2:');
logger.call(obj);
logger.apply(obj);
logger.bind(obj)();
console.groupEnd;

// *Задание 3.1

// Создайте массив чисел и найдите его сумму
const arr1 = [10, 15, 20];
const sumOfItems = arr1.reduce((a, b) => a + b, 0);

// Создайте массив строк и объедините их в одну строку
const arr2 = ['a', 'b', 'c'];
const groupOfStrings = arr2.join('');

// Найдите максимальный и минимальный элементы в массиве чисел
const maxNumber = arr1.sort((a, b) => b - a)[0];
const minNumber = arr1.sort((a, b) => a - b)[0];

console.group('Task 3.1:');
console.log(sumOfItems);
console.log(groupOfStrings);
console.log(maxNumber);
console.log(minNumber);
console.groupEnd;

// *Задание 3.2
class Stack {
  constructor() {
    this.elements = [];
  }

  size() {
    return this.elements.length;
  }
  isEmpty() {
    if (this.elements.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  push(element) {
    this.elements.push(element);
  }
  pop() {
    if (this.isEmpty()) {
      return 'Stack is empty';
    }
    return this.elements.pop();
  }
  top() {
    if (this.isEmpty()) {
      return 'Stack is empty';
    }
    return this.elements[this.elements.length - 1];
  }
  bottom() {
    if (this.isEmpty()) {
      return 'Stack is empty';
    }
    return this.elements[0];
  }
}

const stack = new Stack();

console.group('Task 3.2, empty stack:');
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.top());
console.log(stack.bottom());
console.groupEnd;

stack.push('a');

console.group('Task 3.2, stack with 1 element:');
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.top());
console.log(stack.bottom());
console.groupEnd;

stack.push('b');

console.group('Task 3.2, stack with several elements:');
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.top());
console.log(stack.bottom());
console.groupEnd;

// *Задание 3.3
class Queue {
  constructor() {
    this.elements = [];
  }

  size() {
    return this.elements.length;
  }
  isEmpty() {
    if (this.elements.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  push(element) {
    this.elements.push(element);
  }
  shift() {
    if (this.isEmpty()) {
      return 'Queue is empty';
    }
    return this.elements.shift();
  }
  lastInQueue() {
    if (this.isEmpty()) {
      return 'Queue is empty';
    }
    return this.elements[this.elements.length - 1];
  }
  firstInQueue() {
    if (this.isEmpty()) {
      return 'Queue is empty';
    }
    return this.elements[0];
  }
  indexInQueue(item) {
    if (this.isEmpty()) {
      return 'Queue is empty';
    }
    const index = this.elements.indexOf(item);
    if (index >= 0) {
      return `${item} has number ${index + 1} in queue`;
    } else {
      return `${item} is not found`;
    }
  }
}

const queueInShop = new Queue();

console.group('Task 3.3, empty queue:');
console.log(queueInShop.size());
console.log(queueInShop.isEmpty());
console.log(queueInShop.shift());
console.log(queueInShop.firstInQueue());
console.log(queueInShop.lastInQueue());
console.log(queueInShop.indexInQueue('customer_1'));
console.groupEnd;

queueInShop.push('customer_1');

console.group('Task 3.3, queue has only 1 customer:');
console.log(queueInShop.size());
console.log(queueInShop.isEmpty());
console.log(queueInShop.firstInQueue());
console.log(queueInShop.lastInQueue());
console.log(queueInShop.indexInQueue('customer_1'));
console.groupEnd;

queueInShop.push('customer_2');
queueInShop.push('customer_3');

console.group('Task 3.3, queue has several customers:');
console.log(queueInShop.size());
console.log(queueInShop.isEmpty());
console.log(queueInShop.firstInQueue());
console.log(queueInShop.lastInQueue());
console.log(queueInShop.indexInQueue('customer_2'));
console.log(queueInShop.shift());
console.log(queueInShop.indexInQueue('customer_4'));
console.log(queueInShop);
console.groupEnd;