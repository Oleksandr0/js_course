// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// document.onclick = function (e) {
//     console.log(e);
//     console.log(`You chose an element with tag: ${e.path[0].localName}, with classes: ${e.path[0].className}, with id: ${e.path[0].id} and sizes ${e.path[0].clientHeight}x${e.path[0].clientWidth}`);
// }

//
// -- взять массив пользователей
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
// //
// //
function array(userList) {
    for (const user of userList) {
        let userWrap = document.createElement('div');
        document.body.append(userWrap);
        for (const userkey in user) {
            if (typeof user[userkey] !== 'object') {
                let element = document.createElement('div');
                element.innerText = `${userkey}: ${user[userkey]}`;
                userWrap.appendChild(element);
            } else {
                let wrapper = document.createElement('div');
                for (const itemkey in user[userkey]) {
                    if (typeof user[userkey][itemkey] !== 'object') {
                        let item = document.createElement('div');
                        item.innerText = `${itemkey}: ${user[userkey][itemkey]}`;
                        wrapper.appendChild(item);
                        userWrap.appendChild(wrapper);
                    }
                }
            }
        }
    }

}



let f1 = document.forms.form;
let statusFilter = function (array) {
    let result;
    if (f1.status.checked) {
        result = array.filter(user => user.status === false);
    } else {
        result = usersWithAddress;
    }
    return result;
}

let ageFilter = function (array) {
    let ageUser;
    if (f1.age.checked) {
        ageUser = array.filter(user => (user.age >= 29))
    } else {
        result = usersWithAddress;
    }
    return ageUser;
}


let cityFilter = function (array) {
    let cityKyiv;
    if (f1.city.checked) {
        cityKyiv = array.filter(user => (user.address.city === 'Kyiv'))
    } else {
        result = usersWithAddress;
    }
    return cityKyiv;
}

let button = document.getElementById('result');
button.onclick = function () {
    if (f1.status.checked && !f1.age.checked && !f1.city.checked) {
        let statusResult = statusFilter(usersWithAddress);
        array(statusResult);
    } else if (!f1.status.checked && f1.age.checked && !f1.city.checked) {
        let ageResult = ageFilter(usersWithAddress);
        array(ageResult);
    } else if (!f1.status.checked && !f1.age.checked && f1.city.checked) {
        let cityResult = cityFilter(usersWithAddress);
        array(cityResult);
    } else if (f1.status.checked && f1.age.checked && f1.city.checked) {
        let allfilters = statusFilter(ageFilter(cityFilter(usersWithAddress)));
        array(allfilters);
    } else if (!f1.status.checked && f1.age.checked && f1.city.checked) {
        let ageCity = ageFilter(cityFilter(usersWithAddress));
        array(ageCity);
    } else if (f1.status.checked && f1.age.checked && !f1.city.checked) {
        let statusAge = statusFilter(ageFilter(usersWithAddress));
        array(statusAge);
    } else if (f1.status.checked && !f1.age.checked && f1.city.checked){
        let statusCity = statusFilter(cityFilter(usersWithAddress));
        array(statusCity);
    }
}

//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан