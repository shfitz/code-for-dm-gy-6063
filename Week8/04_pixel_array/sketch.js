let img;
let rad = 12;
let diam = rad * 2;
let xoff, yoff;

async function setup() {
  img = await loadImage("assets/blixa.jpg");
  createCanvas(800, 600);
  console.log("Original size: " + img.width + " x " + img.height);

  if (img.width > width) {
    img.resize(width, 0);
  }
  if (img.height > height) {
    img.resize(0, height);
  }
  console.log("Scaled size: " + img.width + " x " + img.height);

  img.loadPixels();
  console.log("pixel array size: " + img.pixels.length);
  xoff = (width - img.width) / 2;
  yoff = (height - img.height) / 2;
}

function draw() {
  background(0);
  noStroke();

  // map circle radius to mouse position
  rad = floor(map(mouseX, 0, width, 2, 32));
  dim = 2 * rad;
  translate(xoff, yoff);
  // draw circles on screen that correspond to image dimensions
  // we'll fill this in with the color of the images
  for (let y = rad; y < img.height - rad; y += dim) {
    for (let x = rad; x < img.width - rad; x += dim) {
      // pull x,y from pixel array index 
      let pixelNum = 4 * (y * img.width + x);
      // set the rgb valed based on the pixel vals
      // arranged Red, Green, Blue, Alpha
      let redValue = img.pixels[pixelNum];
      let greenValue = img.pixels[pixelNum + 1];
      let blueValue = img.pixels[pixelNum + 2];

      fill(redValue, greenValue, blueValue);
      ellipse(x, y, 1.75 * rad, 1.75 * rad);
    }
  }
}
