// remember the history of the mouse position
// aka - draw trails 
// also can act as an automatic drwaing machine

// number of points to remember
let hist = 360;
// arrays to hold mouse X * Y
let x = [];
let y = [];

// vars for autodrawing machine
// set to 1 for autodraw, 0 for mouse
let autoDraw = 1;
let incX, incY; // var for noise

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noStroke();
  // initially populate the arrays with 0s 
  for (let i = 0; i < hist; i++) {
    x[i] = 0;
    y[i] = 0;
  }
  incX=0.0;
  incY=0.0;
}

function draw() {
  background(0);

  // copy contents of the array from one index to another 
  // this is like a bucket brigade of data, moving from
  // one spot in the array to the next
  for (let i = hist - 1; i > 0; i--) {
    x[i] = x[i - 1];
    y[i] = y[i - 1];
  }
  // store the mouse X/Y in the first array item
  x[0] = mouseX;
  y[0] = mouseY;
  // instead of mouse movement
  // flip the autoDraw var to 1
  // and watch it go
  if(autoDraw){
    x[0] = noise(incX)*width;
    y[0] = noise(incY)*height;
    incX +=.0049;
    incY +=.0051;
  }

  // step through the array backwards so the most
  // recent position is drawn on top 
  for (let i = hist; i > 0; i--) {
    // earlier positions have a darker color, 'fading' away
    fill(360 - i, 100, 100);
    ellipse(x[i], y[i], (i+1), (i+1));
  }
}