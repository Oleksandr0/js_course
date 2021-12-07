// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку
// исчезал элемент с id="text".
//

// document.getElementById('hider').onclick = function(){
//     document.getElementById('text').style.display = 'none';
// }

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

//
// let button = document.getElementById('hider');
// button.onclick = function () {
//     button.hidden = true;
// }


//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// document.getElementById('button1').onclick = function () {
//   let age =   document.getElementById('age').value;
//     if (age>=18) {
//         alert('Welcome');
//     } else {
//         alert('Вибачте, треба підрости');
//     }
// }

// - Создайте меню, которое раскрывается/сворачивается при клике

// let menuElement = document.querySelector('.menu');
// let titleElement = menuElement.querySelector('.title');
//
// titleElement.onclick = function () {
//     menuElement.classList.toggle('hidden');
// };
//
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comments = [
//     {title: 'item1', body: 'Lorem ipsum dolor sit amet.'},
//     {title: 'item2', body: 'Lorem ipsum dolor sit amet.'},
//     {title: 'item3', body: 'Lorem ipsum dolor sit amet.'},
//     {title: 'item4', body: 'Lorem ipsum dolor sit amet.'},
// ];
//
//
// for (const item of comments) {
//     let divElement = document.createElement('div');
//     let h3 = document.createElement('h3');
//     h3.innerText = item.title;
//     let p = document.createElement('p');
//     p.innerHTML = item.body;
//     let btn = document.createElement('button');
//     btn.innerHTML = 'Close'
//
//     btn.onclick = function () {
//         p.classList.add('pHidden');
//     }
//     divElement.append(h3, p, btn);
//     document.body.appendChild(divElement)
// }

