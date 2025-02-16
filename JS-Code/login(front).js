let checkUser = "testUser";
let checkPass = "password";
let username = "";
let password = "";
function displayMainContent(){
    let mainContent = document.querySelector(".mainContent");
    let loginScreen = document.querySelector(".loginMenu");
    mainContent.style.display = "block";
    loginScreen.style.display = "none";
}
document.getElementById("signUp").addEventListener("click", function() {
    console.log("clicked signup button(debugging)");
    let setLoginMenu = document.querySelector(".loginMenu");
    let makeAccMenu = document.querySelector(".signUpMenu");
    makeAccMenu.style.display = "flex";
    setLoginMenu.style.display = "none";

});
document.getElementById("switchToLogin").addEventListener("click", function() {
    console.log("clicked switchToLogin button(debugging)");
    let setLoginMenu = document.querySelector(".loginMenu");
    let makeAccMenu = document.querySelector(".signUpMenu");
    makeAccMenu.style.display = "none";
    setLoginMenu.style.display = "flex";

});
document.getElementById("loginButton").addEventListener("click", function () {
    console.log("debugg");
    username = document.getElementById("userLogin").value;
    password = document.getElementById("userPass").value;
    console.log("Username:", username);
    console.log("Password:", password);
    loginToDB();

    if(username == usernameFromDB && password == passwordfromDB){
        console.log("Logged in!");
    newUserDialog.textContent = `Logged in! Hello ${usernameFromDB}!`;
    }else{
        alert("Incorrect username or password!");
    }
});