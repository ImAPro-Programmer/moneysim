let checkUser = "testUser";
let checkPass = "password";
let username = "";
let password = "";
let settingButton = document.getElementById("setting");
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


function loginNoti(msg, success) {
    if(success === true){
           const container = document.getElementById('notification-container');
            const box = document.createElement('div');
            box.className = 'login-notification';
            box.textContent = msg;
        
            container.appendChild(box);
        
            setTimeout(() => {
            box.remove();
            }, 5000); // matches the fadeOut timing
    }else{
           const container = document.getElementById('notification-container');
            const box = document.createElement('div');
            box.className = 'failed-login';
            box.textContent = msg;
        
            container.appendChild(box);
        
            setTimeout(() => {
            box.remove();
            }, 5000); // matches the fadeOut timing
    }
}

const loginError = new Audio('./misc-stuff/login_error.mp3'); // Adjusted the path to be relative to the current file

document.getElementById("loginButton").addEventListener("click", async function () {
    console.log("debugg");
    username = document.getElementById("userLogin").value;
    password = document.getElementById("userPass").value;
    await loginToDB();

    console.log("checking credentials");
    if(getResponse.success == true){
        await retrieveBalance();
        console.log("Logged in!");
        displayMainContent();
        newUserDialog.textContent = `Logged in! Hello ${usernameFromDB}!`;
        loginNoti(`Logged in! Hello ${usernameFromDB}! 👋`, true);
        settingButton.style.display = "block"; // Show the settings button
        randomEventGen();
        userBal = balanceFromDB;
        writeUserBal(userBal);
        setTimeout(()=>{
            newUserDialog.remove();
        }, 5000);
        finalUsernameToUse = usernameFromDB;
        setInterval(randomEventGen, 60000); //edit later!!
    }else{
        console.log("Invalid username or password!");
        loginNoti(`Login Failed!`, false);
        loginError.play(); // Play the login error sound
    }
});