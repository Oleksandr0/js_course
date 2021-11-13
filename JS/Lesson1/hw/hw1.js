// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
//

// let word1='Hello';
// let word2='owu';
// let word3='com';
// let word4='ua';
// let number1=1;
// let number2=10;
// let number3=-999;
// let number4=123;
// let number5=3.14;
// let number6=2.7;
// let number7=16;
// let status1 = true;
// let status2 = false;

// console.log('word1', 'word2', 'word3', 'word4', 'number1', 'number2', 'number3', 'number4', 'number5', 'number6',
//     'number7', 'status1', 'status2')

// alert(word1 + word2 + word3 + word4 + number1 + number2 + number3 + number4 + number5 + number6 + number7 +
// status1 + status2)


// document.write(`<h2>${word1} ${word2} ${word3} ${word4} ${number1} ${number2} ${number3} ${number4} ${number5}
//          ${number6} ${number7} ${status1} ${status2}</h2>`)


// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// word1='hi';
// console.log(word1);
// alert(word1);
// word2='okten';
// console.log(word2);
// alert(word2);
// word3='you';
// console.log(word3);
// alert(word3);
// word4='cool';
// console.log(word4);
// alert(word4);
// number1=11;
// console.log(number1);
// alert(number1)
// number2=22;
// console.log(number2);
// alert(number2);
// number3=33;
// console.log(number3);
// alert(number3);
// number4=44;
// console.log(number4);
// alert(number4);
// number5=55;
// console.log(number5);
// alert(number5);
// number6=66;
// console.log(number6);
// alert(number6);
// number7=77;
// console.log(number7);
// alert(number7);
// status1=false;
// console.log(status1);
// alert(status1);
// status2=true;
// console.log(status2);
// alert(status2);
//
// document.write(`<h2>${word1} ${word2} ${word3} ${word4} ${number1} ${number2} ${number3} ${number4} ${number5}
//          ${number6} ${number7} ${status1} ${status2}</h2>`)


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

// let firstName='Олександр';
// let middleName='Володимирович';
// let lastName='Єрмольчев';
// let age=41;

// let person=[ firstName, middleName, lastName];
// console.log(person);
// document.write(firstName + ' ' + middleName + ' ' + lastName);


// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

// prompt(firstName);
// prompt(middleName);
// prompt(age)
// prompt('Вітаю,' + ' ' + firstName + ' ' + middleName + '.' + ' ' + 'Тобі' + ' ' + age + ' ' + 'рік.');
// prompt(`${`Вітаю`} ${firstName} ${middleName}. ${`Тобі`} ${age} ${`рік`}`)

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

// let a = 100;
// let b = '100';
// let c = true;
// console.log(typeof a);//number
// console.log(typeof b);//string
// console.log(typeof c);//boolean

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true

// let truth= 5 < 6; //true
// console.log(truth);
//
// let truth2= 5 > 6;//false
// console.log(truth2);
//
// let truth3= 5 >= 6; //false
// console.log(truth3);
//
// let truth4= 5 === 6; //false
// console.log(truth4);
//
// let truth5= 10 >= 10; //true
// console.log(truth5);
//
// let truth6= 10 <= 10; //true
// console.log(truth6);
//
// let truth7= 10 > 10; //false
// console.log(truth7);
//
// let truth8= 10 < 10; //false
// console.log(truth8);
//
// let truth9= 10 !== 10; //false
// console.log(truth9);
//
// let truth10= 123 > '123'; //false
// console.log(truth10);
//
// let truth11= 123 !== '123'; //true
// console.log(truth11);

//
// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
    let str = "20";
let a = 5;
document.write(str + a + "<br/>");//205 - конкатенація
document.write(str - a + "<br/>"); //15 - перетворює на цифрове значення
document.write(str * "2" + "<br/>"); //40 - перетворює на цифрове значення
document.write(str / 2 + "<br/>"); //10 - перетворює на цифрове значення


