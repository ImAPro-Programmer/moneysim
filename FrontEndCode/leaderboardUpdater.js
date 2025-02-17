let top5results;
async function updateLeaderboard(){
    try{
        const serverResponse = await fetch("https://moneysimworker.coolreybansal.workers.dev/updateLeaderboard", {
            method: "GET"
        });
    
        if(!serverResponse.ok){
            console.error("Unfortunately an error occured.");
            throw new Error(response.status);
        }
        const serverInfo = await serverResponse.json();
        console.log(serverInfo);
        top5results = serverInfo.receivedValues;
        console.log(serverInfo.receivedValues);
    }catch(serverError){
        console.error("whoops! an error occured!", serverError.message);
    }
}

updateLeaderboard();