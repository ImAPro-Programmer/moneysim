let investmentState;
let userBalFromServer;

const audio = new Audio('./misc-stuff/cha_ching.mp3'); // Adjusted the path to be relative to the current file

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
            stock: stock
        })
    });

    if(!response.ok) throw new Error("An error occured during the handleInvestments request!", response.status);
    
    const result = await response.json();

    const coolDownState = result.isCooldown;

    console.log("cooldown is " + coolDownState);
    

    if(result.handleInvestmentFunc.balance != undefined || result.handleInvestmentFunc.balance > 0){
        console.log("balance from serv:" + result.handleInvestmentFunc.balance);
        document.getElementById("userBal").textContent = `Balance: ${result.handleInvestmentFunc.balance}`; // Update the balance on the page
        //store the balance in a variable for later use
        userBalFromServer = result.handleInvestmentFunc.balance;
        balanceFromDB = result.handleInvestmentFunc.balance; // Update the global variable
    }
}


