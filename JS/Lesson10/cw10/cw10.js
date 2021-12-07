// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//

// let button = document.createElement('button');
// document.body.appendChild(button);
// button.innerText = 'Save';
// button.onclick = function () {
//     let arr = [];
//     arr.push({email: document.forms.f1.name.value, password: document.forms.f1.surname.value,
//         age: document.forms.f2.age.value, gender: document.forms.f2.gender.value});
//     console.log(arr);
// }

//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//

// let rows = document.createElement('input');
// let columns = document.createElement('input');
// let text = document.createElement('input');
// let button = document.createElement('button');
// button.innerText = 'Build table';
// document.body.append(rows, columns, text, button);
// button.onclick = function () {
//     let container = document.createElement('table');
//     container.style.width='100%';
//
// for (let i =1; i<=rows.value; i++) {
//     let tr = document.createElement('tr');
//     container.appendChild(tr);
// for (let j=1; j<=columns.value; j++) {
//     let td = document.createElement('td');
//     td.innerText = text.value;
//     container.appendChild(td);
// }
// }
// document.body.append(container);
// }


//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let badWords = ['shit', 'fuck', 'bitch', 'balls', 'засранец', 'гавнюк', 'cazzo', 'stronzo'];
// let input = document.createElement('input');
// input.type = 'text';
// document.body.appendChild(input);
// let button = document.createElement('button');
// document.body.appendChild(button);
// button.innerText = 'Check';
// button.onclick = function () {
//     for (const word of badWords) {
//         if (input.value === word) {
//             alert('You entered bad word');
//         }
//     }
// }

//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let badWords = ['shit', 'fuck', 'bitch', 'balls', 'засранец', 'гавнюк', 'cazzo', 'stronzo'];
// let input = document.createElement('input');
// input.type = 'text';
// document.body.appendChild(input);
// let button = document.createElement('button');
// document.body.appendChild(button);
// button.innerText = 'Check';
// button.onclick = function () {
//     for (const word of badWords) {
//         if (input.value.includes(word)) {
//             alert('You entered bad word');
//         }
//     }
// }