function Bullet() {
  this.x = ship.x + 20;
  this.y = ship.y;
  this.width = 10;
  this.height = 20;
  this.velocity = -6;
  
  this.show = function() {
    rect(this.x,this.y,this.width,this.height);
  }
  
  this.out = function() {
    if(this.y < 0) {
      return true;
    }else {
      return false;
    }
  }
  
  this.hit = function(hel) {
   let d = hel.x + 20;
   let d2 = this.x;
   let h = hel.y;
   let h2 = this.y
    
    if (d === d2  && h  > h2) {
      return true;
    }else {
      return false;
    }
  }
  
  this.move = function() {
    this.y  = this.y + this.velocity; 
  }
}