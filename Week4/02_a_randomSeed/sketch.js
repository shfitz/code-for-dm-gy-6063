let randVal;
let randRange;
let seed;

function setup() {
    createCanvas(800, 600);
    // a random seed fixes the randomness so it returns the 
    // same results each time
    seed = 1234;
    randomSeed(seed);
    randVal = random();
    randRange = random(0, width);
}

function draw() {
    background(220);
    textSize(32);
    for(let x = 0;x<width;x++){
            for(let y = 0;y<height;y++){
        stroke(floor(random(255)));
        point(x,y);
    }
    }
    noLoop();
}