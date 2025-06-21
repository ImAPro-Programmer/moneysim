var userBal = 10000;
console.log("checkpoint 2");
var increaseIncri = 0;
var getUserBal = document.getElementById("userBal");
var countdown = 60;
var backButton = document.querySelectorAll(".back");
var investCooldown = 0;
var increaseSavingsIdentifier = false;
var writeSavingsAccount = document.getElementById("savingsDialong");
var savingsBalance = 0;

var randomEvents = [
    "NVIDIA Released a new GPU",
    "Tesla released a new car!",
    "Apple released a new iPhone!",
    "NVIDIA servers got hacked!",
    "Tesla crashed millions of cars!",
    "Apple iPhone users are switching to Android!"
];

let NVIDIAboost = 0, APPLboost = 0, TSLAboost = 0;

// Object map for event handling
const eventBoosts = {
    "NVIDIA Released a new GPU": { stock: "NVIDIA", NVIDIAIncri: 15, APPLIncri: -3, TSLAIncri: -5 },
    "Tesla released a new car!": { stock: "Tesla", NVIDIAIncri: -5, APPLIncri: -3, TSLAIncri: 10 },
    "Apple released a new iPhone!": { stock: "Apple", NVIDIAIncri: -5, APPLIncri: 7, TSLAIncri: -5 },
    "NVIDIA servers got hacked!": { stock: "NVIDIA", NVIDIAIncri: -70, APPLIncri: 3, TSLAIncri: 2 },
    "Tesla crashed millions of cars!": { stock: "Tesla", NVIDIAIncri: 3, APPLIncri: 1, TSLAIncri: -65 },
    "Apple iPhone users are switching to Android!": { stock: "Apple", NVIDIAIncri: 3, APPLIncri: -60, TSLAIncri: 2 }
};

//----------declaring variables--------------

/*function overwriteSavingsText(value){
    writeSavingsAccount.textContent = "Savings Account Balance (takes a bit to update): " + value; 
};*/

// Write the user's balance to the page
function writeUserBal(balance) {
    getUserBal.textContent = "Balance: " + balance;
}

// Countdown function
function createCountdown() {
    if (countdown === 0) {
        countdown = 60;
    } else {
        document.getElementById("nextCountdown").textContent = countdown;
        countdown--;
    }

    setTimeout(createCountdown, 1000);
}

// Random event generator
function randomEventGenerator() {
    var randomEventCreator = Math.floor(Math.random() * randomEvents.length);
    setEvent = randomEvents[randomEventCreator];
    document.getElementById("currentNewsIdentifier").textContent = setEvent;

    // Retrieve the stock and boost from the event map
    if (setEvent in eventBoosts) {
        const { stock, NVIDIAIncri, APPLIncri, TSLAIncri } = eventBoosts[setEvent];

        NVIDIAboost = 0;
        APPLboost = 0;
        TSLAboost = 0;

        // Update the corresponding stock boost
        if (stock === "NVIDIA") {
            NVIDIAboost = NVIDIAIncri;
            TSLAboost = TSLAIncri;
            APPLboost = APPLIncri;
        } else if (stock === "Tesla") {
            NVIDIAboost = NVIDIAIncri;
            TSLAboost = TSLAIncri;
            APPLboost = APPLIncri;
        } else if (stock === "Apple") {
            NVIDIAboost = NVIDIAIncri;
            TSLAboost = TSLAIncri;
            APPLboost = APPLIncri;
        }
    }

    setTimeout(randomEventGenerator, 60 * 1000); // Schedule next event
}

function increaseSavings(depositedVal) {
    //overwriteSavingsText(depositVar);
    
    const setLoop = setInterval(() => {
        if (increaseSavingsIdentifier === true) {
            // Add the new deposit to the savings balance
            savingsBalance += depositedVal;  // Add the deposit amount to the total balance
            depositedVal = savingsBalance * 1.003;
            increaseIncri = Math.round(depositedVal);
            //overwriteSavingsText(increaseIncri);
            console.log(depositedVal);  // Debug (can remove later)
            console.log(increaseIncri);  // Debug (can remove later)
        } else {
            clearInterval(setLoop);
        }
    }, 100 * 600);
}


