// press 'r' for new random seed
// press 's' to save

let seed = 1234;
let doExport = false;

function setup() {
  createCanvas(576, 384); // postcard size
}

function keyPressed() {
  if (key == "r") {
    seed = floor(random(13001));
  }
  if (key == "s") {
    doExport = true;
  }
}

function drawRectangle(_x, _y, _inc) {
  push();
  let noiseVal = noise(_x * _inc, _y * _inc);
  translate(_x, _y);
  rotate(TWO_PI * noiseVal);
  scale(2*noiseVal);
  rect(0, 0, 40);
  pop();
}

function draw() {

  noiseSeed(seed);
  randomSeed(seed);
  background(220);
  noFill();

  let step = 46; // space in grid
  let inc = .001; // amt to incrment noise val

  rectMode(CENTER);
  // increment noiseVal every time through the loop
  for (let x = step; x < width - step; x += step) {
    for (let y = step; y < height - step; y += step) {
      drawRectangle(x, y, inc); // this is our function
    }
  }

}
