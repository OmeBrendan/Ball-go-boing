class Ball{

  constructor(x, y, w, h, vx, vy,_color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = vx;
    this.vy = vy;
    this.color = _color;
  }

  draw(){
   fill(this.color);
   ellipse(this.x,this.y,50,50);
   this.x = this.x + this.vx;
   this.y = this.y + this.vy;
  }
}

var ball1,ball2;

function setup