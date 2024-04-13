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
