async function saveAllData(){
    try{
        const request = fetch("https://moneysimworker.coolreybansal.workers.dev/user/saveData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userToFind: getSignUpUser,
                saveBal: userBal
            })
        });

        if(!request.ok){
            console.log("WE FOUND AN ERROR");
            throw new Error(request.status);
        }

        const gotResponse = await request.json();
        console.log(gotResponse);
    }catch(errorFromSend){
        console.error(`We found an error! ${errorFromSend.message}`);
    }
}

window.addEventListener('beforeunload', function(event) {
    // Code to execute before the window is closed
    alert("window closing!");
    console.log("Window is about to be closed!");
    saveAllData();
});
