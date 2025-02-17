let top5results;
async function updateLeaderboard(){
    try{
        const response = await fetch("https://moneysimworker.coolreybansal.workers.dev/updateLeaderboard", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
    
        if(!response.ok){
            console.error("Unfortunately an error occured.")
            throw new Error(response.status);
        }
        const serverInfo = await response.json();
        console.log(serverInfo);
        top5results = serverInfo.top5;
        console.log(serverInfo.top5);
    }catch(serverError){
        console.error("whoops! an error occured!", serverError.message);
    }
}

updateLeaderboard();