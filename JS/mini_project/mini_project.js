// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        let userWrap = document.createElement('div');
        userWrap.classList.add('userWrap');
        for (const item of value) {
            let user = document.createElement('div');
            user.classList.add('user');
            let userID = document.createElement('h2');
            let userName = document.createElement('h3');
            userID.innerText = `Id: ${item.id}`;
            userName.innerText = `Name: ${item.name}`;
            let button = document.createElement('a');
            button.innerText = 'Details';
            button.href = 'user-details.html';
            button.style.textDecoration = 'none';
            button.style.color = 'black';
            button.onclick = function () {
                console.log(`${item.id}`)
                localStorage.setItem('user', `${item.id}`);
            }
            user.append(userID, userName, button);
            userWrap.append(user);
        }
        document.body.append(userWrap);
    })
