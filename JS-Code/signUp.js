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
    if(!serverResponse.message == "user already exists!"){
        loginScreen.style.display = "none";
        newUserEvent.textContent = `New account created! username: ${getSignUpUser} and your password is: ${getSignUpPass}!`;
        displayMainContent();
        console.debug("debug for signup");
    }else{
        alert("User already exists! Please login! (or mabye something not working interally which, knowing me is probably the issue lol");
        console.error("User already exists!");
    }
})