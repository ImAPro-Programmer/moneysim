let investmentState;
let userBalFromServer;
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
    }else if(checkIfProfitOrLoss <= 0){
        loss.play(); //play windows error sound
    }
    
    console.log("cooldown is " + coolDownState);
    

    if(result.handleInvestmentFunc.balance != undefined || result.handleInvestmentFunc.balance > 0){

        const userBalEl = document.getElementById("userBal");
        if (userBalEl) {
            const balanceText = userBalEl.textContent;
            const balanceValue = Number(balanceText.split(": ")[1]?.trim());
            const newBalance = balanceValue + result.handleInvestmentFunc.balance;
            console.log("New Balance:", newBalance);
        } else {
            console.error("Element with ID 'userBal' not found.");
        }


        console.log("balance from serv:" + result.handleInvestmentFunc.balance);
        document.getElementById("userBal").textContent = `Balance: ${newBalance}`; // Update the balance on the page
        //store the balance in a variable for later use
        userBalFromServer = result.handleInvestmentFunc.balance;
        balanceFromDB = result.handleInvestmentFunc.balance; // Update the global variable
    }
}


