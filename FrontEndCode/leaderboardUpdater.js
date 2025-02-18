let top5results;
async function updateLeaderboard(){
    try{
        const serverResponse = await fetch("https://moneysimworker.coolreybansal.workers.dev/updateLeaderboard");
    
        const serverInfo = await serverResponse.json();

        if(!serverResponse.ok){
            console.error("Unfortunately an error occured.");
            console.error(serverInfo);
            throw new Error(response.status);
        }else{
            console.log(serverInfo);
            top5results = serverInfo.receivedValues;
            console.log(serverInfo.receivedValues.results[0].username);
        }
    }catch(serverError){
        console.error("whoops! an error occured!", serverError.message);
    }
}

updateLeaderboard();