
console.log("debugging purposes: " + userBal); // Debugging output to check userBal
let getResponse;
let grabNewUserEvent = document.getElementById("newUserEvent");
let usernameFromDB;
let passwordfromDB;
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

async function loginToDB() {
    try {
        const response = await fetch("https://moneysimworker.coolreybansal.workers.dev/user/login", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            }) // Properly formatting JSON body
        });

        if (!response.ok) throw new Error(`Error ${response.status}`);

        getResponse = await response.json(); // Await response from server
        console.log(getResponse);
        console.log("Server:", getResponse.message);
        console.log("Server:", getResponse.password);
        console.log("Server: ", getResponse.username)
        usernameFromDB = getResponse.username;
        passwordfromDB = getResponse.password;
    } catch (errorFromServer) {
        console.error("Caught an error:", errorFromServer.message);
    }

}

async function signUpToDB() {
    try{
        const response = await fetch("https://moneysimworker.coolreybansal.workers.dev/user/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                addUser: getSignUpUser,
                addPass: getSignUpPass
            })
        });

        if(!response.ok) throw new Error(`Error ${response.status}`);

        serverResponse = await response.json();
        console.log(serverResponse);
        
    }
}

makeRequest(); // Execute the function