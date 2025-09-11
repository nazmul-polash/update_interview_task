// ------------------------------ Iterator Basic ------------------------------
// let array = [1, 2, 3];
// // console.log( typeof array[Symbol.iterator]);
// let it = array[Symbol.iterator]();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// ------------------------------ Iterator in Action ------------------------------
// let array = [1, 2, 3];
// array[Symbol.iterator] = function () {
//    let nextValue = 10;
//    return {
//       next: function () {
//          nextValue++;
//          return {
//             done: nextValue > 15 ? true: false,
//             value: nextValue,
//          }
//       }
//    }
// }
// for (let element of array) {
//    console.log(element);
// }

// let it = array[Symbol.iterator]();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// ------------------------------ Creating a Custom, Iterateable Objects ------------------------------
// let person = {
//    name: "nazmul",
//    hobbies: ['codeing', 'reading', 'traveling'],
//    [Symbol.iterator]: function () {
//       let i = 0;
//       let hobbies = this.hobbies;
//       return {
//          next: function () {
//             let value = hobbies[i];
//             i++;
//             return {
//                done: i > hobbies.length ? true: false,
//                value: value
//             }
//          }
//       }
//    }
// }
// for (let x of person) {
//    console.log(x);
// }

// ------------------------------ Generators Basic ------------------------------
// function* select() {
//    yield "Hello";
//    yield "Namzul";
//    yield "Hossen";
// }
// let x = select();
// console.log(x.next());
// console.log(x.next());
// console.log(x.next());
// console.log(x.next());
// console.log(x.next());


// ------------------------------ Generators in Actions ------------------------------
// let obj = {
//    [Symbol.iterator] : gen
// }

// function *gen() {
//    yield 1;
//    yield 2;
//    yield 3;
// }
// for (let x of gen()) {
//    console.log(x);
// }
// function* generate(end) {
//    for (let i = 0; i < end; i++){
//       yield i;
//    }
// }
// let g = generate(3);
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());



// ------------------------------ Controlling Iterators with throw and return ------------------------------
// function* generate(end) {
//    for (let i = 0; i < end; i++){
//       try {
//          yield i;
//       } catch (e) {
//          console.log(e);
         
//       }
//    }
// }
// let g = generate(3);
// console.log(g.next());
// console.log(g.throw("an error"));
// console.log(g.return("return return"));
// console.log(g.next());
// console.log(g.next());

// ------------------------------ Controlling Iterators with throw and return ------------------------------
// function* generate(end) {
//    for (let i = 0; i < end; i++){
//       try {
//          yield i;
//       } catch (e) {
//          console.log(e);
         
//       }
//    }
// } 
// let g = generate(3);
// console.log(g.next());
// console.log(g.throw("an error"));
// console.log(g.return("return return"));
// console.log(g.next());
// console.log(g.next());
