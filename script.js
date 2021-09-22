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
   ellipse(this.x,this.y,this.w,this.h);
   this.x = this.x + this.vx;
   this.y = this.y + this.vy;
   if(this.x <= 0 || this.x > 500){
     this.vx = this.vx * -1
   }
   else if(this.y <= 0 || this.y > 400){
     this.vy = this.vy * -1
   }
  }
}

var ball1,ball2;

function setup() {
  createCanvas(500,400)
  ball1=new Ball(10,300,30,30,9,4,"red")
  ball2=new Ball(40,60,50,50,4,8,"yellow")
  ball3=new Ball(190,30,60,60,8,6,"navy")
}

function draw() {
  background("gray")
  ball1.draw()
  ball2.draw()
  ball3.draw()
}