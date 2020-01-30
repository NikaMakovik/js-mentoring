// Циклы while и for
// https://learn.javascript.ru/while-for

// 1
let i = 3;
while (i) {
  alert( i-- );
}
// answer: 1


// 2
let i = 0;
while (++i < 5) alert( i );
// answer: 1 2 3 4

let i = 0;
while (i++ < 5) alert( i );
// answer: 1 2 3 4 5


// 3
for (let i = 0; i < 5; i++) alert( i );
// answer: 1 2 3 4
for (let i = 0; i < 5; ++i) alert( i );
// answer: 1 2 3 4


// 4
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) console.log( i );
}


// 5
i = 0
while (i < 3) {
    console.log( `number ${i}!` );
    i++
}


// 6
number = 0
do {
    number = prompt ('enter number more than 100', '')
    if (number == null) break;

} while (number < 100)


// 7
n=10
for (i = 2; i <= n; i++) {
    isSimple = true
    for (j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) isSimple = false
    }
    if (isSimple == true) console.log( i );
}