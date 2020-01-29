// Операторы
// https://learn.javascript.ru/operators

//1
let a = 1, b = 1;
let c = ++a; // ?
let d = b++; // ?
// answer: a=2 b=2 c=2 d=1

//2
let a = 2;
let x = 1 + (a *= 2);
// answer: a=4 x=5


// Операторы сравнения
// https://learn.javascript.ru/comparison
5 > 4 //
"ананас" > "яблоко" //true
"2" > "12" //true
undefined == null // true
undefined === null //false
null == "\n0\n" //false
null === +"\n0\n" //false


// Условные операторы: if, '?'
//https://learn.javascript.ru/ifelse

//1
if ("0") {
    alert( 'Привет' );
  }
  //answer: yes

//2
name = prompt("javascript name?",'');
if (name=='ECMAScript'){
    alert("right")
} else alert("you know nothing")


//3
number=prompt('?', '');
if (number>0) alert ('1')
else if (number<0) alert ('-1')
else alert('0')



//4
a=1
b=5
result = a + b < 4 ? 'Мало' : 'Много'
console.log(result)

//5
login= 'Сотрудник'


message = (login == 'Сотрудник') ? 'Привет' : 
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' :
    '?'
console.log(message)


//Логические операторы
//https://learn.javascript.ru/logical-operators

//1-5
console.log(null || 2 || undefined);

console.log( console.log(1) || 2 || console.log(3) );

console.log( 1 && null && 2 );

console.log( console.log(1) && console.log(2) );

console.log( null || 2 && 3 || 4 );

//6
age=11
if (age>=14 && age<=90) console.log('true')
console.log(age>=14 && age<=90)

//7
if (age<14 || age>90) console.log('true')

if (!age>=14 || !age<=90) console.log('true')


//8
if (-1 || 0) console.log( 'first' );
if (-1 && 0) console.log( 'second' );
if (null || -1 && 1) console.log( 'third' );
//answer: first, third

//9
user = prompt("name?",'');
if (user=='admin'){
    password = prompt ("password?", '')
    if(password=='main') {
        alert('hello')
    } else if (password=='' || password==null){
        alert('cancelled')
    } else {
        alert('wrong password')
    }
} else if (user=='' || user==null){
    alert('cancelled')
} else {
    alert('who are you')
}


// Конструкция "switch"
// https://learn.javascript.ru/switch

//1
browser=prompt ('browser?', '')
  if (browser=='Edge') {
    alert( "You've got the Edge!" );
  } else if (browser=='Chrome' || browser=='Firefox' || browser=='Safari' || browser=='Opera'){
    alert( 'Okay we support these browsers too' );
  } else alert( 'We hope that this page looks ok!' );



//2
const number = +prompt('Введите число между 0 и 3', '');

switch (number){
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
}