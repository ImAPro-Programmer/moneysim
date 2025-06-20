async function retrieveBalance(){
    const response = await fetch('https://moneysimworker.coolreybansal.workers.dev/startup/getBalance', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
            username: usernameFromDB 
        }),
    });

    if(!response.ok) throw new Error('Error from retrieving balance!' + response.status);
    const data = await response.json();
    document.getElementById("userBal").textContent = `Balance: ${data.balance}`;
    return data.balance;
};