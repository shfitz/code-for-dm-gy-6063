// how a for loop operates

// variables for size and location offset
let xoff, sizeoff;

function setup() {
    createCanvas(800, 600);
    xoff = 50;
    sizeoff = 10;
}

function draw() {
    background(220);

    // for(thing to check, what to check against, what to do when you are done with a loop)
    for(let i = 0; i<=8; i++){
        // draw our circles here with an offset for 
        // position and size
        ellipse(i*100 + xoff, 100, i*10+sizeoff);
    }
    noLoop(); // only run this loop once
}
