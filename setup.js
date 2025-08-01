let unlockedCharacters = [];
let characterButtons = [];
let selected = [];

function setup() {
  createCanvas(800, 600);
  textFont('Arial');
  textAlign(CENTER, CENTER);

  // Load unlocked characters
  unlockedCharacters = JSON.parse(localStorage.getItem("unlockedCharacters")) || [];

  // Create a button for each character
  for (let i = 0; i < unlockedCharacters.length; i++) {
    let char = unlockedCharacters[i];
    let x = 150 + i * 150;
    let y = height / 2;

    characterButtons.push({
      name: char,
      x,
      y,
      w: 100,
      h: 100,
      selected: false
    });
  }
}

function draw() {
  background(30);
  fill(255);
  textSize(24);
  text("Select Your Party", width / 2, 50);

  characterButtons.forEach(btn => {
    stroke(255);
    fill(btn.selected ? 'limegreen' : 'gray');
    rect(btn.x, btn.y, btn.w, btn.h, 10);

    fill(0);
    noStroke();
    textSize(16);
    text(btn.name, btn.x + btn.w / 2, btn.y + btn.h / 2);
  });

  fill(255);
  textSize(18);
  text("Click characters to toggle. Press ENTER to confirm party.", width / 2, height - 30);
}

function mousePressed() {
  for (let btn of characterButtons) {
    if (
      mouseX > btn.x &&
      mouseX < btn.x + btn.w &&
      mouseY > btn.y &&
      mouseY < btn.y + btn.h
    ) {
      btn.selected = !btn.selected;
      if (btn.selected) {
        selected.push(btn.name);
      } else {
        selected = selected.filter(c => c !== btn.name);
      }
    }
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    // Save party to localStorage and go to battle
    localStorage.setItem("party", JSON.stringify(selected));
    window.location.href = "fight.html";
  }
}
