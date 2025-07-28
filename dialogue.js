const username = localStorage.getItem("username") || "Lucia";

this.input.gamepad.once('connected', (pad) => {
    this.pad = pad;
});

// This function will be called repeatedly to check controller state
function pollGamepad() {
    const gamepads = navigator.getGamepads();
    const gp = gamepads[0];

    if (gp) {
        // Button index 0 is usually the "X" button on DualSense
        if (gp.buttons[0].pressed && !xPressedLastFrame) {
            console.log("X - Next");

            // Simulate click on #nextBtn
            document.getElementById("nextBtn").click();
        }

        // Update last frame button state
        xPressedLastFrame = gp.buttons[0].pressed;
    }

    requestAnimationFrame(pollGamepad);
}

// To prevent holding the button down from triggering multiple times
let xPressedLastFrame = false;

// Start polling when a controller connects
window.addEventListener("gamepadconnected", () => {
    console.log("Gamepad connected!");
    pollGamepad();
});


const scenes = {
    intro: [
        {name: "Elijah", text: `Welcome, ${username}. I am Elijah.`, bg: "elijahSmileOne.PNG"},
        {name: username, text: "What is this place? And how do you know who I am??", bg: "lucyAsk.PNG"},
        {name: "Elijah", text: "This is my domain, the Star Mapper Kingdom, and I am the one who sent you here.", bg: "elijahSmileTwo.PNG"},
        {name: username, text: "And? How do I get back home?", bg: "lucyAsk.PNG"},
        {name: "Elijah", text: "I can send you back, but I have a mission only you can complete.", bg: "elijahSmileOne.PNG"},
        {name: username, text: "Go on.", bg: "lucySmile.PNG"},
        {name: "Elijah", text: "Astra the Witch, one of our most powerful sorcerrors was kidnapped by the Shadow Watchers.", bg: "elijahSmileTwo.PNG"},
        {name: "Elijah", text: "I need you to travel through the multiverse to save her.", bg: "elijahSmileOne.PNG"},
        {name: username, text: "What's in it for me?", bg: "lucyAsk.PNG"},
        {name: "Elijah", text: "Power.", bg: "elijahSmileOne.PNG"},
        {name: "Elijah", text: "Whenever you go to a new dimension, you will gain a power to reflect where you are.", bg: "elijahSmileTwo.PNG"},
        {name: username, text: "That seems fair, I might as well.", bg: "lucySmile.PNG"},
        {name: username, text: "It's not like there's anything better to do back home.", bg: "lucyAsk.PNG"},
        {name: "Elijah", text: "Perfect. Here is the first portal.", bg: "elijahSmileOne"},
    ]
}

// === DOM ELEMENTS ===
// Get the dialogue UI elements from the HTML page
const nameBox = document.getElementById("name");     // Where character names appear
const textBox = document.getElementById("text");     // Where the dialogue is typed
const nextBtn = document.getElementById("nextBtn");  // The button to go to the next line

// === STATE VARIABLES ===
const currentScene = scenes.intro;   // You can change this to another scene later
let dialogueIndex = 0;               // Keeps track of which line we're on
let charIndex = 0;                   // Tracks how many characters have been typed
let isTyping = false;                // Prevents skipping during typewriter effect

// === TYPEWRITER FUNCTION ===
// This types out one letter at a time
function typeWriter(text, speed = 30) {
  textBox.textContent = "";      // Clear existing text
  charIndex = 0;                 // Start typing from the beginning
  isTyping = true;               // Lock interaction during typing

  const interval = setInterval(() => {
    if (charIndex < text.length) {
      // Add one more character
      textBox.textContent += text.charAt(charIndex);
      charIndex++;
    } else {
      // Done typing
      clearInterval(interval);
      isTyping = false;
    }
  }, speed);
}

// === SHOW NEXT LINE ===
// Triggered when the player clicks "Next"
function showNextLine() {
  if (isTyping) return; // Don't allow skipping during typewriter effect

  if (dialogueIndex < currentScene.length) {
    const line = currentScene[dialogueIndex];

    // Set character name and start typewriter
    nameBox.textContent = line.name;
    typeWriter(line.text);

    // === SET BACKGROUND IMAGE ===
    const bgImage = line.bg || ""; // fallback in case no bg
    if (bgImage) {
      document.getElementById("game-body").style.backgroundImage = `url(images/${bgImage})`;
    }

    dialogueIndex++;
  } else {
    window.location.href = "fight.html"; // Scene complete
  }
}


// === START FIRST LINE ===
showNextLine(); // Show the first line when the page loads\

nextBtn.addEventListener("click", showNextLine);