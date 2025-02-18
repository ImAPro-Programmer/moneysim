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
            console.log(serverInfo.receivedValues.results);
            let outputUsernames;
            let overwriteLeaderboard;
            for(i = 0; i < serverInfo.receivedValues.results.length; i++){
                outputUsernames = serverInfo.receivedValues.results[i].username;
                overwriteLeaderboard = document.getElementById(`number${i + 1}`)

                console.log(outputUsernames);

                if(overwriteLeaderboard){
                    overwriteLeaderboard.textContent = outputUsernames;
                }
            }
        }
    }catch(serverError){
        console.error("whoops! an error occured!", serverError.message);
    }
}

setInterval(updateLeaderboard(), 60000)