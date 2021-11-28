//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model,manufacturer,year,maxSpeed,volumeEngine){
//     this.model = model;
// 	this.manufacturer = manufacturer;
// 	this.year = year;
// 	this.maxSpeed = maxSpeed;
// 	this.volumeEngine = volumeEngine;
// 	this.drive = function (){
// 		console.log(`Їдемо із швидкістю ${this.maxSpeed} на годину`);
// 	};
// 	    this.info = function () {
//             console.log(this)
// 	    };
// 	    this.increaseMaxSpeed = function (newSpeed =0) {
//             this.maxSpeed += newSpeed;
// 	    };
// 	    this.changeYear = function (newValue) {
// 	        this.year = newValue;
// 	    };
// 	    this.addDriver = function (driver) {
// 	        this.driver = driver;
// 	    };
// 	}
//
//
// let volkswagen= new Car('Touareg','Volkswagen',2015,200,3.0);
// console.log(volkswagen)
// volkswagen.drive();
// volkswagen.increaseMaxSpeed(20);
// volkswagen.changeYear(2017)
// volkswagen.addDriver('Kolya')
// console.log(volkswagen)

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// class Car{
//     constructor(model,manufacturer,year,maxSpeed,volumeEngine) {
//         this.model=model;
//         this.manufacturer=manufacturer;
//         this.year=year;
//         this.maxSpeed=maxSpeed;
//         this.volumEngine=volumeEngine;
//     };
//     drive(){
//         console.log(`Їдемо із швидкістю ${this.maxSpeed} на годину`);
//     };
//     info(){
//         console.log(this)
//     };
//     increaseMaxSpeed (newSpeed =0){
//         this.maxSpeed += newSpeed;
//     };
//     changeYear (newValue){
//         this.year=newValue;
//     };
//     addDriver (driver){
//         this.drive = driver;
//     }
// }

// let volkswagen= new Car('Touareg','Volkswagen',2015,200,3.0);
// volkswagen.info();
// volkswagen.increaseMaxSpeed(20);
// volkswagen.drive()
// volkswagen.addDriver({name:'Vova',age:35})
// volkswagen.changeYear(2017)
// volkswagen.info();
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Cinderella{
//     constructor(name,age,size) {
//         this.name=name;
//         this.age=age;
//         this.size=size;
//     };
// };
// class Prince{
//     constructor(name,age,size) {
//         this.name=name;
//         this.age=age;
//         this.size=size;
//     };
// };
//
// const marina= new Cinderella('Marina',20,36);
// const ira= new Cinderella('Ira',19,34);
// const vika= new Cinderella('Vika',19,37);
// const olya= new Cinderella('Olya',19,38);
// const anna= new Cinderella('Anna',18,39);
// const olga= new Cinderella('Olga',18,35);
// const masha= new Cinderella('Masha',18,36);
// const mila= new Cinderella('Mila',18,37);
// const lesya= new Cinderella('Lesya',18,38);
// const alla= new Cinderella('Alla',18,36);
//
// const prince= new Prince('Vasya',20,34);
// console.log(prince);
//
// let filterCinderella=[];
// let cinderella=[];
// cinderella.push(marina,ira,vika,olya,anna,olga,masha,mila,lesya,alla);
// for (const cinderellaElement of cinderella) {
//     if (cinderellaElement.size === 34){
//         filterCinderella.push(cinderellaElement)
//     }
// }
// console.log(cinderella)
// console.log(filterCinderella);
//
// let find = cinderella.find((index) => index.size === prince.size)
// console.log(find);
