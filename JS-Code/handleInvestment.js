let investmentState;
let userBalFromServer;
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

    investmentState = result.investmentState;
    userBalFromServer = result.balance;
    console.log(`userbal from server is ${userBalFromServer}`);

    if(investmentState == "true"){
        writeUserBal(userBalFromServer);
    }else if(investmentState == "false"){
        console.log("currently on cooldown!");
    }

    console.log(result.cooldownStatus);
}


