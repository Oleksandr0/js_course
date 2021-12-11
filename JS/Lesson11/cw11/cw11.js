// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.

for (const item of users) {
    let user = document.createElement('div');
    user.innerText = `Name: ${item.name}, age: ${item.age}, status: ${item.status}  `;
    user.style.marginTop = '15px';
    user.style.display = 'flex';
    user.style.justifyContent = 'space-between';
    user.style.width = '40%';

    let button = document.createElement('button');
    button.innerText = 'Push to favourite';
    button.style.borderRadius = '10px';
    button.style.marginLeft = '15px';

    user.appendChild(button);

    document.body.appendChild(user);

    button.onclick = function () {
        let favourite = JSON.parse(localStorage.getItem('favourite')) || [];
        if ( localStorage.getItem('favourite') === null) {
            let favourite = [];
            favourite.push(item);
            localStorage.setItem('favourite', JSON.stringify(favourite));
        } else {
            favourite = JSON.parse(localStorage.getItem('favourite'));
            favourite.push(item);
            localStorage.setItem('favourite', JSON.stringify(favourite));

        }

    }
}
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.