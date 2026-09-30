// use arrays to store x/y of 100 circles

let numCirc = 2500; // num of circles
// arrays for locations
let posx = [];
let posy = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // fill the arrays with data
  for (let i = 0; i < numCirc; i++) {
    posx[i] = random(width);
    posy[i] = random(height);
  }
}

function draw() {
  background(0);
  noStroke();
  fill(255, 75);
  // draw the circles
  for (let i = 0; i < numCirc; i++) {
    ellipse(posx[i], posy[i], 50, 50);
  }
}