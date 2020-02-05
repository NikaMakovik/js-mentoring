// Объекты
// https://learn.javascript.ru/object

// 1
// Напишите код, выполнив задание из каждого пункта отдельной строкой:
// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

let user = {};
user.name = "John" ;
user.surname = "Smith" ;
user.name = "Pete";
delete user.name;
console.log(user);



// 2
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
// Должно работать так:
let schedule = {};
console.log( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
console.log( isEmpty(schedule) ); // false

function isEmpty(param) {
    for (let key in param) return false;
    return true;
// }

// 3
// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

// const user = {
//   name: "John"
// };

// это будет работать?
// user.name = "Pete";

//answer:  yez


// 4
// У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.
console.log(sumAll(salaries))
function sumAll(toSum) {
    let sum = 0;
    for (key in toSum) {
        sum += toSum[key];
    }
    return sum;
}




// 5
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// Например:

// // до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);
console.log(menu)

// после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
// P.S. Используйте typeof для проверки, что значение свойства числовое.

function multiplyNumeric(obj) {
    for (key in obj) {
        if (typeof(obj[key]) == 'number') {
            obj[key] *= 2;
        }
    }
}


// Get the current date, print to the console
// Get the day, month and year of the current date and separately output to the console
let today = new Date();
console.log(today);
// or
console.log(new Date());

let year = today.getFullYear()
let month = today.getMonth()
let day = today.getDate() 

console.log(year)
console.log(month)
console.log(day)

// Solve all tasks from https://learn.javascript.ru/datetime

// 1

// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
let date = new Date(2012, 1, 20, 3, 12);
console.log(date);

// 2
// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log( getWeekDay(date) );        // нужно вывести "ВТ"

function getWeekDay(date) {
    day = date.getDay();
    switch (day) {
        case 0: return 'SUN'
        case 1: return 'MON'
        case 2: return 'TUE'
        case 3: return 'WED'
        case 4: return 'THU'
        case 5: return 'FRI'
        case 6: return 'SAT'
    }
}

// 3
// В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и 
//   так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log( getLocalDay(date) );       // вторник, нужно показать 2

function getLocalDay(date) {
    day = date.getDay()
    if (day == 0) return 7;
    else return day;
}

// 4
// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
// Функция должна надёжно работать при значении days=365 и больших значениях:
// P.S. Функция не должна изменять переданный ей объект date.

let date = new Date(2015, 0, 2);

console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

function getDateAgo(date, days) {
    let newdate = new Date();
    newdate.setDate(date.getDate() - days)
    return newdate.getDate()
}


// 5
// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
// Параметры:
// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
console.log(getLastDayOfMonth(2020, 1))

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

// 6
// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
console.log(getSecondsToday())

function getSecondsToday() {
    let date = new Date();
    let sum = 0;
    sum += date.getHours() * 3600;
    sum += date.getMinutes() * 60;
    sum += date.getSeconds();
    return sum;
}

// 7
// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
console.log(getSecondsToTomorrow())
console.log(getSecondsToday() + getSecondsToTomorrow())

function getSecondsToTomorrow() {
    let date = new Date();
    let sum = 0;
    let whole = 24 * 3600;
    sum += date.getHours() * 3600;
    sum += date.getMinutes() * 60;
    sum += date.getSeconds();
    return whole - sum;
}

// 8
// Напишите функцию formatDate(date), форматирующую date по следующему принципу:
// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
console.log(formatDate(new Date(new Date - 1))) //"прямо сейчас"
console.log(formatDate(new Date(new Date - 30 * 1000))) //"30 сек. назад"
console.log(formatDate(new Date(new Date - 5 * 60 * 1000))) //"5 мин. назад"
console.log(formatDate(new Date(new Date - 5 * 60 * 1000 * 100000))) //"5 мин. назад"

function formatDate(date) {
    let nowDate = new Date()
    let diff = nowDate - date;
    if (diff < 1000) return 'right now'
    else if (diff < 60000) return `${Math.floor(diff / 1000)} seconds ago`
    else if (diff < 3600000) return `${Math.floor(diff / 60000)} minutes ago`
    else {
        let d = date;
        d = [
            '0' + d.getDate(),
            '0' + (d.getMonth() + 1),
            '' + d.getFullYear(),
            '0' + d.getHours(),
            '0' + d.getMinutes()
        ].map(component => component.slice(-2));
    
        return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
    }
}
