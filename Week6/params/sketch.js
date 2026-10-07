/******* object literal ***********/
// dot notation is clean and organized

let ball = {
  // commas are needed to differentiate
  // between items in the object
  x: 300,
  y: 200,
  size: 100,
};

let col = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noFill();
  background(0, 0, 0);
}

function draw() {
  background(0, 0, 0);
  strokeWeight(40);
  stroke(col, 100, 100, .75);
  //  reference data with var.val
  ellipse(ball.x, ball.y, ball.size);
  // it can be updated too!
  ball.x += random(-5, 5);
  ball.y += random(-5, 5);
  col += .25;
}
