let getSignUpUser = document.getElementById("userSignUp").value;
let getSignUpPass = document.getElementById("passSignUp").value;
let newUserDialog = document.getElementById("newUserEvent");
document.getElementById("signUpButton").addEventListener("click", function(){
    console.log(getSignUpUser);
    console.log(getSignUpPass);
    signUpToDB()
    displayMainContent();
    newUserEvent.style.textContent = `New account created! username: ${getSignUpUser} and your password is: ${getSignUpPass}!`;
})