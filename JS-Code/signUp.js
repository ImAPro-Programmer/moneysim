let getSignUpUser = document.getElementById("userSignUp");
let getSignUpPass = document.getElementById("passSignUp");
let newUserDialog = document.getElementById("newUserEvent");
document.getElementById("signUpButton").addEventListener("click", function(){
    signUpToDB()
    displayMainContent();
    newUserEvent.style.textContent = `New account created! username: ${getSignUpUser} and your password is: ${getSignUpPass}!`;
})