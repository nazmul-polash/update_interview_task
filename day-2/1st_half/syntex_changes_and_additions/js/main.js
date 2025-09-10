
// ----------------------------- let & block scope ------------------------------
// var name = "Nazmul Hossen";
// let age = 30;
// if (true) {
//    var add = "Dhaka bangladesh";
//    let newAdd = "Uttara Dhaka, Bagladesh";
//    console.log(add);
//    console.log(newAdd);
// }
// console.log(add);
// console.log(newAdd); //not show outsibe Curly braces 'let'
// console.log(name);
// console.log(age);

// ----------------------------- Constants with 'const' ------------------------------
// const age = 30;
// age = 29;
// const AGE = 30;
// AGE = 29;
// console.log(AGE);
// const AGES = ['28', '29', '30'];
// AGES.push('26');
// console.log(AGES);
// const OBJ = {
//    age:30,
// }
// console.log(OBJ);
// OBJ.age = 40;
// console.log(OBJ.age);

// ----------------------------- Hosting in ES6 ------------------------------
// age = 27;
// console.log(age);
// let age;
// function doSmth() {
//    age = 30;
// }
// let age;
// doSmth();
// console.log(age);

// ----------------------------- Flat Arrow function ------------------------------

// function fn() {
//    console.log('Hello, Nazmul');
// }
// var fn = () => {
//    console.log("this is array function");
// }
// fn();
// var fn = () => console.log('hello');
// fn();
// var fan = () => "hello";
// var fn = () => {
//    let a = 1;
//    let b = 2;
//    console.log(a+b);
   
// }
// var fn = (a, b) => a + b;
// console.log(fn(3,5));
// setTimeout(() => console.log("hello"),1000);

// ----------------------------- Flat Arrow function & the "this" keyword ------------------------------
// var button = document.querySelector("button");
// var fn = () => console.log(this);
// function fn2() {
//    console.log(this);
// }
// button.addEventListener("click", fn);

// ----------------------------- Function and Default Parameters ------------------------------

// let compair = 100;
// function isEqualto(number, compair = a) {
//    console.log(number);
//    console.log(copair);
   
//    return number == compair;
// }
// console.log(isEqualto(0,10));

// ----------------------------- Object Litarel Extensions ------------------------------
// let name = "NazmuHossennpolash";
// let age = 30;
// let ageField = "age";
// let obj = {
//    "name": "nazmul",
//    age,
//    [ageField]: 28,
//    "greet me"() {
//       console.log(this.name + ', ' + this.age);
//    }
// }
// console.log(obj[ageField]);
// obj["greet me"]();

// ----------------------------- the rest operator  ------------------------------
// let numbers = [1,2,3,4,5];
// function sumUp(...toAdd) { // ... is callded rest operator. it contain all parameters
//    let result = 0;
//    for (let i = 0; i < toAdd.length; i++){
//       result += toAdd[i];
//    }
//    return result;
// }
// console.log(sumUp(100,200,320,50,'22'));

// ----------------------------- the Spread operator  ------------------------------
// let numbers = [1, 2, 3, 4, 5];
// console.log(...numbers); // spread operator takes vale in array and show each value individual.
// console.log(Math.max(...numbers));

// ----------------------------- the for of loop  ------------------------------
// let testResults = [3.3, 4.54, 5.00, 3.50];
// for (let testResult of testResults) { //this is for of loop
//    console.log(testResult);
// }

// ----------------------------- Template Literals  ------------------------------
// let name = "Nazmul";
// let desc = `
// my name is ${name + '!!'}. Developer
// `;
// console.log(desc);

// ----------------------------- Destructuring Arrays  ------------------------------
// let numbers = [1, 2, 3, 4];
// let [a, b, c] = [1, 2, 3, 4];
// let [a, b] = numbers;
// console.log(a);
// console.log(b);
// console.log(numbers);
// let [a = 'default', b, c='default', d, e='default value'] = numbers;
// console.log(a);
// console.log(e);
// let a = 5;
// let b = 10;
// [b, a] = [a, b];
// console.log(a);
// console.log(b);
// let [a, , c] = numbers;
// console.log(a, c);

// ----------------------------- Destructuring Objects  ------------------------------
// let obj = {
//    name: "Nazmul",
//    age: 30,
//    greet: function(){
//       console.log("Hello there!");
//    }
// }
// let { name, age } = obj;
// console.log(name, age);
// let { name, greet } = obj;
// let { name, greet:hello } = obj;
// greet();
// hello();


// the end of day-2 1st half




