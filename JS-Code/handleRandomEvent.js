let boostfromServer;
let messageFromServer;
async function randomEventGen(){
    const response = await fetch("https://moneysimworker.coolreybansal.workers.dev/balanceInfo/randomEvent", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include"
    });

    if(!response.ok) throw new Error(`an error occured from randomEventGen! ${response.staus}`);

    const serverReply = await response.json();

    boostfromServer = serverReply.boosts;
    messageFromServer = serverReply.message;
    console.log(boostfromServer); //delete after production
}

setInterval(randomEventGen, 5000);