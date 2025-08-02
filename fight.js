let playableCharacters;
let playableCharactersImgs;
let hp;
let normalAttack;
let skill;
let ultimate;
let enemy;
let boss;

function preload() {

}

function setup() {
    canvas(windowWidth, windowHeight);
    background('black');

    enemy = new Sprite();
    enemy.type = "enemy";
    enemy.hp = 275;
    enemy.normalAttack = enemyAttack();

    let playableCharacters = new Group();

    let genshinLucy = createSprite(100, 100, 15, 15);
    genshinLucy.type = "dps";
    genshinLucy.hp = 150;
    genshinLucy.normalAttack = dpsNormal();
    genshinLucy.skill = dpsSkill();
    genshinLucy.ultimate = dpsUlt();
    playableCharacters.add(genshinLucy);

    let jean = createSprite(150, 100);
    jean.type = "support";
    jean.hp = 100;
    jean.normalAttack = supportNormal(); 
    jean.skill = supportSkill();       
    jean.ultimate = supportUlt();
    playableCharacters.add(jean);

    let venti = createSprite(200, 100);
    venti.type = "tank";
    venti.hp = 200;
    venti.normalAttack = tankNormal();
    venti.skill = tankSkill();
    venti.ultimate = tankUlt();
    playableCharacters.add(venti);

    let neuvi = createSprite(250, 100);
    neuvi.type = "dps";
    neuvi.hp = 150;
    neuvi.normalAttack = dpsNormal();
    neuvi.skill = dpsSkill();
    neuvi.ultimate = dpsUlt();
    playableCharacters.add(neuvi);

    let kotlcLucy = createSprite(100, 150);
    kotlcLucy.type = "support";
    kotlcLucy.hp = 100;
    kotlcLucy.normalAttack = supportNormal();
    kotlcLucy.skill = supportSkill();       
    kotlcLucy.ultimate = supportUlt();
    playableCharacters.add(kotlcLucy);

    let linh = createSprite(150, 150);  
    linh.type = "support";
    linh.hp = 100;
    linh.normalAttack = supportNormal();
    linh.skill = supportSkill();
    linh.ultimate = supportUlt();
    playableCharacters.add(linh);

    let marella = createSprite(200, 150);
    marella.type = "dps";
    marella.hp = 150;
    marella.normalAttack = dpsNormal();
    marella.skill = dpsSkill();
    marella.ultimate = dpsUlt();
    playableCharacters.add(marella);

    let keefe = createSprite(250, 150);
    keefe.type = "tank";
    keefe.hp = 200;
    keefe.normalAttack = tankNormal();
    keefe.skill = tankSkill();
    keefe.ultimate = tankUlt();
    playableCharacters.add(keefe);

    let jediLucy = createSprite(100, 200);
    jediLucy.type = "tank"; 
    jediLucy.hp = 200;
    jediLucy.normalAttack = tankNormal();
    jediLucy.skill = tankSkill();
    jediLucy.ultimate = tankUlt();
    playableCharacters.add(jediLucy);

    let fives = createSprite(150, 200);
    fives.type = "tank";
    fives.hp = 200;
    fives.normalAttack = tankNormal();
    fives.skill = tankSkill();
    fives.ultimate = tankUlt();
    playableCharacters.add(fives);

    let rex = createSprite(200, 200);
    rex.type = "dps";
    rex.hp = 150;
    rex.normalAttack = dpsNormal();
    rex.skill = dpsSkill();
    rex.ultimate = dpsUlt();
    playableCharacters.add(rex);

    let sparrow = createSprite(250, 200);
    sparrow.type = "support";
    sparrow.hp = 100;
    sparrow.normalAttack = supportNormal();
    sparrow.skill = supportSkill();
    sparrow.ultimate = supportUlt();
    playableCharacters.add(sparrow);

    let radiantLucy = createSprite(100, 250);
    radiantLucy.type = "dps";
    radiantLucy.hp = 150;
    radiantLucy.normalAttack = dpsNormal();
    radiantLucy.skill = dpsSkill();
    radiantLucy.ultimate = dpsUlt();
    playableCharacters.add(radiantLucy);

    let kaladin = createSprite(150, 250);
    kaladin.type = "support";
    kaladin.hp = 100;
    kaladin.normalAttack = supportNormal();
    kaladin.skill = supportSkill();
    kaladin.ultimate = supportUlt();
    playableCharacters.add(kaladin);

    let dalinar = createSprite(200, 250);
    dalinar.type = "tank";
    dalinar.hp = 200;
    dalinar.normalAttack = tankNormal();
    dalinar.skill = tankSkill();
    dalinar.ultimate = tankUlt();
    playableCharacters.add(dalinar);

    let shallan = createSprite(250, 250);
    shallan.type = "dps";
    shallan.hp = 150;
    shallan.normalAttack = dpsNormal();
    shallan.skill = dpsSkill();
    shallan.ultimate = dpsUlt();
    playableCharacters.add(shallan);

    if (lastScene == intro) {
        currentScene = scenes.meetVenti;
        genshinLucy.pos = {x: width/2 - 300, y: height/2 + 400};
    }
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
        character.hp -= 20; // Deal damage to each character
    });
}

function draw() {
    background('grey');
    
}