// variables for x value and 
// amount to increment
let x = 0;
let incX = 0.0076;

// variables for y value and 
// amount to increment
let y = 0;
let incY = 0.0098;

// as x and y increment over time, they should be global

function setup() {
    createCanvas(800, 600);
    strokeWeight(2);
    noFill();
   background(33);
}

function draw() {
    // update the background, but have it 
    // slightly trnasparent
    // this will leave a trail behind any
    // objects updating over time
    background(33, 75);
    // update the X and Y position using
    // sin() and cos(). 

    // these return values
    // between -1.0 and 1.0
    let sinX = sin(x);
    let cosY = cos(y);

    // add one and divide by 2 
    // to give a range between 0.0 and 1.0
    let xMult = (sinX +1)/2;
    let yMult = (cosY+1)/2;

    // multiply this 0-1 value by width and height
    let xPos = xMult*width;
    let yPos = yMult*height;

    // draw the ellipse
    fill(255);
    noStroke();
    ellipse(xPos, yPos, 50);
    
    // increment the values for sin and cos
    // to be used in the next loop
    x+=incX;
    y+=incY;

    // use a counter to draw a stroke around
    // an ellipse every N-frames
    // if(frameCount%20 == 0){
    //     noFill();
    //     stroke(10);
    //     ellipse(xPos, yPos, 50);
    // }
}
