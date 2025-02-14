let options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        userBalance: userBal
    })
}
console.log("debugging purposes: " + userBal);
async function makeRequest(){
    try{
        const response = await fetch("https://moneysimworker.coolreybansal.workers.dev/", options);
        if(!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        console.log("Data: " + data);
    } catch(error){
        console.error("Error found: " + error.message)
    }
}
makeRequest();