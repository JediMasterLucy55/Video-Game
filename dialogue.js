const username = localStorage.getItem("username");
let lastScene;

const scenes = {
    intro: [
        {name: "", text: "", bg: ""},
        {name: "", text: "", bg: ""}
    ]
}

const nameBox = document.getElementById("name");
const textBox = document.getElementById("text");     
const nextBtn = document.getElementById("nextBtn");  

let currentScene = scenes.intro;   
let dialogueIndex = 0;               
let charIndex = 0;                   



nextBtn.addEventListener("click", );