//--------all functions on the top please-----------------------

// Initialize the page when DOM is fully loaded
document.addEventListener("DOMContentLoaded", createCountdown);
//document.addEventListener("DOMContentLoaded", overwriteSavingsText(increaseIncri))
document.addEventListener("DOMContentLoaded", randomEventGenerator);
writeUserBal(userBal);
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        // Skip the button with class 'no-effect'
        if (button.classList.contains("no-effect")) return;

        button.addEventListener("mouseenter", () => {
            const randomTilt = (Math.random() * 10) - 5;
            const randomY = -(Math.random() * 4 + 3);

            button.style.transform = `scale(1.1) rotate(${randomTilt}deg) translateY(${randomY}px)`;
            button.style.transition = "transform 0.2s cubic-bezier(0.25, 1.5, 0.5, 1)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1) rotate(0deg) translateY(0)";
            button.style.transition = "transform 0.2s ease";
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("img");

    buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {

        button.style.transform = `scale(1.1)`;
        button.style.transition = "transform 0.2s cubic-bezier(0.25, 1.5, 0.5, 1)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
        button.style.transition = "transform 0.2s ease";
    });
    });
})


document.addEventListener("DOMContentLoaded", function() {
    const settingIcon = document.getElementById("setting");
    const div = document.querySelector(".settings");

    settingIcon.addEventListener("click", () => {
        div.style.display = "flex";
        // Allow the browser to render the display change before adding the class
        setTimeout(() => {
            div.classList.add("open");
        }, 10); // 10ms is enough
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const closeIcon = document.getElementById("closeSettings");
    const div = document.querySelector(".settings");
    const parentDiv = document.querySelector(".settingsMenu");
    const settingIcon = document.getElementById("setting");

    closeIcon.addEventListener("click", () => {
        div.classList.remove("open");
        div.classList.add("close");
        // Allow the browser to render the display change before adding the class
        setTimeout(() => {
            div.style.display = "none";
            parentDiv.style.display = "none"; // Hide the settings menu
            settingIcon.style.display = "block"; // Show the settings button again
            div.classList.remove("close"); // Remove the close class for future use
        }, 700); // 10ms is enough
    });
});

//openning menu:
document.getElementById("openingButton").addEventListener("click", function() {
    const openingButton = document.getElementById("openingButton");
    const openingMenu = document.querySelector(".openingScene");
    const openingTitle = document.querySelector(".openingTitle");

    openingButton.classList.add("start");

    // Start the openingMenu animation halfway through button animation
    setTimeout(() => {
        openingMenu.classList.add("start");
        openingTitle.classList.add("start");

    }, 750); // 750ms = half of 1.5s

    // Hide the button after the full animation (optional)
    setTimeout(() => {
        openingButton.style.display = "none";
        openingTitle.style.display = "none"; // Hide the title after the button animation
    }, 1500);
});

document.addEventListener("DOMContentLoaded", function() {
    const allInputBoxes = document.querySelectorAll("input");
    allInputBoxes.forEach(input => {
        input.addEventListener("mouseenter", () => {
            input.style.transform = `scale(1.05)`;
            input.style.transition = "transform 0.2s cubic-bezier(0.25, 1.5, 0.5, 1)";
        });
        input.addEventListener("mouseleave", () => {
            input.style.transform = "scale(1)";
            input.style.transition = "transform 0.2s ease";
        });
    })
});


//dollar sign background
const canvas = document.getElementById("moneyCanvas");
    const ctx = canvas.getContext("2d");

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Resize canvas when window resizes
    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    let mouse = { x: null, y: null };

    window.addEventListener("mousemove", e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    });

    const NUM_DOLLARS = 100;
    const dollars = [];
    const dollarImg = new Image();
    dollarImg.src = "./misc-stuff/dollar.png";

    // Dollar class: holds position, speed, size, rotation
    class Dollar {
        constructor() {
            // When a new Dollar is created, immediately initialize it with random values.
            // 'true' signals this is the first time, so start it somewhere on screen.
            this.reset(true);
        }

        reset(firstTime = false) {
            // Random horizontal position anywhere within the canvas width
            this.x = Math.random() * width;

            // Vertical position:
            // If firstTime, start at random vertical position inside viewport,
            // else start just above the visible screen (-50 pixels)
            this.y = firstTime ? Math.random() * height : -50;

            // Random size between 30 and 60 pixels
            this.size = 30 + Math.random() * 30;

            // Base falling speed
            this.speedY = Math.random() * 2;

            // Initial rotation angle (in radians), anywhere from 0 to 2π (360 degrees)
            this.rotation = Math.random() * Math.PI * 2;

            // Spin speed:
            // Math.random() generates 0 to 1, subtract 0.5 gives range -0.5 to +0.5,
            // multiply by 0.02 scales to -0.01 to +0.01 radians/frame spin speed.
            // This means dollars spin slowly clockwise or counterclockwise.
            this.spinSpeed = (Math.random() - 0.5) * 0.02;

            // Horizontal velocity (dx), starts at 0 (no horizontal movement)
            this.dx = 0;

            // Vertical velocity (dy), start at the base falling speed (speedY)
            this.dy = this.speedY;
        }

        update() {
            // Only run mouse repulsion if mouse coordinates are known
            if (mouse.x !== null && mouse.y !== null) {

                // Calculate horizontal distance from dollar to mouse
                const dx = this.x - mouse.x;

                // Calculate vertical distance from dollar to mouse
                const dy = this.y - mouse.y;

                // Calculate straight-line distance between dollar and mouse (Pythagoras)
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Set repulsion radius: how close the mouse has to be to push the dollar
                const radius = 100;

                // If the dollar is inside the repulsion radius...
                if (dist < radius) {
                    // Calculate force proportional to proximity:
                    // closer means stronger push, max force when mouse is exactly on dollar
                    const force = (radius - dist) / radius;

                    // Push dollar away from mouse horizontally:
                    // (dx / dist) gives direction, multiplied by force and an arbitrary multiplier (2) for strength
                    this.dx += (dx / dist) * force * 2;

                    // Push dollar away vertically (same idea)
                    this.dy += (dy / dist) * force * 2;
                }
            }

            // Update dollar's position by applying velocity
            this.x += this.dx;
            this.y += this.dy;

            // Increment rotation by spinSpeed radians per frame
            this.rotation += this.spinSpeed;

            // Apply friction to horizontal velocity to gradually reduce dx over time
            this.dx *= 0.95;

            // Smoothly bring vertical velocity back toward base falling speed (speedY)
            // Keeps the dollar falling steadily despite repulsion effect.
            this.dy = this.dy * 0.95 + this.speedY * 0.05;

            // If the dollar falls below the screen or drifts off the sides,
            // reset it to start falling from the top again
            if (
                this.y > height + this.size ||  // below bottom edge
                this.x < -this.size ||           // off left edge
                this.x > width + this.size       // off right edge
            ) {
              this.reset();
            }
        }

        draw() {
            // Save current canvas state (position, rotation, etc.)
            ctx.save();

            // Move canvas origin to dollar's (x,y) position
            ctx.translate(this.x, this.y);

            // Rotate canvas by current rotation angle (in radians)
            ctx.rotate(this.rotation);

            // Draw the dollar image, centered at (0,0)
            // Negative half size shifts so drawing is centered on position
            ctx.drawImage(
            dollarImg,
            -this.size / 2,
            -this.size / 2,
            this.size,
            this.size
            );

            // Restore canvas state so next draw is not affected by translate/rotate
            ctx.restore();
        }
        }



    // Start animation when image loads
    dollarImg.onload = () => {
      for (let i = 0; i < NUM_DOLLARS; i++) {
        dollars.push(new Dollar());
      }

      requestAnimationFrame(animate);
    };

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (const dollar of dollars) {
        dollar.update();
        dollar.draw();
      }

      requestAnimationFrame(animate);
    }







