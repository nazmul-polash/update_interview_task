
// ---------------------------------- Classes ----------------------------------
// class Person {
//    constructor(name) {
//       // this.name = "Nazmul";
//       this.name = name;
//    }
//    greet() {
//       console.log("Hello My name is " + this.name);
//    }
// }
// let person = new Person();
// let person = new Person('Nazmul Hossen');
// person.greet();
// console.log(person);

// ---------------------------------- Classes & Prototypes ----------------------------------

// class Person {
//    constructor(name) {
//       this.name = name;
//    }
//    greet() {
//       console.log("Hello My name is " + this.name);
//    }
// }
// let person = new Person("Nazmul Hossen");
// console.log(person.__proto__ === Person.prototype);

// ---------------------------------- Inheritencce ----------------------------------

// class Person {
//    constructor(name) {
//       this.name = name;
//    }
//    greet() {
//       console.log("Hello My name is " + this.name + " and i am " + this.age);
//    }
// }

// class Details extends Person {
//    constructor(age) {
//       super("Nazmul Hossen")
//       this.age = age;
//    }
//    greet() {
//       console.log("hello");
//    }
//    greetTwice() {
//       super.greet(); // super direct Parent class access
//       this.greet();
//    }
// }

// let details = new Details(30);
// details.greet();
// details.greetTwice();

// ---------------------------------- Inheritencce  & Prototypes----------------------------------
// class Person {
//    constructor(name) {
//       this.name = name;
//    }
//    greet() {
//       console.log("Hello My name is " + this.name + " and i am " + this.age);
//    }
// }

// class Details extends Person {
//    constructor(age) {
//       super("Nazmul Hossen")
//       this.age = age;
//    }
//    greet() {
//       console.log("hello");
//    }
//    greetTwice() {
//       super.greet(); // super direct Parent class access
//       this.greet();
//    }
// }

// let details = new Details(30);
// console.log(details.__proto__);
// console.log(details.__proto__ === Person.prototype ) //false
// console.log(details.__proto__ === Details.prototype); // true

// ---------------------------------- static Method----------------------------------
// class Helper{
//    static logTwice(message) {
//       console.log(message)
//       console.log(message)
//    };
// }
// // let helper = new Helper();
// Helper.logTwice("login");

// class Person{
//    constructor(name) {
//       this.name = name;
//    }
//    greet() {
//       console.log("Hello, My name is " + this.name + ". I am " + this.age);
//    }
// }

// class Details extends Person {
//    constructor(age) {
//       super("Namul Hossen");
//       this.age = age;
//    }
// }

// let details = new Details(30);
// details.greet();

// ---------------------------------- Classes & Modules ----------------------------------
// export class Helper {
//    static logTwice(message) {
//       console.log(message);
//       console.log(message);
//    }
// }
// // let helper = new Helper();
// Helper.logTwice("login");

// ---------------------------------- Getters & Setters ----------------------------------
// class Person{
//    constructor(name) {
//       this._name = name;
//    }
   // get name() {
   //    return this._name.toUpperCase();
   // }

//    set name(value) {
//       if (value.length > 2) {
//           this._name = value;
//       } else {
//          console.log("Rejected");
//       }
//    }
// }

// let person = new Person("Nazmul Hossen");
// // console.log(person);
// console.log(person._name);
// person.name = 'anna'
// console.log(person._name);

// ---------------------------------- Extending Built-in-Object ----------------------------------
class ConvertableArray extends Array {
   convert() {
      let returnArray = [];
      this.forEach(value => returnArray.push("convert-" + value));
      return returnArray;
   }
}

let numbers = new ConvertableArray();
numbers.push(1);
numbers.push(12);
numbers.push(13);

console.log(numbers.convert);
