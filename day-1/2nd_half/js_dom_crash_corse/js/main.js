
//-------------------------------- selecting-html-element --------------------------------
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

// const colorList = document.getElementById("cars")
// const colors = colorList.querySelectorAll("li")

// const colors = document.querySelectorAll(".primary")

// console.log(colors);

// ------------------------------ closer-look-at-elements --------------------------------
// there are MANY properties and methods to explore once an element is selected
// const introParagraph = document.querySelector(".introduction");
// const nameInput = document.querySelector("input");

// console.dir(introParagraph);
// console.dir(nameInput);
// console.log(introParagraph.clientWidth);
// console.log(introParagraph.textContent);

// ------------------------------ getting-data-from-elements --------------------------------
// there is a lot of data available for you to read off of an HTML element
// const theName = document.querySelector(".name");

// console.log(theName.getAttribute("title"));
// console.log(theName.getAttribute("class"));
// console.log(theName.getAttribute("for")); // null

// console.log(theName.hasAttribute("title")); // true
// console.log(theName.hasAttribute("for")); // false

// ===========================================================================
// const skillsList = document.querySelector(".skills");

// console.log(skillsList.children);
// const items = skillsList.children; // adden more li
// console.log(items);
// const items = skillsList.querySelectorAll("li"); // no new li added.

// ===========================================================================

// const myList = document.querySelector(".skills");
// const css = document.querySelector(".skills li:nth-of-type(2)");
// console.log(css);
// console.log(css.parentElement.parentElement.parentElement);
// console.log(css.parentElement == myList);

// ===========================================================================
// const css = document.querySelector(".skills li:nth-of-type(2)");

// console.log(css.closest('.skills'));
// console.log(css.closest('.card'));
// console.log(css.parentElement.parentElement.parentElement);

// ===========================================================================
// const theName = document.querySelector(".name");
// console.log(theName.textContent);
// console.log(theName.textContent.trim());

// ------------------------------  updating-elements --------------------------------
// setAttribute() -change an attribute on an element
// const theName = document.querySelector(".name");
// theName.setAttribute("title", "Hi my name is Nazmul");
// theName.setAttribute("class", "name coffee")

// =======================================================================
// style -add inline css to an element
// const javascript = document.querySelector(".skills").lastElementChild;
// javascript.style.color = "orange";
// javascript.style.backgroundColor = "black"; // background-color means that backgroundColor
// javascript.style.backgroundColor = null;

// =======================================================================
// const skillsList = document.querySelector(".skills");
// skillsList.innerHTML = `
// <li>cooking</li>
// <li>coding</li>
// <li>movie</li>
// `;
// =======================================================================
// InsertAdjecentHTML -insert new html relative to a position
// const skillsList = document.querySelector(".skills");
// skillsList.insertAdjacentHTML('beforeend', `
//    <li>Looking</li>
//    `);
// skillsList.insertAdjacentHTML('afterend', `
//    <strong>This is codeing section</strong>
//    `);
// =======================================================================
// const html = document.querySelector(".skills li");
// html.textContent = "Nazmul";
// html.textContent = "<em> Nazmul";
// html.innerHTML = "<em>Nazmul"

// =======================================================================
// classlist -update the class(es) on an element
// const theName = document.querySelector(".name");
// theName.classList.add('coffee', 'barray', 'apple'); // only add a new class
// theName.className = "name coffee"; // existing class also write otherwise remove old clsass
// theName.className += " coffee";
// theName.classList.remove('name') // remove the name css class
// console.log(theName.classList.contains('name')); // true flase
// theName.classList.toggle('test');
// theName.classList.toggle('test');

// ------------------------------  creating-elements --------------------------------
// Using createElement() to create HTML elements

/*
	<div class="card">
		<div class="name" title="I am Adam Jones">Adam Jones</div>
		<ul class="skills">
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
		</ul>
	</div>
*/

// const skills = ["HTML", "CSS", "JavaScript"];
// const card = document.createElement("div");
// const nameElement = document.createElement("div");
// const skillsList = document.createElement("ul");

// card
// card.classList.add("card");
// document.body.appendChild(card);

// name
// nameElement.classList.add("name");
// nameElement.textContent = "Adam Jones";
// nameElement.setAttribute("title", "I am Nazmul Hossen");

// skills
// skillsList.classList.add("skills");

// skills list elements
// for (let skill of skills) {
// 	const skillElement = document.createElement("li");
// 	skillElement.textContent = skill;
// 	skillsList.append(skillElement);
// }

// append all to card
// card.append(nameElement, skillsList);

// ------------------------------  deleting-elements --------------------------------
// removeChild - delete element form the parent

// const skillsList = document.querySelector(".skills");
// const css = skillsList.querySelector("li:nth-of-type(2)");

// console.log(css);
// skillsList.removeChild(css);

//if habe no child while loop stop...
// while (skillsList.lastChild) {
//    skillsList.removeChild(skillsList.lastChild);
// }
// const css = document.querySelector(".skills li:nth-of-type(2)");
// css.remove();

// ------------------------------  events-1 --------------------------------
// const usernameInput = document.querySelector(".username");
// const btnCheck = document.querySelector(".check-username");

// btnCheck.addEventListener("click", function () {
//    const username = usernameInput.value;
//    const allUsers = ['aa', 'bb', 'cc', 'dd'];
//    // console.log(allUsers);
   
   
//    if (username.length === 0) {
//       alert('Please enter username');
//       return;
//    }

//    if (allUsers.includes(username)) {
//       alert('This user is already taken.');
//    } else {
//       alert('User is Available');
//    }

//    usernameInput.addEventListener("change", function () {
//       alert('User name will be changed');
//    })

//    usernameInput.addEventListener("input", function () {
//       alert('You provide a input.');
//    })

//    usernameInput.addEventListener("blur", function () {
//       alert('your input is blurred.');
//    })

// })

// ------------------------------  events-2 --------------------------------
// const btnCheck = document.querySelector(".check-username");

// btnCheck.addEventListener("click", function (e) {
// console.log(e);
// });

// ------------------------------ events-3 --------------------------------
// const signupForm = document.querySelector("form");

// signupForm.addEventListener("submit", function (e) {
//    e.preventDefault();
//    const userInput = document.querySelector(".username");

//    alert("your form is submitted, Your user name is " + userInput.value);
// })

// ------------------------------ miscellaneous-featurs-lecture-1 --------------------------------
// const theParagraph = document.querySelector("#theParagraphCon");
// theParagraph.style.backgroundColor = "#ff0000";

// ------------------------------ miscellaneous-featurs-lecture-2 --------------------------------
// let count = 0;
// setInterval(function () {
//    count++;
//    document.title = "Title update " + (count) + "times";
// }, 1000);
// document.title = "hello, My name is Nazmul";

// ------------------------------ miscellaneous-featurs-lecture-3 --------------------------------

// const clickMeButton = document.querySelector("button");
// clickMeButton.addEventListener("click", function () {
//    const message = clickMeButton.dataset.message;
//    const newMessage = clickMeButton.dataset.theMessage;
//    alert(message);
//    alert(newMessage);
// })

// ------------------------------ miscellaneous-featurs-lecture-3 --------------------------------