document.getElementById("setting").addEventListener("click", function() {
    console.log("clicked settings button (debugging)");
    document.getElementById("setting").style.display = "none"; // Hide the settings button
    document.querySelector(".settingsMenu").style.display = "flex"; // Show the settings menu
    

});

// Handle invest button click
document.getElementById("investButton").addEventListener("click", function () {
    console.log("clicked! (debugging)");
    document.querySelectorAll(".container button").forEach(button => button.style.display = "none"); // Hide container buttons
    document.querySelector(".investMenu").style.display = "flex"; // Show the investMenu
});

// Handle back button click
document.querySelectorAll(".back").forEach(button => {
    button.addEventListener("click", function () {
        document.querySelectorAll(".container button").forEach(btn => btn.style.display = "block"); // Show container buttons
        document.querySelector(".investMenu").style.display = "none"; // Hide the investMenu
        document.querySelector(".randomEvent").style.display = "none"; // Hide the randomEventMenu
        document.querySelector(".savingAccountDialog").style.display = "none"; // Hide the savings account menu
    });
});

// Handle random event button click
document.getElementById("newsButton").addEventListener("click", function () {
    document.querySelectorAll(".container button").forEach(button => button.style.display = "none"); // Hide container buttons
    document.querySelector(".randomEvent").style.display = "flex"; // Show the randomEvent menu
});
document.getElementById("bankDeposit").addEventListener("click", function () {
    document.querySelectorAll(".container button").forEach(button => button.style.display = "none"); // Hide container buttons
    document.querySelector(".savingAccountDialog").style.display = "flex"; // Show the randomEvent menu
});

