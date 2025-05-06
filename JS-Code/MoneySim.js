var userBal = 10000;
console.log("checkpoint 2");
var increaseIncri = 0;
var getUserBal = document.getElementById("userBal");
var countdown = 60;
var backButton = document.querySelectorAll(".back");
var investCooldown = 0;
var increaseSavingsIdentifier = false;
var writeSavingsAccount = document.getElementById("savingsDialong");
var savingsBalance = 0;

var randomEvents = [
    "NVIDIA Released a new GPU",
    "Tesla released a new car!",
    "Apple released a new iPhone!",
    "NVIDIA servers got hacked!",
    "Tesla crashed millions of cars!",
    "Apple iPhone users are switching to Android!"
];

let NVIDIAboost = 0, APPLboost = 0, TSLAboost = 0;

// Object map for event handling
const eventBoosts = {
    "NVIDIA Released a new GPU": { stock: "NVIDIA", NVIDIAIncri: 15, APPLIncri: -3, TSLAIncri: -5 },
    "Tesla released a new car!": { stock: "Tesla", NVIDIAIncri: -5, APPLIncri: -3, TSLAIncri: 10 },
    "Apple released a new iPhone!": { stock: "Apple", NVIDIAIncri: -5, APPLIncri: 7, TSLAIncri: -5 },
    "NVIDIA servers got hacked!": { stock: "NVIDIA", NVIDIAIncri: -70, APPLIncri: 3, TSLAIncri: 2 },
    "Tesla crashed millions of cars!": { stock: "Tesla", NVIDIAIncri: 3, APPLIncri: 1, TSLAIncri: -65 },
    "Apple iPhone users are switching to Android!": { stock: "Apple", NVIDIAIncri: 3, APPLIncri: -60, TSLAIncri: 2 }
};

//----------declaring variables--------------

function overwriteSavingsText(value){
    writeSavingsAccount.textContent = "Savings Account Balance (takes a bit to update): " + value; 
};

// Write the user's balance to the page
function writeUserBal(balance) {
    getUserBal.textContent = "Balance: " + balance;
}

// Countdown function
function createCountdown() {
    if (countdown === 0) {
        countdown = 60;
    } else {
        document.getElementById("nextCountdown").textContent = countdown;
        countdown--;
    }

    setTimeout(createCountdown, 1000);
}

function increaseSavings(depositedVal) {
    overwriteSavingsText(depositVar);
    
    const setLoop = setInterval(() => {
        if (increaseSavingsIdentifier === true) {
            // Add the new deposit to the savings balance
            savingsBalance += depositedVal;  // Add the deposit amount to the total balance
            depositedVal = savingsBalance * 1.003;
            increaseIncri = Math.round(depositedVal);
            overwriteSavingsText(increaseIncri);
            console.log(depositedVal);  // Debug (can remove later)
            console.log(increaseIncri);  // Debug (can remove later)
        } else {
            clearInterval(setLoop);
        }
    }, 100 * 600);
}


//--------all functions on the top please-----------------------

// Initialize the page when DOM is fully loaded
document.addEventListener("DOMContentLoaded", createCountdown);
document.addEventListener("DOMContentLoaded", overwriteSavingsText(increaseIncri))
document.addEventListener("DOMContentLoaded", randomEventGenerator);
writeUserBal(userBal);

// Handle invest button click
document.getElementById("investButton").addEventListener("click", function () {
    console.log("clicked! (debugging)");
    document.querySelectorAll(".container button").forEach(button => button.style.display = "none"); // Hide container buttons
    document.querySelector(".investMenu").style.display = "flex"; // Show the investMenu
});

// Handle back button click
document.querySelectorAll(".back").forEach(button => {
    button.addEventListener("click", function () {
        document.querySelectorAll(".container button").forEach(btn => btn.style.display = "block"); // Show container buttons
        document.querySelector(".investMenu").style.display = "none"; // Hide the investMenu
        document.querySelector(".randomEvent").style.display = "none"; // Hide the randomEventMenu
        document.querySelector(".savingAccountDialog").style.display = "none"; // Hide the savings account menu
    });
});

// Handle random event button click
document.getElementById("newsButton").addEventListener("click", function () {
    document.querySelectorAll(".container button").forEach(button => button.style.display = "none"); // Hide container buttons
    document.querySelector(".randomEvent").style.display = "flex"; // Show the randomEvent menu
});
document.getElementById("bankDeposit").addEventListener("click", function () {
    document.querySelectorAll(".container button").forEach(button => button.style.display = "none"); // Hide container buttons
    document.querySelector(".savingAccountDialog").style.display = "flex"; // Show the randomEvent menu
});

//----------increase bank balance from investments
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("NVIDIA").addEventListener("click", function() {
        try{
            handleInvestments("NVIDIA");
        }catch(err){
            console.log(`NVIDIA: ${err}`);
        }
    });
    document.getElementById("Tesla").addEventListener("click", function(){
        handleInvestments("TESLA");
    })
    document.getElementById("APPL").addEventListener("click", function(){
        handleInvestments("APPLE");
    });
});
console.log("what were u even expecting to find here lol");

//deposit system!!!
document.getElementById("depositButton").addEventListener("click", function() {
    let depositVar = parseFloat(document.getElementById("depositDialog").value);
    if (depositVar > 0) {
        // Add the deposit to the savings balance and start the increase process
        userBal = userBal - depositVar;
        writeUserBal(userBal);
        increaseSavingsIdentifier = true;
        increaseSavings(depositVar);
        console.log(depositVar);  // Log the deposit amount for debugging
    } else {
        alert("Please enter a valid deposit amount.");
    }
});

//withdraw!!
document.getElementById("withdrawButton").addEventListener("click", function() {
    console.log("WITHDRAWING");
    increaseSavingsIdentifier = false;  // Stop the savings growth process
    userBal = userBal + increaseIncri;  // Add the earned interest to the user balance
    increaseIncri = 0;  // Reset the interest increment value
    overwriteSavingsText(increaseIncri);  // Update the displayed savings account balance
      // Update the user balance on the page
    writeUserBal();
});


/*TODO:
    TRY AND GET CLOUD DATA STORAGE (optional)]
    LOGIN SYSTEM (for users to get THEIR data)
*/