// ---------------------------------- Maps - Creations and Addin Items ----------------------------------
// let cardAce = {
//    name: "Ace of Spades"
// }

// let cardKing = {
//    name: "King of Clubs"
// }

// let deck = new Map();
// deck.set('ac', cardAce);
// deck.set('kc', cardKing);

// ---------------------------------- Maps - Managing Items ----------------------------------
// let cardAce = {
//    name: "Ace of Spades"
// }

// let cardKing = {
//    name: "King of Clubs"
// }

// let deck = new Map();
// deck.set('as', cardAce);
// deck.set('kc', cardKing);

// deck.delete('kc');
// deck.clear();
// console.log(deck.size);
// console.log(deck.get('as'))
// deck.set('as', cardAce);
// console.log(deck.size);

// ---------------------------------- Maps - Looping Through Maps ----------------------------------
// let cardAce = {
//    name: "Ace of Spades"
// }

// let cardKing = {
//    name: "King of Clubs"
// }

// let deck = new Map();
// deck.set('as', cardAce);
// deck.set('kc', cardKing);

// // console.log(deck.keys())
// for (key of deck.keys()) {
//    console.log(key);
// }
// for (value of deck.values()) {
//    console.log(value);
// }
// for (entry of deck.entries()) {
//    console.log(entry);
// }
// for (entry of deck) {
//    console.log(entry);
// }


// ---------------------------------- Maps - Warp Up ----------------------------------


// ---------------------------------- Maps - Weak Map ----------------------------------
// let cardAce = {
//    name: "Ace of Spades"
// }

// let cardKing = {
//    name: "King of Clubs"
// }
// let key1 = { a: 1 };
// let key2 = { b: 2 };

// let deck = new WeakMap();
// deck.set(key1, cardAce);
// deck.set(key2, cardKing);
// console.log(deck.get(key1));
// console.log(deck.get(key2));

// ---------------------------------- Sets - Creations and Addin Items ----------------------------------
// set a list of values not key value
// let set = new Set([1, 1, 1]);
// set.add(2);
// set.add(2);
// set.add(3);
// for (element of set) {
//    console.log(element);
// }

// ---------------------------------- Sets - Managing Items ----------------------------------
// let set = new Set([1, 1, 1]);
// set.add(2);
// set.add(2);
// set.add(3);
// set.delete(3);
// set.clear();
// console.log(set.has(2));

// for (element of set) {
//    console.log(element);
// }

// ---------------------------------- Sets - Loopiing Though Sets ----------------------------------
// let set = new Set([1, 1, 1]);
// set.add(2);
// set.add("num1");
// set.add("num2");
// console.log(set.has(2));

// for (element of set.entries()) {
//    console.log(element);
// }
// for (element of set.keys()) {
//    console.log(element);
// }
// for (element of set.values()) {
//    console.log(element);
// }

// ---------------------------------- Sets - Wrap Up ----------------------------------
// let set = new Set([1, 1, 1]);
// set.add(2);
// for (element of set) {
//    console.log(element);
// }


// ---------------------------------- Sets - The WeakSet ----------------------------------

// let set = new WeakSet([{ a: 1 }, { b: 2 }, { b: 2 }]);
let obj1 = { a: 1 };
let obj2 = { b: 2 };
let obj3 = { b: 2 };
let set = new WeakSet([obj1, obj2, obj3]);

set.delete(obj2)
console.log(set.has(obj3));
set.add(obj1)








