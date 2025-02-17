let getSignUpUser = "";
let getSignUpPass = "";
let newUserDialog = document.getElementById("newUserEvent");
let loginScreen = document.querySelector(".signUpMenu");
document.getElementById("signUpButton").addEventListener("click", async function(){
    getSignUpUser = document.getElementById("userSignUp").value;
    getSignUpPass = document.getElementById("passSignUp").value;
    console.log(getSignUpUser);
    console.log(getSignUpPass);
    await signUpToDB();
    displayMainContent();
    loginScreen.style.display = "none";
    newUserEvent.textContent = `New account created! username: ${getSignUpUser} and your password is: ${getSignUpPass}!`;
    console.log("debug for signup");
})