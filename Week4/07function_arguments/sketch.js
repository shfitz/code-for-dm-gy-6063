// Press any key to generate a new seed
let seed = 1234;

function setup() {
    createCanvas(800, 600);
}

// we can make our own functions
// and pass args to them
function drawRectangle(x, y, rot) {
    push();
    translate(x, y);
    rotate(rot);
    rect(0, 0, 40);
    pop();
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
    let inc = .01; // amt to incrment noise val
    let noiseVal = random();

    rectMode(CENTER);
    // increment noiseVal every time through the loop
    for (let x = step; x < width - step; x += step) {
        for (let y = step; y < height - step; y += step) {
           let rot = TWO_PI * noise(noiseVal);
            drawRectangle(x, y, rot); // this is our function
            noiseVal += inc;
        }
    }
}