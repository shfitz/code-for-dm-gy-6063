// noise is more organic
// always returns a value between 0-1
let seed;
let inc = 0.01;

function setup() {
    createCanvas(800, 600);
    // feed a value into noise() and get a value back
    // larger the step in the argument, the bigger the jump in noise
    seed = 1234;
    noiseSeed(seed); // will fix the output on subsequent runs
}

function draw() {
    background(220);
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            stroke(255*(noise(x*inc,y*inc)));
            point(x, y);
        }
    }
    noLoop();
}