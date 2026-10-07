let field; // var to hold the text box
let t = ''; // var to hold the input

function setup() {
  createCanvas(800, 600);
  // create the input 
  field = createInput('type your thing here');
  // position it
  field.position(10, 10);
  // what to do when there is an input
  field.input(readText);
}

function draw() {
  background(220);
  // write the text to screen
  text(t, 100, 100);
}

// this is triggered when there is input
function readText() {
  // store the value from the text box into the variable
  t = this.value();
}
