let boostfromServer;
let messageFromServer;
let cooldownfromServ;
let randomEventMes;


function notify(msg) {
    const container = document.getElementById('notification-container');
    const box = document.createElement('div');
    box.className = 'notification';
    box.textContent = msg;
  
    container.appendChild(box);
  
    setTimeout(() => {
      box.remove();
    }, 5000); // matches the fadeOut timing
  }  

async function randomEventGen(){
    console.log("debugging - start of randomEventGen()");
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
    randomEventMes = serverReply.eventMessage;

    //edit the event message text here
    document.getElementById("currentNewsIdentifier").textContent = randomEventMes;

    
      
      // Usage
    notify("A new event has occured, check the news!");

    console.log(serverReply);//remove after production
    console.log(boostfromServer); //delete after production
    console.log(cooldownfromServ);
}