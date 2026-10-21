let pMapper; // mapper instance
let myQuad; // one face

function setup() {
    // p5.mapper needs WEBGL in createCanvas
    createCanvas(windowWidth, windowHeight, WEBGL);
    // create the mapper
    pMapper = createProjectionMapper(this);
    // create one quad surface
    myQuad = pMapper.createQuadMap(400, 400);
}

function draw() {
    background(0);
    //pass the name of a drawing function into displaySketch()
    myQuad.displaySketch(myDrawing);
}

// p5.mapper passes an offscreen canvas (mySketch) into this function
function myDrawing(mySketch) {
    // anything drawn on this surface needs 'mySketch.' in front of it
    mySketch.clear();
    mySketch.push();
    mySketch.background("orange");
    mySketch.stroke(0);
    mySketch.strokeWeight(4);
    mySketch.line(0, 0, 400, 400); // diagonal line across the quad
    mySketch.noStroke();
    mySketch.fill(255);
    mySketch.ellipse(myQuad.width/2, myQuad.height/2, 150); // circle in the center of the quad
    mySketch.pop();
}
function keyPressed() {
    if (key === "c") {
        pMapper.toggleCalibration();
    }
    if (key === "s") {
        pMapper.save("map.json");
    }
    if (key === "l") {
        pMapper.load("maps/map.json");
    }
}