const usernameInput = document.querySelector(".username");
const btnCheck = document.querySelector(".check-username");

btnCheck.addEventListener("click", function () {
   const username = usernameInput.value;
   const allUsers = ['aa', 'bb', 'cc', 'dd'];
   // console.log(allUsers);
   
   
   if (username.length === 0) {
      alert('Please enter username');
      return;
   }

   if (allUsers.includes(username)) {
      alert('This user is already taken.');
   } else {
      alert('User is Available');
   }

   usernameInput.addEventListener("change", function () {
      alert('User name will be changed');
   })

   usernameInput.addEventListener("input", function () {
      alert('You provide a input.');
   })

   usernameInput.addEventListener("blur", function () {
      alert('your input is blurred.');
   })

})