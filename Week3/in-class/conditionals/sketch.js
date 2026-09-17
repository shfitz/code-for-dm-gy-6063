// bounce a ball
// use the mouse position to change how a shape is drawn

// create some global variables
// square in the center
let sqSize, sqX, sqY;
// circle variables
let circleXpos, xSpeed;

function setup() {
    createCanvas(800, 600);
    // set some initial values
    // square
    sqX = width/2;
    sqY = height/2;
    sqSize=100;

    // cricle
    circleXpos = width/2;
    xSpeed = random(2, 5); //get a random speed

    rectMode(CENTER);
    strokeWeight(2);
}

function draw() {
    background(220);
    // if the mouse is on the left side of the canvas
    if(mouseX<width/2){
        fill(0); // set the fill color
        // report it to the console
        // console.log("mouse is on the left");
    }else{ // this is what do do if the mouseX is 
        // anywhere except the left side of the canvas
        fill(255);
    }

    // if the mouseY is less than 200
    if(mouseY<200){
        // no stroke
        noStroke();
      // if the mouseY is between 200 and 399
    } else if(mouseY>=200 && mouseY<400){
        stroke(127);
        strokeWeight(2);
    }else{ // any other mouseY position 
        stroke(127);
        strokeWeight(20);
    }
  
    // draw our rectangle
    rect(sqX, sqY, sqSize);

    // circle time!
    noStroke();
    fill(200, 200, 10); // mustard yellow
    ellipse(circleXpos, height/2, 50); // draw the circle
    circleXpos+=xSpeed; // update the circle position
  // check if the circle is past the edges of the canvas
    if(circleXpos>=width || circleXpos<=0){
        xSpeed*= -1; // change the direction of the circle
    }
}
