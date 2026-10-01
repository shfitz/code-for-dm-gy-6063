// draw trails — an automatic drwaing machine

// number of points to remember
let hist = 360;
// arrays to hold mouse X * Y
let x = [];
let y = [];

// vars for autodrawing machine
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
  // give the noise an initial value
  // by starting with a different value
  // the x & y wonl;t follow one another exactly
  incX = 0.1;
  incY = 1.33;
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
  // store X/Y values in the first array item
  // multiply the results of noise by width and height
  x[0] = noise(incX) * width;
  y[0] = noise(incY) * height;
  incX += .005;
  incY += .0066;


  // step through the array backwards so the most
  // recent position is drawn on top 
  for (let i = hist; i > 0; i--) {
    // update fill color, draw the ellipse
    fill(360 - i, 100, 100);
    ellipse(x[i], y[i], (i + 1), (i + 1));
  }
}