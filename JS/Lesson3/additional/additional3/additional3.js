// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.


// let num = [];
// for (let i = 0; i < 100; i++) {
//     if (i%2 === 0){
//         num[i] = i
//         console.log(num[i])
//     }
//
// }


//     b. заповнити його 50 непарними числами за допомоги циклу.

// let num = [];
// for (let i = 0; i < 100; i++) {
//     if (i%2 !== 0){
//         num[i] = i
//         console.log(num[i])
//     }
//
// }

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// let num= [];
// for (let i = 0; i < 20; i++){
//     num[i] = Math.floor(Math.random()*20);
// }
// console.log(num);



// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let num= [];
// for (let i = 0; i < 20; i++){
//     num[i] = Math.floor(Math.random()*(732-8)+8);
// }
// console.log(num);
//

// 2. Вивести за допомогою console.log кожен третій елемен

// for (let i = 2 ; i < num.length; i+=3){
//     console.log(num[i]);
// }


// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// for (let i = 2 ; i < num.length; i+=3){
//     if (num[i]%2 === 0 ){
//         console.log(num[i]);
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let num1 = []
// for (let i = 2 ; i < num.length; i+=3){
//     if (num[i]%2 === 0 ){
//         num1.push(num[i])
//     }
// }
// console.log(num1)


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let num = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ]
//
// for (let i = 0; i < num.length; i++){
//     if (num[i]%2 ===0){
//         console.log(num[i-1])
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
// let num = [100,250,50,168,120,345,188];
// let num1 = 0;
// for (u = 0; i < num.length; i++){
//     num1 = num1 + num[i];
// };
// console.log(num1);
// mathe = +num1 / num.length;
// console.log(num1);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// num = [1,10,100,1000,10000];
// let num1 = [];
// for (i = 0; i < num.length; i++){
//     num1.push(num[i] *5);
// }
// console.log(num1);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//

// massive = [123, 456, 'vova', 'olya', true, false];
// let result = [];
// for (i = 0; i < massive.length; i++){
//     if (typeof massive[i] === `number`){
//         result.push(massive[i])
//     }
// }
// console.log(result);

//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// for (const user of usersWithId) {
//     for (const city of citiesWithId) {
//         if (user.id === city.user_id){
//             user.address = city;
//         }
//     }
// }
// console.log(usersWithId);

//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
//
//
//
//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// num = [11,22,33,44,55,66,77,88,99,100];
// for (let i = 0; i < num.length; i++){
//     if (num[i]%2 === 0){
//         console.log(num[i]);
//     }
// };

//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//

// num = [11,22,33,44,55,66,77,88,99,100];
// num1 = [];
// for (let i = 0; i < num.length; i++){
//     num1[i] = num[i];
// }
// console.log(num1);

//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let letter = [ 'a', 'b', 'c'];
// let  str = '';
// for (let i = 0; i < letter.length; i++){
//     str = str + letter[i];
// }
// console.log(str);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let letter = [ 'a', 'b', 'c'];
// let str = '';
// i=0
// while (i<letter.length){
//     str = str + letter[i]
//     i++
// }
// console.log(str)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let letter = [ 'a', 'b', 'c'];
let str = '';

for (const strElement of letter) {
    str = str + strElement
}
console.log(str)