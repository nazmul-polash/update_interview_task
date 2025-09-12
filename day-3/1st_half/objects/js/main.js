// ---------------------------------- Objects Basics ----------------------------------
// let radiou = 1;
// let x = 1;
// let y = 1;
// let circle = {
//    radiou: 1,
//    location: {
//       x: 1,
//       y:1,
//    },
//    isVisible: true,
//    draw: function () {
//       console.log("drow the circle");
//    }
// }
// circle.draw(); // method

// ---------------------------------- Factory Functions ----------------------------------
// function createCircle(radius) {
//    return {
//       radius,
//       // draw: function () {
//       //    console.log("Draw the circle");
//       // }
//       draw() {
//          console.log("Draw the circle.");
//       }
//    }
// }
// const circle1 = createCircle(1);
// console.log(circle1);
// const circle2 = createCircle(2);
// console.log(circle2);

// ---------------------------------- Constructor Functions ----------------------------------
// function createCircle(radius) {
//    return {
//       radius,
//       draw() {
//          console.log("draw the circle");
//       },
//    };
// }
// const circle1 = createCircle(1);
// console.log(circle1);

// // constractor function
// function Create(radius) {
//    this.radius = radius;
//    this.draw = function () {
//       console.log("Draw the constractor function circle ");
//    };
// }
// const circle2 = new Create(1);
// console.log(circle2);

// ---------------------------------- Dynamic Nature of Objects ----------------------------------
// const circle = {
//    radius: 1
// }
// circle.color = "Yellow";
// circle.draw = function () { };
// delete circle.color;
// console.log(circle);

// ---------------------------------- Constructor Property ----------------------------------
// function createCircle(radius) {
//    return {
//       radius,
//       draw: function () {
//          console.log("draw the ");
//       }
//    }
// }
// const circle = createCircle(1);
// console.log(circle);

// function Create(radius) {
//    this.radius = radius;
//    this.draw = function () {
//       console.log("Draw the function ");
//    }
// }
// const another = new Create(1);
// console.log(another);

// ---------------------------------- Functions are objects ----------------------------------
// function Circle(radius) {
//    this.radius = radius;
//    this.draw = function () {
//       console.log("draw");
//    }
// }
// const Circle1 = new Function('radius', `
//    this.radius = radius;
//    this.draw = function () {
//       console.log("draw");
//    }
//    `);
// const circle = new Circle1(1);
// Circle.call({}, 1);
// Circle.apply({}, [1, 2, 3]);
// const another = new Circle(1);

// ---------------------------------- Value vs Reference Types ----------------------------------
// let x = 10;
// let y = x;
// x = 20;
// let x = { value: 10 };
// let y = x;
// x.value = 20;

// let obj = { value: 10 };
// function increase(obj) {
//    obj.value++;
// }
// increase(obj);
// console.log(obj);

// ---------------------------------- Enumerating Properties of an Object  ----------------------------------
// const circle = {
//    radius: 1,
//    draw() {
//       console.log("draw");
//    }
// }

// for (let key in circle) {
//    // console.log(key);
//    console.log(key, circle[key]);
// }
// for (let key of Object.keys(circle))
//    console.log(key);
// for(let entry of Object.entries(circle))
//    console.log(entry);
// if("radius" in circle) console.log("yes");

// ---------------------------------- Cloning an Object  ----------------------------------
// const circle = {
//    radius: 1,
//    draw() {
//       console.log("draw");
//    }
// }
// const another = {};
// for (let key in circle)
//    another[key] = circle[key];
// const another = Object.assign({}, circle)
// const another = {...circle}
// console.log(another);

// ---------------------------------- Garbage Collector  ----------------------------------
// let circle = {};
// console.log(circle);

// ---------------------------------- Math ----------------------------------
// console.log(Math.max(1, 2, 4, 5));
// console.log(Math.min(1, 2, 4, 5));
// console.log(Math.round(5.621231));

// ---------------------------------- String ----------------------------------
// const message = "This is \'my\' first string";
// console.log(message.indexOf('is'));
// console.log(message.includes('is')); //check string
// console.log(message.replace(' is', " the"));
// console.log(message.toUpperCase());
// console.log(message.trim());
// console.log(message.split());

// ---------------------------------- Templete literals ----------------------------------
// boject { }
// boolean true or false
// string '' ""
// templete ``
// const msg = `My name is ${name}  ${2 + 3}`;
// console.log(msg);

// ---------------------------------- Date ----------------------------------
// const now = new Date();
// const date1 = new Date('september 2025');







// ---------------------------------- Exercise ----------------------------------
// let address = {
//    street: "Uttara",
//    city: "Dhaka",
//    zipCode: 1200,
// };

// function ShowAddress(address) {
//    for (let key in address) {
//       console.log(key, address[key]);
//    }
// }
// ShowAddress(address);

// ---------------------------------- Exercise-2 Factory and Constractor Function ----------------------------------
let address = {
   street: "Uttara",
   city: "Dhaka",
   zipCode: 1200,
};
// Factory Function
function newAddress(street, city, zipCode) {
   return {
      street,
      city,
      zipCode,
   };
}
const newAdd = newAddress("a", "b", "c");
console.log(newAdd);

// constructor function
function CreaeNewAddress(street, city, zipCode) {
   this.street = street;
   this.city = city;
   this.zipCode = zipCode;
}
const createNew = new CreaeNewAddress("aa", "bb", "cc");
console.log(createNew);

// ---------------------------------- Exercise-3 Object Equality ----------------------------------
let address1 = new Addr("a", "b", "c");
let address2 = new Addr("a", "b", "c");

function Addr(a, b, c) {
   this.a = a;
   this.b = b;
   this.c = c;
}

function areEqual(address1, address2) {
   return (
      address1.a === address2.a &&
      address1.b === address2.b &&
      address1.c === address2.c
   );
}
console.log(areEqual(address1, address2));

function areSame(address1, address2) {
   return address1 === address2;
}
console.log(areSame(address1, address2));

// ---------------------------------- Exercise-4 Blog Post Objects ----------------------------------
const blogPost = {
   title: "aa",
   body: "bb",
   author: "cc",
   view: 22,
   comment: [
      {
         author: "dd",
         body: "ee",
      },
      {
         author: "ff",
         body: "gg",
      },
   ],
   isLive: true,
};
console.log(blogPost);

function CreateBlogPost(title, body, author) {
   this.title = title;
   this.body = body;
   this.author = author;
   this.view = 0;
   this.comment = [];
   this.isLive = false;
}

const create = new CreateBlogPost("blogPost", "body text", "Nazmul Hossen");
console.log(create);

// ---------------------------------- Exercise-5 Constructor Functions ----------------------------------
let post = {
   title: 'a',
   body: 'b',
   author: 'c',
   view: 22,
   comment: [
      {
         author: 'a',
         body: 'b'
      },
      {
         author: 'c',
         body: 'd'
      },
   ],
   isLive: true,
};
function Post(title, body, author) {
   this.title     = title;
   this.body      = body;
   this.author    = author;
   this.view      = 0;
   this.comment   = [];
   this.isLive    = false;
}

const p = new Post("blogPost", "body text", "Nazmul Hossen");
console.log(p);


// ---------------------------------- Exercise-6 Constructor Functions ----------------------------------
let priceRange = [
   {label:'$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson:10},
   {label:'$', tooltip: 'Inexpensive', minPerPerson: 11, maxPerPerson:20},
   {label:'$', tooltip: 'Inexpensive', minPerPerson: 21, maxPerPerson:30},
]
let restaurants = [
   {averagePerPerson: 5}
]  