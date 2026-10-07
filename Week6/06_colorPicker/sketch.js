let myPicker;

function setup() {
  createCanvas(800, 600);

  // Create a color picker and set its position.
  myPicker = createColorPicker('aliceblue');
  myPicker.position(0, 100);

}

function draw() {
  // Use the color picker to paint the background.
  let c = myPicker.value();
  background(c);

  // Display the current color as a hex string.
  text(c, 25, 55);
}