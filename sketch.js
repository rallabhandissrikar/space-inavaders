let rez = 50;
var ship;
var bullet = [];
var inva;
let score = 0;
var snd

function preload() {
  snd = loadSound("hit sound.mp3")
}

function setup() {
  createCanvas(400, 400);
  ship = new Ship();
  inva = new Inava();
  snd.play();
}

function draw() {
  background(0);
  fill("white");
  textSize(20)
  text("score:" + score, width/2, 30)
  ship.show();
  ship.update();
  
  if (frameCount % 100 === 0) {
    inva.speed();
  }
  
  inva.show();
  inva.update();
  inva.move();
  
  for (var i = 0; i < bullet.length; i++) {
    bullet[i].show();
    bullet[i].move();
    
    if (bullet[i].hit(inva)) {
      //console.log("hit");
      inva.rebirth();
      bullet.splice(i,1)
    }
    
    
  }
  
  for (var l = 0; l < bullet.length; l++) {
    if (bullet[l].out()) {
      bullet.splice(l,1)
    }
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    ship.move(rez);
  } else if (keyCode === LEFT_ARROW) {
    ship.move(-rez);
  }
  
  if (keyCode === 32) {
    bullet.push(new Bullet());
  }
}