// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//

// class User{
//     constructor(id, name, surname, email, phone) {
//         this.id=id;
//         this.name=name;
//         this.surname=surname;
//         this.email=email;
//         this.phone=phone;
//
//     }
// }
// const dima= new User(1,'Dima','Ivanov','dim@gmail.com','0673874747');
// const rima= new User(2,'Rima','Ivanova','rima@gmail.com','0678462233');
// const vova= new User(3,'Vova','Petrov','vova@gmail.com','0673870564');
// const vika= new User(4,'Vika','Petrova','vika@gmail.com','0679889393');
// const ira= new User(5,'Ira','Sidorova','ira@gmail.com','0671237878');
// const vasya= new User(6,'Vasya','Vasin','vasya@gmail.com','0677874848');
// const kolya= new User(7,'Kolya','Usenko','kolya@gmail.com','0672873478');
// const sima= new User(8,'Sima','Simenko','sima@gmail.com','0675578493');
// const dasha= new User(9,'Dasha','Pupkina','dasha@gmail.com','0683645457');
// const petya= new User(10,'Petya','Pupkin','petya@gmail.com','0673667587');
//
// console.log(dima)
// let user=[];
//
// user.push(dima,rima,vova,vika,ira,vasya,kolya,sima,dasha,petya)
//
// console.log(user);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filter=user.filter(function (users){
//     return users.id %2==0;
//
// });
// console.log(filter);

//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)


// user.sort(function (a, b){
//     return a.id-b.id;
// });
// console.log(user);

// user.sort(function (a, b){
//     return b.id-a.id;
// });
// console.log(user);
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// class Client{
//     constructor(id,name,surname,email,phone,order) {
//         this.id=id;
//         this.name=name;
//         this.surname=surname;
//         this.email=email;
//         this.phone=phone;
//         this.order=order;
//
//     }
// }
// const dima= new Client(1,'Dima','Ivanov','dim@gmail.com','0673874747',['milk','juice','beer','aqua','cheese']);
// const rima= new Client(2,'Rima','Ivanova','rima@gmail.com','0678462233',['milk','juice']);
// const vova= new Client(3,'Vova','Petrov','vova@gmail.com','0673870564',['beer','aqua','cheese']);
// const vika= new Client(4,'Vika','Petrova','vika@gmail.com','0679889393',['milk','juice','beer','aqua','cheese','beer']);
// const ira= new Client(5,'Ira','Sidorova','ira@gmail.com','0671237878',['milk','juice','beer','aqua']);
// const vasya= new Client(6,'Vasya','Vasin','vasya@gmail.com','0677874848',['milk','juice','beer','aqua','cheese']);
// const kolya= new Client(7,'Kolya','Usenko','kolya@gmail.com','0672873478',['milk','juice','beer','aqua','cheese','beer','vodka']);
// const sima= new Client(8,'Sima','Simenko','sima@gmail.com','0675578493',['milk','juice','beer','aqua']);
// const dasha= new Client(9,'Dasha','Pupkina','dasha@gmail.com','0683645457',['milk','juice']);
// const petya= new Client(10,'Petya','Pupkin','petya@gmail.com','0673667587',['milk']);
//
// let client=[];
// client.push(dima,rima,vova,vika,ira,vasya,kolya,sima,dasha,petya);
// console.log(client);
//
// client.sort(function (a, b){
//     return a.order.length-b.order.length;
// });
// console.log(client);