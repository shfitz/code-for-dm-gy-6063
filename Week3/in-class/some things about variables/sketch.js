// this is a global variable
// it can be accessed anywhere in the program
let myVar = 10;

// circle variables
let yPos, xPos;

function mousePressed(){
    // update the yPos variable
     yPos =random(100, height-100);
}

function setup() {
    createCanvas(800, 600);
    myVar = 100; // changing a global variable

    // set the values in the circle variables
    yPos = height/2;
    xPos =random(200, width-200);
}

function draw() {
    background(220);
    // a local variable, not accessiable
    // outside the draw function
    let circleSize = mouseY;
    ellipse(xPos, yPos, circleSize);
}