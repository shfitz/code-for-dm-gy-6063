let nX, nY;

function setup() {
    createCanvas(800, 600);
    nX = 8;
    nY = 6;
    colorMode(HSB, 360, 100, 100);
    noFill();
    strokeWeight(2);
}

function draw() {
    background(0,0,10);
    for (let i = 0; i < nX; i++) {
        for (let j = 0; j < nY; j++) {
            let offset=noise((i*j)/frameCount);
            stroke(360*offset, 100, 50);
            let x = i * (width / nX);
            let y = j * (height / nY);
            push();
            translate(x+50, y+40);
            rotate(noise(i*0.1, j*0.11) * PI);
            rect(0, 0, 50*noise(i*0.28, j*0.3));
            pop();
            console.log(offset);
        }
    }
    // noLoop();
}
