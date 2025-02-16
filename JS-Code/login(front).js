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
    let setLoginMenu = document.querySelector(".loginMenu")''
    let makeAccMenu = document.querySelector(".signUpMenu");
    makeAccMenu.style.display = "flex";
    setLoginMenu.style.display = "none";

});
document.getElementById("loginButton").addEventListener("click", function () {
    console.log("debugg");
    username = document.getElementById("userLogin").value;
    password = document.getElementById("userPass").value;

    if (/^\d+$/.test(username)) {
        alert("INVALID USERNAME, ONLY CHARACTERS ALLOWED");
        return; // Stop further execution
    }

    console.log("Username:", username);
    console.log("Password:", password);

    
});