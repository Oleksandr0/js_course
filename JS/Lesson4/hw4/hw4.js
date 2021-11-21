// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function num(a1,a2) {
//     return a1*a2
// }
// console.log(num(10,30))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function circle(p,a){
//     return p*Math.pow(a,2)
// }
// console.log(circle(3.14,2))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function cylinder(p,r,h){
//     return 2*p*r*h
// }
//
// console.log(cylinder(3.14,2,3))

// - створити функцію яка приймає масив та виводить кожен його елемент


// let massif = [11, 22, 'name', true]
//
// function massif2 (massif) {
//     for (let i = 0; i < massif.length; i++) {
//         document.writeln(massif[i])
//
//     }
// }
// massif2(massif)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function text (text){
//       document.write(`<p>${text}</p>`)
//   }
// text('Lorem ipsum dolor sit.')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

//   function text(text){
//       document.write(`<ul>
//                          <li>${text}</li>
//                          <li>${text}</li>
//                          <li>${text}</li>
//                      </ul>`)
//   }
// text('Lorem ipsum dolor sit amet.')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function text(text,n) {
//     document.write(`<ul>`)
//     for (let i = 0; i < n; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`<ul>`)
// }
// text('Lorem ipsum dolor sit amet.',9);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//

//  let massif = [4, 5, 6,'vova','olya',false,true];
//
// function data2(data) {
//  document.writeln(`<ul>`)
//  for (let i = 0; i < data.length; i++) {
//   document.writeln(`<li>${data[i]}</li>`)
//  }
//  document.writeln(`</ul>`)
// }
// data2(massif)




// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
let massif = [
    {id:1, name: 'vova', age:22},
    {id:2, name: 'olia', age: 23},
    {id:3, name: 'vasia', age: 24},
    {id:4, name: 'vika', age: 21}];

function massifObj(arg){
 for (const argElement of arg) {
    document.writeln(`<div>${argElement.id}. ${argElement.name} ${argElement.age}</div>`)
 }
}
massifObj(massif)