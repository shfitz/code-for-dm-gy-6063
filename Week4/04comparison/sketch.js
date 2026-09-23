// Press any key to generate a new seed
let seed = 1234;

function setup() {
    createCanvas(800, 600);
}

function keyPressed() {
    seed = floor(random(13001));
}

function draw() {
    // seed fixes values each time through draw
    randomSeed(seed);
    noiseSeed(seed);
    background(220);

    stroke(0);
    noFill();
    textAlign(CENTER);
    textSize(16);

    noStroke();
    fill(0);
    text("random", width / 4, 30);
    text("noise", (3 * width) / 4, 30);

    // randomness, there is no relationship
    stroke(0);
    noFill();
    beginShape();
    for (let x = 40; x < width / 2 - 40; x += 8) {
        vertex(x, random(80, 220));
    }
    endShape();

    // subsequent values are related
    beginShape();
    for (let x = width / 2 + 40; x < width - 40; x += 8) {
        // update the values of the noise each time thru the loop 
        // increase and decrease the val to see bigger change
        vertex(x, map(noise(x * 0.02), 0, 1, 80, 220));
    }
    endShape();


    for (let x = 60; x < width / 2 - 40; x += 45) {
        circle(x, 350, random(10, 60));
    }
    for (let x = width / 2 + 60; x < width - 40; x += 45) {
        circle(x, 350, map(noise(x * 0.02), 0, 1, 10, 60));
    }
}
