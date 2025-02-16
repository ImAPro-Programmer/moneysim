let getSignUpUser = "";
let getSignUpPass = "";
let newUserDialog = document.getElementById("newUserEvent");
document.getElementById("signUpButton").addEventListener("click", function(){
    getSignUpUser = document.getElementById("userSignUp").value;
    getSignUpPass = document.getElementById("passSignUp").value;
    console.log(getSignUpUser);
    console.log(getSignUpPass);
    signUpToDB()
    displayMainContent();
    newUserEvent.style.textContent = `New account created! username: ${getSignUpUser} and your password is: ${getSignUpPass}!`;
})