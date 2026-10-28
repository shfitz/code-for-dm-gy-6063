let mirror;

async function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  mirror = await createCapture(VIDEO);
  mirror.size(640,480);
  mirror.hide();
  noStroke();
  fill(0);
}

function draw() {
  background(255);
  mirror.loadPixels();
  let stepSize = round(constrain(mouseX / 8, 6, 32)); // based on mouseX limit the size of our ellipses' diameter to be between 6 and 32 px. 

  for (let y=0; y<height; y+=stepSize) {
    for (let x=0; x<width; x+=stepSize) {

      let i = y * width + x;

      let darkness = (255 - mirror.pixels[i*4]) / 255; // alpha is always 255
      let radius = stepSize * darkness;
      ellipse(x, y, radius, radius);
    }
  }
}