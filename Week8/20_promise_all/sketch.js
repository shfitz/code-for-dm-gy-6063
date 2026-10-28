let images = [];

async function setup() {
  createCanvas(800, 600);
  pixelDensity(1);
  // useful when you are loading multiple things 
  // does not do them in order 
  let results = await Promise.all([
    loadImage("assets/one.jpg"),
    loadImage("assets/two.jpg"),
    loadImage("assets/three.jpg")
  ]);
  // results is an array of the three images, in order
  images = results;
  console.log(images);
}

function draw() {
  background(0);
  image(images[0], 0, 0);
  image(images[1], images[0].width / 2, images[0].height / 2);
  image(images[2], images[0].width, images[0].height);

  noLoop();
}