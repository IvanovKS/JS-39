// * Задание 1
let promiseTwo = new Promise((resolve, reject) => {
  resolve("a");
});
promiseTwo
.then((res) => {
  return res + "b";
})
.then((res) => {
  return res + "с";
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
