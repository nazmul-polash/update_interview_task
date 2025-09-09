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
const theName = document.querySelector(".name");   
// theName.classList.add('coffee', 'barray', 'apple'); // only add a new class
// theName.className = "name coffee"; // existing class also write otherwise remove old clsass
// theName.className += " coffee";
// theName.classList.remove('name') // remove the name css class
// console.log(theName.classList.contains('name')); // true flase 
// theName.classList.toggle('test');
// theName.classList.toggle('test');
