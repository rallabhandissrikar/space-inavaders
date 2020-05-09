function Inava() {
  this.pos = [0, 50, 100, 150, 200, 250, 300, 350];
  this.x = random(this.pos);
  this.y = random(-100, 0);
  this.width = rez;
  this.height = rez;
  this.velocity = 0;
  this.pusher = 3;
  this.image = loadImage("Inva.png");
  //this.snd = loadSound("hit sound2.mp3");
  //this.snd2 = loadSound("hit sound1.mp3");

  this.show = function() {
    image(this.image,this.x, this.y, this.width, this.height);
    console.log(this.pusher);
  }

  this.move = function() {
    this.velocity = this.pusher;
    this.y = this.y + this.velocity;
  }
  
  this.speed = function() {
    this.pusher += 0.125;
  }
  
  this.rebirth = function() {
      this.x = random(this.pos);
  this.y = random(-100, 0);
    score += 1;
    //this.snd2.play();
  }

  this.update = function() {
    if (this.y > 400) {
      this.x = random(this.pos);
      this.y = random(-100, 0);
      score -= 1;
      //this.snd.play();
    }
  }
}