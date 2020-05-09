function Ship() {
  this.x = 0;
  this.y = 300;
  this.width = rez;
  this.height = rez;
  this.image = loadImage("Ship.png")
  
  this.show = function() {
    image(this.image,this.x,this.y,this.width,this.height);
  }
  
  this.update = function() {
    this.x = constrain(this.x, 0, width - rez)
  }
  
  this.move = function(pos) {
    this.x += pos;
  }
}