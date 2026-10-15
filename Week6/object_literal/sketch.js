let ball1 = {
  x:100,
  y:100,
  diam:50 
}

let ball2 = {
  x:300,
  y:200,
  diam:100 
}


function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  
  ellipse(ball1.x, ball1.y, ball1.diam);
  ellipse(ball2.x, ball2.y, ball2.diam);

  ball1.x+=2;
  ball2.x+=.5;
  
}