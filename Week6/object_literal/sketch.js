let ball1 = {
  x:10,
  y:10,
  diam:5 
}

let ball2 = {
  x:10,
  y:10,
  diam:25 
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  
  ellipse(ball1.x, ball1.y, ball1.diam);
  ellipse(ball2.x, ball2.y, ball2.diam);

  ball1.x += .25;
  
}