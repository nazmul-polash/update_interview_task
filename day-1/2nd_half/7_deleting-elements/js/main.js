// removeChild - delete element form the parent 

// const skillsList = document.querySelector(".skills");
// const css = skillsList.querySelector("li:nth-of-type(2)");

// console.log(css);
// skillsList.removeChild(css); 

//if habe no child while loop stop...
// while (skillsList.lastChild) {
//    skillsList.removeChild(skillsList.lastChild);
// }

// ========================================================================

const css = document.querySelector(".skills li:nth-of-type(2)");
css.remove();