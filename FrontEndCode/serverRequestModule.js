
console.log("debugging purposes: " + userBal); // Debugging output to check userBal

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
                key: "userLoginUser" }) // Properly formatting JSON body
            });

        if (!response.ok) throw new Error(`Error ${response.status}`);

        const getResponse = await response.json(); // Await response from server
        console.log("Server:", getResponse);
    } catch (errorFromServer) {
        console.error("Caught an error:", errorFromServer.message);
    }
}
makeRequest(); // Execute the function
addToKV();