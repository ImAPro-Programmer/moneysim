let getSignUpUser = "";
let getSignUpPass = "";
let newUserDialog = document.getElementById("newUserEvent");
let loginScreen = document.querySelector(".signUpMenu");
let finalUsernameToUse;
document.getElementById("signUpButton").addEventListener("click", async function(){
    getSignUpUser = document.getElementById("userSignUp").value;
    getSignUpPass = document.getElementById("passSignUp").value;
    await signUpToDB();
    if(serverResponse.success == true){
        loginScreen.style.display = "none";
        displayMainContent();
        console.debug("debug for signup");
        newUserEvent.textContent = `New account created! username: ${getSignUpUser} and your password is: ${getSignUpPass}!`;
        setTimeout(()=>{
            newUserDialog.remove();
        }, 5000)
        finalUsernameToUse = getSignUpUser;
    }else if(serverResponse.success == false){
        alert("User already exists! Please login! (or mabye something not working interally which, knowing me is probably the issue lol");
        console.error("User already exists!");
    }
});