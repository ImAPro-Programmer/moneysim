let investmentState;
let checkIfProfitOrLoss;
const profit = new Audio('./misc-stuff/cha_ching.mp3'); // Adjusted the path to be relative to the current file
const loss = new Audio('./misc-stuff/windows_error.mp3'); // Adjusted the path to be relative to the current file

//audio.play(); <- this plays the audio file (remove after testing)

//-------storage variables on the top pls---------
async function handleInvestments(stock){
    const response = await fetch("https://moneysimworker.coolreybansal.workers.dev/balanceInfo/investments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({
            stock: stock,
            username: usernameFromDB,
        })
    });

    if(!response.ok) throw new Error("An error occured during the handleInvestments request!", response.status);
    
    const result = await response.json();

    const coolDownState = result.isCooldown;

    checkIfProfitOrLoss = result.handleInvestmentFunc.investCalc;

    if(checkIfProfitOrLoss > 0){
        profit.play(); //play cha-ching sound
        flashGreen(); // Call the flashGreen function to flash the green box
    }else if(checkIfProfitOrLoss <= 0){
        loss.play(); //play windows error sound
        flashRed(); // Call the flashRed function to flash the red box
    }
    
    console.log("cooldown is " + coolDownState);
    

    if(result.handleInvestmentFunc.balance != undefined || result.handleInvestmentFunc.balance > 0){
        balanceFromDB = result.handleInvestmentFunc.balance; // Update the global variable
        document.getElementById("userBal").textContent = `Balance: ${balanceFromDB}`; // Update the displayed balance
        console.log("New bal: " + balanceFromDB)
    }
}


