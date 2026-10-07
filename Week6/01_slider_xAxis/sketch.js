let slider; // variable to hold the slider

function setup() {
  createCanvas(800, 600);
  // create the slider
  // args are low value, high value, default value
  slider = createSlider(0, width, width / 2);
  // position it on the page
  slider.position(10, 20);
}

function draw() {
  background(220);
  // read the value and store it in a variable
  let x = slider.value();
  // move the circle!
  ellipse(x, height / 2, 100, 100);
}
