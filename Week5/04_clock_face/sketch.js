// oh hey, it's a clock!

let ticksX = []; // array to hold Xpos
let ticksY = []; // array to hold Ypos
let numTicks = 60; // how many steps
let rad = 250; // radius

function setup() {
    createCanvas(800, 600);
    // work in degrees instead of radians
    angleMode(DEGREES);

    // populate the array with the points for the clock face
    // to get the poistion around a circle
    // x = sin(angle), y=cos(angle)
    // in trig, circles are drawn counterclockwise and rotated off axis
    // see this image for reference https://as2.ftcdn.net/v2/jpg/05/07/15/59/1000_F_507155913_JHrnH8xtx1hfmFqKekHPLrZPQwlAu3LV.jpg
    // so we offset by adding 180 to % * -360 
    for (i = 0; i < numTicks; i++) {
        ticksX[i] = width / 2 + rad * sin(i / numTicks * -360 + 180);
        ticksY[i] = height / 2 + rad * cos(i / numTicks * -360 + 180);
    }
}

function draw() {
    background(0);
    // all the drawing stuff is now in functions
    drawHour(); // hour hand
    drawMinute(); // min hand
    drawSecond(); // sec hand
    drawClockFace(); // all the ticks on the clock face
}

// draw the hour dot
function drawHour() {
    // distinct color and size
    stroke(255, 0, 0);
    strokeWeight(15);
    // loop through the array
    for (let i = 0; i < numTicks; i++) {
        if (hour() == i) { // if the current hours matches 
            // draw the point. because we have 60 dots on a 12 hours face
            // and hours are given as 0-23
            // we take the remainder of i divided by 12 (i%12). this gives us the current hour
            // in 1-12 AM/PM. multiply it by 5 to find the correct dot to draw it on
            point(ticksX[i%12 * 5], ticksY[i%12 * 5]);
        }
    }
}

// draw the minute dot
function drawMinute() {
    // unique color and size
    stroke(0, 255, 0);
    strokeWeight(10);
    // if the current minute matches the index
    for (let i = 0; i < numTicks; i++) {
        if (minute() == i) {
            point(ticksX[i], ticksY[i]); // draw the minute dot
        }
    }
}
// draw the second dot
function drawSecond() {
    // unique color and size
    stroke(0, 0, 255);
    strokeWeight(8);
    // if the current sec matches the index
    for (let i = 0; i < numTicks; i++) {
        if (second() == i) {
            point(ticksX[i], ticksY[i]); // draw the dot
        }
    }
}
// draw all th tick marks
function drawClockFace() {
    stroke(255);
    strokeWeight(3);
    // loop throught both arrays and draw 60 points around a circle
    for (let i = 0; i < numTicks; i++) {
        point(ticksX[i], ticksY[i]);
    }
}