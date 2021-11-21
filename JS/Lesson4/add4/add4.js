// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//
// let a=0;
// function num(arg){
//     arg++;
// }
// num(a)
// console.log(1+2)
// console.log(1,2)

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// function sum(array1, array2){
//     let sumArray = [];
//     for (let i = 0; i < array1.length; i++) {
//         sumArray.push(array1[i] + array2[i])
//     }
//     return sumArray;
// }
//
// console.log(sum([1,2,3,4], [2,3,4,5]))

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// let arrayObj = [{name: 'Dima', age: 13}, {model: 'Camry'}]
// function massifObj(arg){
//
//     for (const argElement of arg) {
//         for (const argElementKey in argElement) {
//             console.log(argElementKey)
//         }
//
//     }
// }
// massifObj(arrayObj)

//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]


// let arrayObj = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// function massifObj(arg){
//
//     for (const argElement of arg) {
//         document.writeln(`${argElement.name} ${argElement.age} ${argElement.model}`)
//     }
//
// }
// massifObj(arrayObj)
