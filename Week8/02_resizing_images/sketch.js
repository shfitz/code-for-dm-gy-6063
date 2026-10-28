let doggo;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
    // it's typically better to use an image scaled to the size you want to 
  // begin with instead of loading a huge something and scaling in code
  // doggo = await loadImage("assets/blixa_sm.jpg");
  // but .... 
  doggo = await loadImage("assets/blixa.jpg");
  if (doggo.width > width) doggo.resize(width, 0);
  if (doggo.height > height) doggo.resize(0, height);
}

function draw() {
  background(0);
  image(doggo, 0, 0);
}