//----------increase bank balance from investments
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("NVIDIA").addEventListener("click", function() {
        try{
            handleInvestments("NVIDIA");
        }catch(err){
            console.log(`NVIDIA: ${err}`);
        }
    });
    document.getElementById("Tesla").addEventListener("click", function(){
        try{
            handleInvestments("TESLA");
        }catch(err){
            console.log(`TESLA: ${err}`);
        }
    })
    document.getElementById("APPL").addEventListener("click", function(){
        try{
            handleInvestments("APPLE");
        }catch(err){
            console.log(`APPLE: ${err}`);
        }
    });
});

function flashGreen() {
      const flash = document.getElementById("greenFlash");

      // Force reflow to make sure transition resets
      flash.classList.remove("active");
      void flash.offsetWidth;

      flash.classList.add("active");

      // Remove 'active' after a short delay to begin slow fade out
      setTimeout(() => {
        flash.classList.remove("active");
      }, 100); // allow flash to fully fade in before starting fade out
}
function flashRed() {
      const flash = document.getElementById("redFlash");

      // Force reflow to make sure transition resets
      flash.classList.remove("active");
      void flash.offsetWidth;

      flash.classList.add("active");

      // Remove 'active' after a short delay to begin slow fade out
      setTimeout(() => {
        flash.classList.remove("active");
      }, 100); // allow flash to fully fade in before starting fade out
}

//deposit system!!!
/*document.getElementById("depositButton").addEventListener("click", function() {
    let depositVar = parseFloat(document.getElementById("depositDialog").value);
    if (depositVar > 0) {
        // Add the deposit to the savings balance and start the increase process
        userBal = userBal - depositVar;
        writeUserBal(userBal);
        increaseSavingsIdentifier = true;
        increaseSavings(depositVar);
        console.log(depositVar);  // Log the deposit amount for debugging
    } else {
        alert("Please enter a valid deposit amount.");
    }
});

//withdraw!!
document.getElementById("withdrawButton").addEventListener("click", function() {
    console.log("WITHDRAWING");
    increaseSavingsIdentifier = false;  // Stop the savings growth process
    userBal = userBal + increaseIncri;  // Add the earned interest to the user balance
    increaseIncri = 0;  // Reset the interest increment value
    //overwriteSavingsText(increaseIncri);  // Update the displayed savings account balance
      // Update the user balance on the page
    writeUserBal();
});/*


/*TODO:
    TRY AND GET CLOUD DATA STORAGE (optional)]
    LOGIN SYSTEM (for users to get THEIR data)
*/