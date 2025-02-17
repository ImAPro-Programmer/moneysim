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
document.getElementById("loginButton").addEventListener("click", async function () {
    console.log("debugg");
    username = document.getElementById("userLogin").value;
    password = document.getElementById("userPass").value;
    console.log("Username:", username);
    console.log("Password:", password);
    await loginToDB();

    console.log("checking credentials");
    if(username == usernameFromDB && password == passwordfromDB){
        console.log("Logged in!");
        displayMainContent();
        newUserDialog.textContent = `Logged in! Hello ${usernameFromDB}!`;
        userBal = balanceFromDB;
        writeUserBal(userBal);
        setTimeout(()=>{
            newUserDialog.remove();
        }, 5000);
        console.log("checkpoint 1");
        console.log(balanceFromDB);
    }else{
        console.log("Invalid username or password!");
        alert("Invalid username or password! (could be an interal error too, idk man)");
    }
});