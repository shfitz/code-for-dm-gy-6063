let but1, but2; // vars for buttons
let butx, buty;
function setup() {
  createCanvas(800, 600);
  // createButton takes a string as an argument
  // that becomes the label of the button
  but1 = createButton("draw");
  but2 = createButton("erase");
  // these callbacks are the function triggered
  // whenever the button is pressed
  but1.mousePressed(drawCircle);
  but2.mousePressed(eraseBg);
  butx = 10;
  buty = 100;
  
  but1.position(butx, buty);
  but2.position(10, 150);
  background(0);
  noStroke();
}

function draw() {

  // nothing to see here!
}

// this is triggered when the draw button is pressed
function drawCircle() {
  fill(random(255));
  ellipse(random(width), random(height), random(10, 100));
    butx= -100;
  buty = -100;
   but1.position(butx, buty);
}

// this is triggered when the erase button is pressed
function eraseBg() {
  background(0);
    butx = 10;
  buty = 100;
  but1.position(butx, buty);
}
