// example illustrating how to DIY a text box 
// moving the mouse too quickly will cause it to lose focus.
// increase the threshold size to change the tolerance

// variables for the text and the rect around it
let sqx, sqy, sqw, sqh;
let threshold = 20;
// dummy text
let myText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function setup() {
  createCanvas(400, 400);
  // initialize the vars
  sqx = 10;
  sqy=10;
  sqw=100,
  sqh=100;
}

function draw() {
  background(220);
  // word wrap style
  textWrap(WORD);
  // draw the rect and the handle 
  rect(sqx, sqy, sqw, sqh);
  ellipse(sqx+sqw, sqy+sqh, threshold/2);
  // write the text, width and height indicate where txt should wrap
  text(myText,sqx+5, sqy+15, sqw, sqh);
}

// if you've clicked and dragged the mouse in the "handle" area
// update the variables
function mouseDragged(){
  if(dist(mouseX, mouseY, sqx+sqw, sqy+sqh)< threshold){
     sqw = mouseX-sqx;
    sqh = mouseY-sqy;
     }
}