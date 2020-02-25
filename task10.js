'use strict';
//1 Create an async duntion using setTimeout
async function firstFunc(ms) {
    setTimeout(() => Promise.resolve(), ms)
}

//2 Create a function with a callback
function powCallback(arg, callback) {
    let a = 6;
    let b = 0;
    b = callback(a, arg);
    return b;
}

function func(a, b) {
    let c = Math.pow(a, b);
    return c;
}

console.log(powCallback(4, func))

// or 
console.log(powCallback(4, function(a, b) {
    let c = Math.pow(a, b);
    return c;
}))

//3 Create a promise based 1st point function 
let promise = new Promise(function(resolve, reject) {
    firstFunc(1000)
});
promise.then(console.log('ok'))

//4 Create an async/await based on 1st point function 
async function f() {
    await promise.then(console.log('good')); // будет ждать, пока промис не выполнится (*)
}
  
f();

//5 Solve tasks from https://learn.javascript.ru/promise

// Промисифицировать setTimeout
// Напишите функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд.

function delay(ms){
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), ms)}
)}

// Пример использования:

delay(1000)
    .then(() => console.log("Hello!"));



// Загрузить массив последовательно
// Есть массив URL:

// 'use strict';

let urls = [
  'user.json',
  'guest.json'
];
// Напишите код, который все URL из этого массива загружает один за другим (последовательно) и сохраняет результаты в массиве results, а потом выводит.

// Вариант с параллельной загрузкой выглядел бы так:

// Promise.all( urls.map(httpGet) )
//   .then(alert);
// В этой задаче загрузку нужно реализовать последовательно.


let chain = Promise.resolve();
let results = [];

urls.forEach(function(url) {
    chain = chain.then(() => console.log(url))
                 .then((result) => {
                     results.push(url);
                    });
});

chain.then(() => {
    console.log(results);
});

