// uses a button class and the mousePressed function
// to identify a chosen button

let but1, but2; // instances of the button
// an array could hold many more

// some things to change when buttons are pressed
let status = 'nothing'; 
let thingShape;

function setup() {
  createCanvas(400, 400);
  // 3 args : xPos, yPos, and label
  but1 = new Clicker(25, 25, 'Play');
  but2 = new Clicker(25, 60, 'Pause');
}

function draw() {
  background('aliceblue');
  
  // arrays would be cool here too
  // draw the buttons
  but1.render();
  but2.render();
  
  // display the status
  fill(0);
  text(status + ' has been clicked', 95, 40);
  
  // change the shape
  if (thingShape == 'circle') {
    fill(100, 200, 65);
    ellipse(width / 2, height / 2, 100, 100);
  } else if (thingShape == 'square') {
    fill(200, 100, 65);
    rect(150, 150, 100, 100);
  }
  
}

function mousePressed() {
  // pass the mouseX & Y to the buttons
  // depending on the button being
  // clicked, do something different
  // take the x&y position
  // of the cursor and pass it to the check() fxn 
  let val = 0;
  if (but1.check(mouseX, mouseY)) val = 1; // if true
  if (but2.check(mouseX, mouseY)) val = 2;

  if (val == 1) {
    status = 'Play';
    thingShape = 'circle';
  } else if (val == 2) {
    status = 'Pause';
    thingShape = 'square';
  }
}

// clicker class!
class Clicker {
  constructor(_x, _y, _label) { // wants x/y and name
    this.x = _x;
    this.y = _y;
    this.label = _label;
    // standard across all these buttons
    this.c = color('blue');
    this.long = 50;
    this.tall = 20;
  }
  
  // draw it on screen
  render() {
    fill(this.c);
    rect(this.x, this.y, this.long, this.tall);
    fill(255);
    text(this.label, this.x + 10, this.y + 15);
  }

  check(_x, _y) {
    // pass the mouse x & y and return true if clicked
    // return false if not clicked
    let mx = _x;
    let my = _y;
    let clicked = false;
    // checks to see if the cursor is in the box
    // boundaries
    if (mx > this.x && mx < this.x + this.long && my > this.y && my < this.y + this.tall) {
      console.log('you clicked ' + this.label);
      clicked = true;
    }
    return clicked;
  }
}