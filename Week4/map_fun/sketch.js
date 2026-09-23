function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(220);
    //map takes 5 arguments 
    // 1) an input, 2) input min, 3) input max
    // 4) output min, 5) output max
    let xPos = map(mouseX, 0, width, 400, 500);

    // map mouse movement to limited range of the ellispe
    ellipse(xPos, height/2, 100);
}
