var x,y,v,z,a,b,j,i;

function setup() {
  createCanvas(500, 400);
  x = 0;
  y = 200;
  v = 5;
  z = 5;
  a = 30
  b = 100
  j = 2
  i = 7
}

function draw() {
  background("black");

  square(x,y,50)
  fill("green")
  x = x + v;
  y = y + z;

if(x <= 0 || x > 450){
  v = v * -1
 }
if(y <= 0 || y > 350){
  z = z * -1}

  square(a,b,50)
  fill("yellow")
  a = a + j;
  b = b + i;

if(a <= 0 || a > 450){
  j = j * -1
 }
if(b <= 0 || b > 350){
  i = i * -1}
}