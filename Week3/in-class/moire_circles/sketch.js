// setup runs once
function setup() {
    createCanvas(800, 600);
    colorMode(HSB); // change the coloe mode
}

function draw() {
    background(0, 0, 85); //a whiteish bg color
    noFill();

    // draw 50 concentric circles
    // in the center of the canvas
    for(let i = 0; i<50; i++){
        // change the stroke color every time
        // 360 Hue values multiplied by a fraction 
        stroke(360*(i/50), 100, 100);
        // draw the circle
        ellipse(width/2, height/2, i*10+2);
    }

    // draw 50 concentric circles
    // following the mouse
    for(let i = 0; i<50; i++){
        // invert the colors from the static circles
        stroke(360-(360*(i/50)), 100, 100);
        ellipse(mouseX, mouseY, i*10+2);
    }
}
