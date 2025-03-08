let boostfromServer;
let messageFromServer;
let cooldownfromServ;
async function randomEventGen(){
    const response = await fetch("https://moneysimworker.coolreybansal.workers.dev/balanceInfo/randomEvent", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include"
    });

    if(!response.ok) throw new Error(`an error occured from randomEventGen! ${response.status}`);

    const serverReply = await response.json();

    boostfromServer = serverReply.boosts;
    messageFromServer = serverReply.message;
    cooldownfromServ = serverReply.cooldown;
    console.log(serverReply);//remove after production
    console.log(boostfromServer); //delete after production
    console.log(cooldownfromServ);
}

setInterval(randomEventGen, 10000); //edit later!!