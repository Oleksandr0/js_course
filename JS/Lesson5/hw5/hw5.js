// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою

// let calc = (a,b) => a*b;
// console.log(calc(5, 6));

// - створити функцію яка обчислює та повертає площу кола

// let calc = (a) => Math.PI * Math.pow(a,2);
// console.log(calc(2))

// - створити функцію яка обчислює та повертає площу циліндру

// let calc = (r,h) => 2 * Math.PI * r * h;
//
// console.log(calc(2,3))

// - створити функцію яка приймає масив та виводить кожен його елемент

// let massif = [11, 22, 'name', true];
//
// let massifFn = (massif) => {
//        for (let i=0; i < massif.length; i++){
//               document.writeln(massif[i]);
//        }
// }
// massifFn(massif);


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let text = (text) => {
//     document.write(`<p>${text}</p>`)
// }
// text(`Lorem ipsum dolor sit amet.`)

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let textUl = (text) => {
//     document.write(`<ul>
//                 <li>${text}</li>
//                 <li>${text}</li>
//                 <li>${text}</li>
// </ul>`)
// }
// textUl(`Lorem ipsum dolor sit amet, consectetur.`)

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let textUl = (text,n) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < n; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// textUl(`Lorem ipsum dolor sit amet.`, 3)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let massif = [4, 5, 6,'vova','olya',false,true];
//
// let data2 = (data) => {
//     document.writeln(`<ul>`)
//  for (let i = 0; i < data.length; i++) {
//   document.writeln(`<li>${data[i]}</li>`)
//  }
//  document.writeln(`</ul>`)
// }
// data2(massif)

//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let massif = [
//     {id:1, name: 'vova', age:22},
//     {id:2, name: 'olia', age: 23},
//     {id:3, name: 'vasia', age: 24},
//     {id:4, name: 'vika', age: 21}];
//
// let massifObj = (arg)=> {
//  for (const argElement of arg) {
//     document.writeln(`<div>${argElement.id}. ${argElement.name} ${argElement.age}</div>`)
//  }
// }
// massifObj(massif)