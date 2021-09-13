var x=0,y = 0;
var gravity = 9.8;
var mass = 1;
var velocity = 0;

//color palette
//#f1f1f1//
//#d4d9dd//
//#bbb6b6//
//#424246//
//#212121//
function setup() {
  createCanvas(400,400);
}
function draw() {
  var grounded = true;
  rectMode(CENTER);
  velocity = mass*gravity;
  background(212, 217, 221);
  fill(66, 66, 70);
  y += velocity;
  var y_point = y + 15;
  var py_point = 400 -25;
  ellipse(x, y_point, 10);
  ellipse(-1, py_point, 10);
  rect(x,y,30,30);
  fill(33, 33, 33)
  rect(-1, 400, width+width, 50)
  if(py_point > y_point) {
    grounded = true;
  } else //if(/*(grounded = true && y_point < py_point) ||   */py_point < y_point) 
  {
    grounded = false;
  }
  if (grounded = true){
    velocity = 0;
  }
  if (grounded = false) {
    velocity = mass*gravity;
  }
  console.log(grounded)
}