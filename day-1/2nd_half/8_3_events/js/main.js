const signupForm = document.querySelector("form");

signupForm.addEventListener("submit", function (e) {
   e.preventDefault();
   const userInput = document.querySelector(".username");

   alert("your form is submitted, Your user name is " + userInput.value);
})