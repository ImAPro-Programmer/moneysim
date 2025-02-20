async function saveAllData() {
    try {
        // Await the fetch call to ensure the response is ready
        const request = await fetch("https://moneysimworker.coolreybansal.workers.dev/user/saveData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                userToFind: finalUsernameToUse,
                saveBal: userBal
            })
        });

        // Now you can safely check the response status
        if (!request.ok) {
            console.log("WE FOUND AN ERROR");
            throw new Error(request.status);  // Throws an error with the status code
        }

        const gotResponse = await request.json();  // Await to parse the response
        console.log(gotResponse);
    } catch (errorFromSend) {
        console.error(`We found an error! ${errorFromSend.message}`);
    }
}

window.addEventListener('beforeunload', function(event) {
    // Code to execute before the window is closed
    alert("window closing!");
    console.log("Window is about to be closed!");
    saveAllData(); // Call your save function before the window is closed
});

document.getElementById("testSave").addEventListener("click", function(){
    saveAllData();
});

setInterval(saveAllData, 60000);