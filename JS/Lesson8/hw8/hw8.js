// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"

let content = document.getElementById('content');
console.log(content.textContent);

// -- отримує текст з блоку з id "rules"

let rules = document.getElementById('rules');
console.log(rules.textContent);

// -- замініть текст параграфа з id 'content' на будь-який інший

content.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, similique?'
console.log(content.innerText)

// -- замініть текст параграфа з id 'rules' на будь-який інший

rules.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut beatae consectetur,' +
    ' culpa expedita magni.'
console.log(rules.innerHTML);

// -- змініть кожному елементу колір фону на червоний

content.style.background='red';
rules.style.background='red';

// -- змініть кожному елементу колір тексту на синій

content.style.color='blue';
rules.style.color='blue';

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

console.log(rules.classList)

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let fcRules = document.getElementsByClassName('fc_rules');
console.log(fcRules);
for (const fcRule of fcRules) {
    fcRule.style.color = 'red'
}



