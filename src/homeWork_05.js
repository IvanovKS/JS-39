// * Задание 1
let promiseTwo = new Promise((resolve, reject) => {
  resolve("a");
});
promiseTwo
.then((res) => {
  return res + "b";
})
.then((res) => {
  return res + "c";
})
.finally((res) => {
  return res + "!!!!!!!";
})
.catch((res) => {
  return res + "d";
})
.then((res) => {
  console.log(res);
});

// Вывод в консоли: 'abc';
// Первый 'then' возвращает строку 'ab', добавляя 'b' к значению 'a'. Затем срабатывает второй 'then' и возвращается срока 'abc'. Блок 'finally' принимает undefined и ничего не возвращает, кроме side эффекта, который будет внутри, поэтому 'finally' можно не учитывать. Блок 'catch' игнорируется. В конце срабатывает последний 'then'

// * Задание 2
function doSmth() {
  return Promise.resolve("123");
}

doSmth()
.then(function (a) {
  console.log("1", a); // 1, 123
  return a; // 123
})
.then(function (b) {
  console.log("2", b); // 2, 123
  return Promise.reject("321"); // 321
})
.catch(function (err) {
  console.log("3", err); // 3, 321
})
.then(function (c) {
  console.log("4", c); // 4, undefined
return c; // undefined
});

// Вывод в консоли: 
// 1 123
// 2 123
// 3 321
// 4 undefined

// 1. Первый 'then' выводит '1 123' в консоль, затем возвращает значение '123'.
// 2. Второй 'then' выводит '2 123' в консоль, затем возвращается промис, отклоненный с сообщением '321'.
// 3. Так как промис был отклонен, выполнение переходит к блоку 'catch', который выводит '3 321' в консоль.
// 4. Последний 'then' выводит '4 undefined' в консоль, так как предыдущий обработчик 'catch' не возвращает значение.

// * Задание 3
// Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.
const arr = [10, 12, 15, 21];
const func = function (arr) {
  arr.forEach((el, index) => {
    setTimeout(() => {
      console.log(index);
    }, 3000 * index);
  });
}
console.log(func(arr));

// * Задание 4
// Можно использовать ключевое слово await отдельно (вне асинхронной функции) на верхнем уровне модуля. Это означает, что модули с дочерними модулями, использующими await, будут ждать выполнения дочерних модулей, прежде чем они сами запустятся, при этом не блокируя загрузку других дочерних модулей.

// Вот пример простого модуля, использующего Fetch API и указывающего ожидание в операторе экспорта. Любые модули, которые включают это, будут ждать разрешения выборки, прежде чем запускать какой-либо код.

// const colors = fetch("../data/colors.json").then((response) => response.json());
// export default await colors;

// * Бонус
function fetchUrl (url) {
  let counter = 0;
  function urlAttempts() {
    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch((error) => {
        counter++;
        if (counter <= 5) {
          console.log(`Error № ${counter}`);
          return urlAttempts();
        } else {
          throw error;
        }
      });
    }
  return urlAttempts();
}

// ! Для проверки ошибочных запросов
// fetchUrl('http://www.boredapi.cm/api/activity/')

// ! Для проверки удачных запросов
// fetchUrl('http://www.boredapi.com/api/activity/')

