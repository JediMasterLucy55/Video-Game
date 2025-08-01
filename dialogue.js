const username = localStorage.getItem("username") || "Lucia";
let lastScene;

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
        {name: "Elijah", text: "Perfect. Here is the first portal.", bg: "elijahSmileOne.PNG"},
    ],
    meetVenti: [

    ],
    meetJean: [

    ],
    meetNeuvi: [

    ],
    beforeBossOne: [

    ],
    meetLinh: [

    ], 
    meetMarella: [

    ],
    meetKeefe: [

    ],
    beforeBossTwo: [

    ],
    meetRex: [

    ],
    meetFives: [

    ],
    meetSparrow: [

    ],
    beforeBossThree: [

    ],
    meetKaladin: [

    ],
    meetShallan: [

    ],
    meetDalinar: [

    ],
    beforeBossFour: [

    ],
    beforeFinalBoss: [

    ],
    postBoss: [

    ]
}

// === DOM ELEMENTS ===
// Get the dialogue UI elements from the HTML page
const nameBox = document.getElementById("name");     // Where character names appear
const textBox = document.getElementById("text");     // Where the dialogue is typed
const nextBtn = document.getElementById("nextBtn");  // The button to go to the next line

// === STATE VARIABLES ===
let currentScene = scenes.intro;   // You can change this to another scene later
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
  if (isTyping) return; // Wait until typing is finished

  if (dialogueIndex < currentScene.length) {
    const line = currentScene[dialogueIndex]; // Get current line
    nameBox.textContent = line.name;          // Set name box
    typeWriter(line.text);                    // Start typing dialogue

    // Set background if the line has one
    if (line.bg) {
      const gameBody = document.getElementById("game-body");
      gameBody.style.backgroundImage = `url('images/${line.bg}')`;
    }

    dialogueIndex++;                          // Move to next line for next click
  } else {
    // Dialogue finished — go to the next scene (like a battle)
    lastScene = currentScene;
    localStorage.setItem(lastScene);
    window.location.href = "fight.html";
  }
}

// === START FIRST LINE ===
showNextLine(); // Show the first line when the page loads\

nextBtn.addEventListener("click", showNextLine);