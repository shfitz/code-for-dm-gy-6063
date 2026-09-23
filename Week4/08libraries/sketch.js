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

function drawRectangle(x, y, rot) {
    push();
    translate(x, y);
    rotate(rot);
    rect(0, 0, 40);
    pop();
}

function draw() {
  // start recording SVG BEFORE anything draws
  if (doExport){ 
    beginRecordSvg("myPlot"+seed+".svg");
  }

    noiseSeed(seed);
    randomSeed(seed);
    background(220);
    noFill();

    let step = 46; // space in grid
    let inc = .01; // amt to incrment noise val
    let noiseVal = random();

    rectMode(CENTER);
    // increment noiseVal every time through the loop
    for (let x = step; x < width - step; x += step) {
        for (let y = step; y < height - step; y += step) {
           let rot = TWO_PI * noise(noiseVal);
            drawRectangle(x, y, rot); // this is our function
            noiseVal += inc;
        }
    }

  if (doExport) {
    endRecordSvg();
    doExport = false;
  }
}
