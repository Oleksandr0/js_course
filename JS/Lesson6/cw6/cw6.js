// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
// let name = (string, symbol) => {
//     let newArr = [];
//     if (string.includes(symbol)) {
//         let a = string.split(symbol)
//         a.forEach((item) => {
//             if (item) newArr.push(item);
//         })
//         console.log(newArr.join(' '))
//     }
// }
// name(n3, '_');

// let n=(str)=>{
//     return str = str.replaceAll('..', ' ')
//         .replaceAll('---', ' ')
//         .replaceAll('__', ' ')
//
// }
// console.log(n(n1));
// console.log(n(n2));
// console.log(n(n3));

// let n = n1.replaceAll('..', ' ')
// console.log(n)
//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let random = (arg, num) => {
//     let massif = [];
//     for (let i = 0; i < arg; i++) {
//         massif.push(Math.floor(Math.random() * num));
//     }
//     return massif;
// };
// let result = random(5, 100);
// console.log(result);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort

// result.sort((a,b) => a-b);
// console.log(result);

// result.sort((a,b) => b-a);
// console.log(result)
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати його за допомоги filter, залишивши тільки парні числа

// let result1 = result.filter(value => value % 2 === 0);
// console.log(result1);


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let result1 = result.map(value => value.toString());
// console.log(result1)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//

// let sortNums = (arr, direction) => {
//     if (direction === 'asc') {
//         arr.sort((a, b) => a - b);
//     } else if (direction === 'desc') {
//         arr.sort((a, b) => b - a);
//     }
//     return arr
// };
// console.log(sortNums([11, 21, 3], 'asc') );
// console.log(sortNums([11, 21, 3], 'desc') );

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

// let sort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(sort);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(filter)
//
// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let cutString = (str, n) => {
//     const res = [];
//     while (str.length) {
//         res.push(str.substr(0, n))
//         str = str.slice(n)
//     }
//     console.log(res)
//     return res
// };
// document.writeln(cutString('наслаждение', 3))

