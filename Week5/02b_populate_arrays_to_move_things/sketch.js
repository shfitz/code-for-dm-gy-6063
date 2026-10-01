// use arrays to store x/y and color of 100 circles
// and update the position every frame
// wrap the movement

let numCirc = 100; // num of circles
// arrays for locations
let posx = [];
let posy = [];
let hue = [];
let diam = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  // fill the arrays with data
  for (let i = 0; i < numCirc; i++) {
    posx[i] = random(width);
    posy[i] = random(height);
    hue[i] = floor(random(360));
  }
}

function draw() {
  background(0);
  noStroke();
  // draw the circles
  for (let i = 0; i < numCirc; i++) {
    fill(hue[i], 100, 100);
    ellipse(posx[i], posy[i], diam);
  }

  // update the circle position
  for (let i = 0; i < numCirc; i++) {
    posx[i] = posx[i] - 1;
    // if the circle moves offscreen
    // move it back to the other side
    if (posx[i] <= -diam / 2) {
      posx[i] = width + diam / 2;
    }
  }
}