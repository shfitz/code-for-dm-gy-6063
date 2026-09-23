// noise is more organic
// always returns a value between 0-1
let noiseVal;
let seed;

function setup() {
    createCanvas(800, 600);
    // feed a value into noise() and get a value back
    // larger the step in the argument, the bigger the jump in noise
    noiseVal = 10;
    seed = 1234;
    noiseSeed(seed); // will fix the output on subsequent runs
}

function draw() {
    background(220);
    let nValue = noise(noiseVal);
    textSize(32);
    text("intial noise: " + nValue, 100, 100);
    noiseVal += .01;
    let incValue = noise(noiseVal);
    text("small step: " + incValue, 100, 200);
    noiseVal += 1.0;
    incValue = noise(noiseVal);
    text("bigger step: " + incValue, 100, 300);
    noLoop();
}