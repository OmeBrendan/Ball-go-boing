var x,y,v;

function setup() {
  createCanvas(500, 400);
  x = 0;
  y = 200;
  v = 5;
  z = 5;
}

function draw() {
  background("255");

  ellipse(x,y,50,50)
  x = x + v;
  y = y + z;

if(x <= 0 || x > 500){
  v = v * -1
 }
if(y <= 0 || y > 400){
  z = z * -1}
}