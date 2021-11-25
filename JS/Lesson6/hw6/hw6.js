// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world';
// console.log(str.length);

// let str = 'lorem ipsum';
// console.log(str.length);

// let str = 'javascript is cool';
// console.log(str.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world';
// let toUpperCase = str.toUpperCase();
// console.log(toUpperCase)

// let str = 'lorem ipsum';
// let toUpperCase = str.toUpperCase();
// console.log(toUpperCase)


// let str = 'javascript is cool';
// let toLocaleUpperCase = str.toLocaleUpperCase();
// console.log(toLocaleUpperCase);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str = 'HELLO WORLD';
// let toLowerCase = str.toLowerCase();
// console.log(toLowerCase);

// let str = 'LOREM IPSUM';
// let toLowerCase = str.toLowerCase();
// console.log(toLowerCase);

// let str = 'JAVASCRIPT IS COOL';
// let toLowerCase = str.toLowerCase();
// console.log(toLowerCase);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str = ' dirty string   ';
// console.log(str.length)
// let trim = str.trim();
// console.log(trim);
// console.log(trim.length);

//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let stringToarray = (str) => {
//     return str.split(' ');
// }
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr);
//
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let delete_characters = (str, length) => {
    return str.substr(0, length);
};
let str = 'Каждый охотник желает знать';
document.writeln(delete_characters(str, 10));

//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let insert_dash = (str) => {
//     return  split = str.split(' ')
//     .join('-')
//     .toUpperCase();
//
// }
// let str = "HTML JavaScript PHP";
// document.write(insert_dash(str));

//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//

// let firstUp = (str) => {
//     return str[0].toUpperCase() + str.slice(1)
// };
// document.write(firstUp(`lorem ipsum dolor sit amet.`));

//
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.


// let capitalize = (str) => {
//     return str.split(' ').map(str1=>str1.charAt(0)
//         .toUpperCase()+str1.slice(1))
//         .join(' ');
// };
// document.write(capitalize(`lorem ipsum dolor sit amet.`));



