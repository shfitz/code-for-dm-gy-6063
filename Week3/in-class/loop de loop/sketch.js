// nested loops to create a grid

// variable for rotation
let rot = 0.0;

function setup() {
    createCanvas(800, 600);
    colorMode(HSB); // change the color mode
    noStroke();
}

function draw() {
    background(220); // white background
    rectMode(CENTER); // draw rectangles from the center
    for(let x = 0; x< 10; x++){ // loop 10 times for the x-axis
        for(let y= 0; y< 7; y++){ // loop 7 times for the y-axis
            // fill color is based on position
            fill(360*((x+1)*(y+1)/70), 100, 100);
            // push out of the drawing stack
            push();
            // translate canvas to get new coordinates
            translate(x*75+50, y*75+50);
            // scale rect based on frame count
            // scale(frameCount%100/50);
            // rotate rectangle
            rotate(rot);
            // draw rectangle
            rect(0,0,50,50);
            // reset all transfroms
            pop();
            // update rotation
            rot+=0.02;
        }
    }
    // reset rotation after each loop 
    rot=0.0;
}
