
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
        const response = await fetch("https://moneysimworker.coolreybansal.workers.dev/user/create", {
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
        console.log("Server:", getResponse.dbUser);
        console.log("Server:", getResponse.dbPass);
        console.log("Server:", getResponse.success);
        if(getResponse.success == true){
            if(username == )
            displayMainContent();
            grabNewUserEvent.textContent = `Created new login! ${username} is your username and ${password} is your password!`;
        }
    } catch (errorFromServer) {
        console.error("Caught an error:", errorFromServer.message);
    }
}


makeRequest(); // Execute the function