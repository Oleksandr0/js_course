// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let num = [2,17,13,6,22,31,45,66,100,-18];
num.sort(function (a,b) {
    return a-b
});

//     1. перебрати його циклом while

i=0
while (i < num.length){
    document.writeln(`${num[i]}`)
    i++
}

//     2. перебрати його циклом for

document.writeln(`<div>`)
for (let i = 0; i < num.length; i++) {
    const numElement = num[i];
    document.writeln(`${numElement}`)
}
document.writeln(`</div>`)

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

i=0
while (i < num.length){
    if (i%2 !==0){
        document.writeln(`${num[i]}`)
    }
  i++
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

document.writeln(`<div>`)
for (let i = 0; i < num.length; i++) {
    const numElement = num[i];
    if (i%2 !==0){
        document.writeln(`${numElement}`)
    }
}
document.writeln(`</div>`)

// 5. перебрати циклом while та вивести  числа тільки парні  значення

i=0
while (i < num.length){
    if (i%2 ===0){
        document.writeln(`${num[i]}`)
    }
    i++
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

document.writeln(`<div>`)
for (let i = 0; i < num.length; i++) {
    const numElement = num[i];
    if (i%2 ===0){
        document.writeln(`${numElement}`)
    }
}
document.writeln(`</div>`)

// 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = 0; i < num.length; i++) {
//     if (num[i]%3 ===0){
//         num[i] = 'okten'
//         document.writeln(`${num[i]}`)
//     }
// }
// document.writeln(`<div>${num}</div>`)


// 8. вивести масив в зворотньому порядку.

for (let j = num.length - 1; j >= 0; j--) {

    document.writeln(`${num[j]}`)

}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)


//10
document.writeln(`<div>`)
j=num.length -1
while (j >= 0){
    document.writeln(`${num[j]}`)
    j--
}
document.writeln(`</div>`)

//11


j=num.length -1
while (j >= 0){
    if (j%2 !== 0){
        document.writeln(`${num[j]}`)
    }

    j--
}

//12

document.writeln(`<div>`)
for (let j = num.length - 1; j >= 0; j--) {
    if (j%2 !== 0){
        document.writeln(`${num[j]}`)
    }
}
document.writeln(`</div>`)

//13

j=num.length -1
while (j >= 0){
    if (j%2 === 0){
        document.writeln(`${num[j]}`)
    }

    j--
}

//14

document.writeln(`<div>`)
for (let j = num.length - 1; j >= 0; j--) {
    if (j%2 === 0){
        document.writeln(`${num[j]}`)
    }
}
document.writeln(`</div>`)

//15


num.reverse()
for (let j = num.length - 1; j >= 0; j--) {
    if (num[j]%3 === 0){
        num[j] = 'okten'
        document.writeln(`${num[j]}`)
    }

}
document.writeln(`<div>${num}</div>`)
