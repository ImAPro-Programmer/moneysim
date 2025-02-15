
console.log("debugging purposes: " + userBal); // Debugging output to check userBal
let getResponse;
let grabNewUserEvent = document.getElementById("newUserEvent");
async function makeRequest() {
    try {
        const response = await fetch("https://moneysimworker.coolreybansal.workers.dev/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
                userBalance: userBal
            })
        });

        if (!response.ok) throw new Error(`Error: ${response.status}`); // Check for successful response

        const result = await response.json(); // Parse response as JSON
        console.log("Data:", result.data.userBalance); // Log the parsed data
    } catch (error) {
        console.error("Error found:", error.message); // Handle and log any errors
    }
}

async function addToKV() {
    try {
        const response = await fetch("https://moneysimworker.coolreybansal.workers.dev/KV", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                key: username,
                value: password
            }) // Properly formatting JSON body
        });

        if (!response.ok) throw new Error(`Error ${response.status}`);

        getResponse = await response.json(); // Await response from server
        console.log(getResponse);
        console.log("Server:", getResponse.message);
        console.log("Server:", getResponse.storedValue);
        console.log("Server:", getResponse.success);
        if(getResponse.success == false){
            displayMainContent();
            grabNewUserEvent.textContent = `Created new login! ${username} is your username and ${password} is your password!`;
        }else if(getResponse.success == true){
            displayMainContent();
            grabNewUserEvent.textContent = "Successfuly logged in!";
        }
    } catch (errorFromServer) {
        console.error("Caught an error:", errorFromServer.message);
    }
}

/*setTimeout(() =>{
    console.log("woww", getResponse);
}, 5000);*/


makeRequest(); // Execute the function