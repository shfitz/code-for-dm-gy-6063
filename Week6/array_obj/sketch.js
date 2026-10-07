let balls = [];

let numBalls = 1000;
let noiseX = 0.002;
let noiseY = 0.001;

function setup() {
    createCanvas(800, 600);
    colorMode(HSB);
    noStroke();
    for (let i = 0; i < numBalls; i++) {
        let oneBall = {
            x: random(width),
            y: random(height),
            diam: random(10, 50),
            h: (i/numBalls)*360
        }
        balls.push(oneBall);
    }
}

function draw() {
    background(220);
    for (let i = 0; i < numBalls; i++) {
        fill(balls[i].h, 100, 100);
        ellipse(balls[i].x, balls[i].y, balls[i].diam);
    }

    for (let i = 0; i < numBalls; i++) {
        if (random() < .5) {
            balls[i].x += noise(noiseX * frameCount);
        } else if (random() > .5) {
            balls[i].y += noise(noiseY * frameCount);
        }

        if (balls[i].x > width + (balls[i].diam / 2)) balls[i].x = -balls[i].diam / 2;
        if (balls[i].y > height + (balls[i].diam / 2)) balls[i].y = -balls[i].diam / 2;
    }

}