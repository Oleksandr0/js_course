// - Дано натуральное число n. Выведите все числа от 1 до n.

// let recurs = (num) => {
//     console.log(num);
//     num ++
//     if (num > 10){
//         return;
//     }
//     recurs(num);
// }
// recurs(1)

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// let recurs = (a,b) => {
//     if (a<=b){
//         console.log(a)
//         if (a !==b){
//             recurs(a+1,b)
//         }
//     }else if(a>=b){
//         console.log(a)
//         recurs(a-1,b)
//     }
// }
// recurs(20,5)

// let recurs = (a,b) =>{
//     if (a === b){
//         console.log(a);
//     }else if (a<b){
//         recurs(a,b-1);
//         console.log(b)
//     }else {
//         console.log(a);
//         recurs(a-1,b)
//     }
// }
// recurs(5,20)


//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]



// let func =(arg,i)=>{
//     let number = arg[0]
//     for (let j = 0; j < arg.length; j++) {
//         if (i === j){
//             arg[j] = arg [j+1]
//             arg[j+1] = number
//         }
//     }
//     return arg
// }
//
// console.log(func([9, 8, 0, 4], 0));
// console.log(func([9, 8, 0, 4], 1));
// console.log(func([9, 8, 0, 4], 2));


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let moveZeros = (arr) => {
//     let num = 0;
//     for(let i = 0; i < arr.length; i++){
//         if( arr[i] === 0){
//             arr.splice(i,1);
//             num ++;
//             i--;
//         }
//     }
//     for( let i = 0; i < num; i++){
//         arr.push(0);
//     }
//     return arr;
// }
//
// console.log(moveZeros([1,0,6,0,3]));
// console.log(moveZeros([0,1,2,3,4]));
// console.log(moveZeros([0,0,1,0]));
