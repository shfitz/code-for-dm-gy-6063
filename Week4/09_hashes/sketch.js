// press 'r' for new random seed
// press 's' to save

let seed = 1234;
let doExport = false;

function setup() {
   // 6"x4" at 96 dpi
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

function drawLines(_x, _y, _inc) {
  push();
  let noiseVal = noise(_x * _inc, _y * _inc);
  translate(_x, _y);
  rotate(TWO_PI * noiseVal);
  line(-5,-3, 5, -3);
  line(-5,0, 5, 0);
  line(-5,3, 5, 3);
  pop();
}

function draw() {
  // start recording SVG BEFORE anything draws
  if (doExport) {
    beginRecordSvg("myPlot" + seed + ".svg");
  }

  noiseSeed(seed);
  randomSeed(seed);
  background(220);
  noFill();

  let step = 46; // space in grid
  let inc = .001; // amt to incrment noise val

  // increment noiseVal every time through the loop
  for (let x = step; x < width - step; x += step) {
    for (let y = step; y < height - step; y += step) {
      drawLines(x, y, inc); // this is our function
    }
  }

  if (doExport) {
    endRecordSvg();
    doExport = false;
  }
}
