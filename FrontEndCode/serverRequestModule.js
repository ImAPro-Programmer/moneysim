let options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        userBalance: userBal
    })
};

console.log("debugging purposes: " + userBal); // Debugging output to check userBal

async function makeRequest() {
    try {
        const response = await fetch("https://moneysimworker.coolreybansal.workers.dev/", options);

        if (!response.ok) throw new Error(`Error: ${response.status}`); // Check for successful response

        const result = await response.json(); // Parse response as JSON
        console.log("Data:", result.data.userBalance); // Log the parsed data
    } catch (error) {
        console.error("Error found:", error.message); // Handle and log any errors
    }
}
makeRequest(); // Execute the function