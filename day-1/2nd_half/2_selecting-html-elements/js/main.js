// const colorList = document.getElementById('colors');
// console.log(colorList);

// =======================================================================================
//querySelector() -getting an HTML element using a css selector

// const colorList = document.querySelector("#colors");
// const colorList = document.querySelector("ul");
// const colorList = document.querySelector(".primary");

// console.log(colorList);

// =======================================================================================
// querySelectorAll() -getting multiple html element using a css selector

// const colors = document.querySelectorAll("li");
// const colors = document.querySelectorAll("#cars li")

// const colorList = document.getElementById("colors")
// const colors = colorList.querySelectorAll("li")

const colorList = document.getElementById("cars")
const colors = colorList.querySelectorAll("li")

// const colors = document.querySelectorAll(".primary")

console.log(colors);