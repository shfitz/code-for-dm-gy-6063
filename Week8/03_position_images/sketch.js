let doggo;
let xoff, yoff;

async function setup() {
  createCanvas(800, 600);
  pixelDensity(1);
  doggo = await loadImage("assets/blixa_sm.jpg");
  
  if (doggo.width > width) doggo.resize(width, 0);
  if (doggo.height > height) doggo.resize(0, height);

  // // position in the center!
  // xoff = (width - doggo.width) / 2;
  // yoff = (height - doggo.height) / 2;
}

function draw() {
  background(0);
  push();
  // translate(xoff, yoff);
  // or follow the mouse
  imageMode(CENTER);
  translate(mouseX, mouseY);
  image(doggo, 0, 0);
  pop();
}
