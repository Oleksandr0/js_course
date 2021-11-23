// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let num = (a,b,c) => {
//     if (a<b && a<c){
//         console.log(a)
//     } else if (b<c && b<a){
//         console.log(b)
//     } else {
//         console.log(c)
//     }
// }
// num(50,40,90)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let num = (a,b,c) => {
//     if (a>b && a>c){
//         console.log(a)
//     } else if (b>c && b>a){
//         console.log(b)
//     } else {
//         console.log(c)
//     }
// }
// num(50,40,90)

// - створити функцію яка повертає найбільше число з масиву

// let numbers = [2, 34, 44, 98, 11, 67]
// let maxNum = (num) => {
//     let max = num[0];
//     for (const max1 of num) {
//         if (max1> max){
//             max = max1
//         }
//     }
//     return max
// }
//
// console.log(maxNum(numbers))

// - створити функцію яка повертає найменьше число з масиву

// let numbers = [2, 34, 44, 98, 11, 67]
// let maxNum = (num) => {
//     let max = num[0];
//     for (const max1 of num) {
//         if (max1< max){
//             max = max1
//         }
//     }
//     return max
// }
//
// console.log(maxNum(numbers))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let massif = [2, 4, 6, 1];
// let sumMassif = (massif) => {
//     let sum = 0;
//     for (const massifElement of massif) {
//         sum = massifElement + sum;
//     }
//     return sum;
// }
//
// console.log(sumMassif(massif))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let massif = [2, 4, 6, 1];
// let sumMassif = (massif) => {
//     let sum = 0;
//     for (const massifElement of massif) {
//         sum = massifElement + sum;
//     }
//     return sum/massif.length;
// }
//
// console.log(sumMassif(massif))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let num = (...arg) => {
//     let min = arg[0];
//     let max = arg[0];
//     for (const element of arg) {
//         element>max? max = element:max
//         element<min? min = element:min
//     }
//     console.log(max)
//     return min;
// }
// document.writeln(num(23, 15, 66, 9));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let num = (arg) => {
//     let massif = [];
//     for (let i = 0; i < arg; i++) {
//         massif.push(Math.floor(Math.random()*100))
//     }
//     return massif
// }
// document.writeln(num(5));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let num = (arg, limit) => {
//     let massif = [];
//     for (let i = 0; i < arg; i++) {
//         massif.push(Math.floor(Math.random()*limit))
//     }
//     return massif
// }
// document.writeln(num(5, 20));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let reverse = (massif) => {
//     let massif2 = [];
//        for (let i = massif.length - 1, j=0; i >= 0; i--, j++) {
//         massif2[j] = massif[i]
//
//        }
//     console.log(massif2)
//
// }
// reverse([1,2,3]);
