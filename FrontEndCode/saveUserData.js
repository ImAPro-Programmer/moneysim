function saveNotify(msg) {
    const container = document.getElementById('notification-container');
    const box = document.createElement('div');
    box.className = 'save-notification';
    box.textContent = msg;
  
    container.appendChild(box);
  
    setTimeout(() => {
      box.remove();
    }, 5000); // matches the fadeOut timing
  }

const save = new Audio('./misc-stuff/save_soundeffect.mp3');
save.volume = 0.3;

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
                saveBal: balanceFromDB,
            })
        });

        // Now you can safely check the response status
        if (!request.ok) {
            console.log("WE FOUND AN ERROR");
            throw new Error(request.status);  // Throws an error with the status code
        }

        const gotResponse = await request.json();  // Await to parse the response
        //console.log(gotResponse);
        saveNotify("Data saved successfully! ✅");
        save.play();
    } catch (errorFromSend) {
        console.error(`We found an error! ${errorFromSend.message}`);
    }
}

function saveAllDataBeforeUnload() {
    const data = {
        userToFind: finalUsernameToUse,
        saveBal: balanceFromDB
    };

    const blob = new Blob([JSON.stringify(data)], { type: "application/json" });

    const success = navigator.sendBeacon(
        "https://moneysimworker.coolreybansal.workers.dev/user/saveData",
        blob
    );

    if (!success) {
        console.warn("sendBeacon failed to send data.");
    }
}

window.addEventListener("beforeunload", saveAllDataBeforeUnload);

/*window.addEventListener('beforeunload', function(event) {
    // Code to execute before the window is closed
    alert("window closing!");
    console.log("Window is about to be closed!");
    saveAllData(); // Call your save function before the window is closed
});*/

/*ocument.getElementById("testSave").addEventListener("click", function(){
    saveAllData();
});*/

setInterval(saveAllData, 60000);