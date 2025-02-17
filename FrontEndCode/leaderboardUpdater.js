let top5results;
async function updateLeaderboard(){
    try{
        const response = await fetch("https://moneysimworker.coolreybansal.workers.dev/updateLeaderboard", {
            method: "GET"
        });
    
        if(!response.ok){
            console.error("Unfortunately an error occured.");
            throw new Error(response.status);
        }
        const serverInfo = await response.json();
        console.log(serverInfo);
        top5results = serverInfo.receivedValues;
        console.log(serverInfo.receivedValues);
    }catch(serverError){
        console.error("whoops! an error occured!", serverError.message);
    }
}

updateLeaderboard();