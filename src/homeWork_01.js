// * Задание 1
// метод запроса OPTIONS
// Краткое описание: один из методов HTTP, который используется для получения информации о возможностях сервера или параметрах конкретного ресурса на сервере. Обычно он используется для определения поддерживаемых методов запроса, поддерживаемых заголовков и других свойств ресурса, а также для проверки доступности или прав доступа к ресурсу. Другими словами, метод позволяет клиенту получить информацию о ресурсе без фактического его запроса, что улучшает эффективность и безопасность веб-приложений.

// Где и как используется:
// 1) Запрос на предварительное разрешение CORS => когда браузер делает запрос на другой домен (origin) с использованием XMLHttpRequest или Fetch API, он отправляет запрос OPTIONS (preflight request) для проверки, разрешено ли выполнение запрошенного действия на указанном ресурсе
// 2) Запрос на получение информации о ресурсе => клиент может также явно отправить запрос методом OPTIONS для получения информации о поддерживаемых методах, разрешенных заголовках и других свойствах конкретного ресурса.
// 3) Проверка доступности ресурса => организации могут использовать метод OPTIONS для проверки доступности и прав доступа к конкретному ресурсу до того, как отправить фактический запрос. Например, это может быть полезно при работе с API, когда нужно определить, какие операции разрешены для конкретного ресурса.
// 4) Автоматический вызов браузером => некоторые операции, такие как получение информации о кросс-доменном доступе или другие запросы, могут привести к автоматическому вызову метода OPTIONS для безопасности и проверки доступности ресурсов.
// 5) Разрешение конфликтов запросов в многопользовательских средах => метод OPTIONS может использоваться для разрешения конфликтов запросов, в частности в многопользовательских системах.

// Что передает и принимает:
// Метод OPTIONS не передает никаких данных в своем теле запроса. Вместо этого, он используется для получения информации о ресурсе с сервера. После отправки запроса OPTIONS, сервер обычно отвечает метаданными о запрошенном ресурсе, такими как поддерживаемые методы, разрешенные заголовки, возможности кэширования и другая информация о ресурсе.

// * Задание 2
// ключевые особенности HTTP версии 3.0:
// 1) HTTP 3.0 основан на протоколе QUIC (Quick UDP Internet Connections), который использует UDP вместо TCP => снижение задержек и улучшение производительности передачи данных.
// 2) HTTP 3.0 поддерживает мультиплексирование => можно одновременно передавать несколько запросов и ответов на одном соединении => отсутствие проблемы "очереди блокировки".
// 3) Протокол QUIC, на котором основан HTTP 3.0, включает в себя механизмы коррекции ошибок и переотправки данных => повышение надежности передачи данных в сетях с высокой задержкой и потерями пакетов.
// 4) QUIC и HTTP 3.0 спроектированы с учетом особенностей мобильных сетей => более высокие скорости передачи данных и улучшение производительности для пользователей, работающих с мобильными устройствами.
// 5) HTTP 3.0 использует новый механизм сжатия заголовков под названием QPACK, который является модификацией HPACK, используемой в HTTP 2.0 => в QPACK заголовки HTTP могут поступать не по порядку в разных потоках QUIC.

// * Задание 3.1
// В настоящее время существует два основных способа совершения запросов: XMLHttpRequest и fetch. XMLHttpRequest существует уже долгое время, а fetch был добавлен в ES6.

// 1) Пример отмены запроса у XMLHttpRequest:
//  let xhr = new XMLHttpRequest();
//  xhr.method = 'GET';
//  xhr.url = 'https://slowmo.glitch.me/5000';
//  xhr.open(method, url, true);
//  xhr.send();

//  Отменяем запрос по клику:
//  abortButton.addEventListener('click', function() {
//    xhr.abort();
//  });

// 2) Fetch API с использованием AbortController:
//  const controller = new AbortController();
//  const signal = controller.signal;

//  fetch('https://example.com/data', { signal })
//    .then(response => {
//    Обработка полученных данных
//    })
//    .catch(err => {
//    if (err.name === 'AbortError') {
//    Обработка отмены запроса
//    } else {
//    Другая обработка ошибок
//    }
//    });

//    Где-то в коде можно вызвать метод abort(), чтобы отменить запрос:
//    controller.abort();

//    Отмена запроса отменяет и отправку, и получение. AbortController существует не только для fetch, это универсальный объект для отмены асинхронных задач, в fetch встроена интеграция с ним.

// * Задание 3.2
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