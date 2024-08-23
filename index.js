// Store the currently playing audio object
var currentAudio = null;

// Get all drum buttons
var bttno = document.querySelectorAll(".drum").length;

// Add event listeners to each drum button
for (var i = 0; i < bttno; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
    // Get the button's inner HTML
    var buttonInnerHTML = this.innerHTML;

    // If there's currently an audio playing, stop it
    if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset the audio to the start
    }

    // Declare and initialize the audio object based on button content
    switch(buttonInnerHTML) {
        case "w":
            currentAudio = new Audio("sounds/mai.mp3");
            break;
        case "a":
            currentAudio = new Audio("sounds/tum.mp3");
            break;
        case "s":
            currentAudio = new Audio("sounds/ek.mp3");
            break;
        case "d":
            currentAudio = new Audio("sounds/ye.mp3");
            break;
        case "j":
            currentAudio = new Audio("sounds/zara.mp3");
            break;
        case "k":
            currentAudio = new Audio("sounds/koi.mp3");
            break;
        case "l":
            currentAudio = new Audio("sounds/rideit.mp3");
            break;
            case "m":
            currentAudio = new Audio("sounds/blue.mp3");
            break;
            case "n":
                currentAudio = new Audio("sounds/yaaad.mp3");
                break;
        default:
            console.log("No associated audio for this button.");
            return; // Exit the function if no valid audio is associated
    }

    // Play or pause the audio
    if (currentAudio.paused) {
        currentAudio.play();  // Play the audio if it is paused
    } else {
        currentAudio.pause(); // Pause the audio if it is playing
        currentAudio.currentTime = 0; // Reset to start
    }
}
