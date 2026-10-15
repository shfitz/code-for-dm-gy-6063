let mousexEl;
let mouseyEl;
let frameRateEl;

function setup() {
  createCanvas(800, 600);
  background(220, 20, 120);

  mousexEl = createP();
  mouseyEl = createP();
  frameRateEl = createP();

  mousexEl.position(20, 20);
  mouseyEl.position(20, 40);
  frameRateEl.position(20, 60);
}

function draw() {
  background(220, 20, 120);
  mousexEl.html("X: " + mouseX);
  mouseyEl.html("Y: " + mouseY);
  frameRateEl.html("Frame Rate: " + floor(frameRate()));
}