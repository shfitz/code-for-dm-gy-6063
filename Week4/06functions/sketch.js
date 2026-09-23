// Press any key to generate a new seed
let seed = 1234;
let inc = .01;
let noiseVal;

function setup() {
    createCanvas(800, 600);
    noiseVal = random();
}

// we can make our own functions
function drawRectangle() {
    let rot = TWO_PI * noise(noiseVal);
    noiseVal += inc;
    rotate(rot);
    rect(0, 0, 40);
}

function keyPressed() {
    seed = floor(random(13001));
}

function draw() {
    // seed fixes values each time through draw
    noiseSeed(seed);
    randomSeed(seed);
    background(220);
    noFill();

    let step = 64; // space in grid

    rectMode(CENTER);
    // increment noiseVal every time through the loop
    for (let x = step; x < width - step; x += step) {
        for (let y = step; y < height - step; y += step) {
            push();
            translate(x, y);
            drawRectangle(); // this is our function
            pop();

        }
    }
    noLoop();
}