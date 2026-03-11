let playableCharacters;
let playableCharactersImgs;
let hp;
let normalAttack;
let skill;
let ultimate;
let enemy;
let boss;
let normalAttackButton;
let skillButton;
let ultimateButton;

let buttonMenu;

function preload() {

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('black');

    enemy = new Sprite();
    enemy.type = "enemy";
    enemy.hp = 275;
    enemy.normalAttack = enemyAttack();

    let buttons = new Group();
    normalAttackButton = document.getElementById("normalAttackButton");
    skillButton = document.getElementById("skill");
    ultimateButton = document.getElementById("ultimate");
    buttons.add(normalAttackButton, skillButton, ultimateButton);

    let playableCharacters = new Group();

    let mc = createSprite(100, 100, 15, 15);
    mc.type = "dps";
    mc.hp = 150;
    mc.normalAttack = dpsNormal();
    mc.skill = dpsSkill();
    mc.ultimate = dpsUlt();
    playableCharacters.add(mc);

    const a = windowHeight * 0.25;

    buttonMenu = new Sprite();
    buttonMenu.height = a;
    buttonMenu.width = windowWidth;
    buttonMenu.color = black;
}

function dpsNormal() {
    enemy.hp -= 30;
}

function dpsSkill() {
    enemy.hp -= 50;
}

function dpsUlt() {
    enemy.hp -= 100;
}       

function supportNormal() {
    enemy.hp -= 10;
    playableCharacters.forEach(character => {
        playableCharacters.hp += 5;
    });
}

function supportSkill() {
    playableCharacters.forEach(character => {
        character.hp += 20; // Heal all characters
    });
}

function supportUlt() {
    enemy.hp -= 30; // Deal damage to enemy
    playableCharacters.forEach(character => {
        character.hp += 75;
    });
}

function tankNormal() {
    enemy.hp -= 15;
}

function tankSkill() {
    enemy.hp -= 25;
}

function tankUlt() {
    enemy.hp -= 45;
}

function enemyAttack() {
    playableCharacters.forEach(character => {
        character.hp -= 20; // Deal damage to each character, work on this
    });
}

function draw() {
    background('pink');
    
    normalAttackButton.x;
    normalAttackButton.y;
    skillButton.x = windowWidth / 2;
    skillButton.y = buttonMenu / 2
    ultimateButton.x;
    ultimateButton.y;

}