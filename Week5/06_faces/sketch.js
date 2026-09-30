let ticksX = []; // array to hold Xpos
let ticksY = []; // array to hold Ypos
let numTicks = 60; // how many steps
let rad = 250; // radius

function setup() {
    createCanvas(800, 600);
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
    background(220);
    // drawHour();
    // drawMinute();
    drawSecond();
}

function drawHour() {
    stroke(255, 0, 0);
    for (let i = 0; i < numTicks; i++) {
        if (hour() == i) {
            strokeWeight(10);
        } else {
            strokeWeight(3);
        }
        point(ticksX[i * 2.5], ticksY[i * 2.5]);
    }
}

function drawMinute() {
    stroke(0, 255, 0);
    for (let i = 0; i < numTicks; i++) {
        if (minute() == i) {
            strokeWeight(10);
        } else {
            strokeWeight(3);
        }
        point(ticksX[i], ticksY[i]);
    }
}

function drawSecond() {
    stroke(0, 0, 255);
    for (let i = 0; i < numTicks; i++) {
        if (second() == i) {
            strokeWeight(10);
        } else {
            strokeWeight(3);
        }
        point(ticksX[i], ticksY[i]);
    }
}