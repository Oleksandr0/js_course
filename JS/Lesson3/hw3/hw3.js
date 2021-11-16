// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let num=[11,22,33,44,55];
// console.log(num);
// let names=['kolya', 'petya', 'vasya', 'olya', 'max'];
// console.log(names);
// let users=[{name:'kolya' , age: 31, status: true}];
// console.log(users)


//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let user=[];
// user[0] = true;
// user[1] = 'vova';
// user[2] = 34;
// user[3] = 'olya';
// user[4] = false;
// user[5] = 'vasya';
// console.log(user[2]);

//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Lorem ipsum dolor sit amet, consectetur.</div>`)
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 1; i <= 10; i++) {
//     document.write(`<div>${[i]}  Lorem ipsum dolor sit amet, consectetur.</div>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

//
// let i=0
// while (i < 20) {
//     document.write(`<div><h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1></div>`);
//
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0
// while (i < 20) {
//     document.write(`<div><h1>${[i]} - Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1></div>`);
//
//     i++;
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let num=[11,22,33,44,55,66,77,88,99,100];
// for (let i = 0; i < num.length; i++) {
//     const numElement = num[i];
//     console.log(num)
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let names=['kolya', 'petya', 'vasya', 'olya', 'max','vitya','vika','vova','slava','ira'];
// for (let i = 0; i < names.length; i++) {
//     const name = names[i];
//     console.log(names);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let users=['vova', 35,'street',23, '15','user','cool',143,'12','sova']
//
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//
//     console.log(users)
// }



// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

        // let users=['vova', 35,true,23, '15','user','cool',143,'12',false];
        // for (let i = 0; i < users.length; i++) {
        //     const user = users[i];
        //     if (typeof users[i] === 'boolean'){
        //         console.log(users[i])
        //     }
        // }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let users=['vova', 35,true,23, '15','user','cool',143,'12',false];
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     if (typeof users[i] === 'number'){
//         console.log(users[i])
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let users=['vova', 35,true,23, '15','user','cool',143,'12',false];
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     if (typeof users[i] === 'string'){
//         console.log(users[i])
//     }
// }

//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let massive=[];
// massive[0]='ira';
// massive[1]=134;
// massive[2]=true;
// massive[3]='vova';
// massive[4]=45;
// massive[5]=false;
// massive[6]='vika';
// massive[7]=34;
// massive[8]=true;
// massive[9]='olya';
// for (let i = 0; i < massive.length; i++) {
//     const massiveElement = massive[i];
//     console.log(massive[i])
//
// }
//
// for (const massiveElement of massive) {
//     document.writeln(massiveElement)
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(`step:`, i);
//     document.write(`step:, ${i} <br>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log(`step:`, i);
//     document.write(`step:, ${i} <br>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// let user=0
// for (let i = 0; i < 100; i++) {
//     console.log(`step:`, user);
//     document.write(`step: ${user} <br>`);
//     user+=2;
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//    if (i%2===0) {
//        console.log('step:', i);
//        document.write(`step:, ${i} <br>`);
//    }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write


// for (let i = 0; i < 100; i++) {
//     if (i%2===1) {
//         console.log('step:', i);
//         document.write(`step:, ${i} <br>`);
//     }
// }