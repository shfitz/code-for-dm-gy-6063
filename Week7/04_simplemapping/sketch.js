let pMapper;
let quads = [];
let dots_array = [];
let numDots=200;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    // create mapper object
    pMapper = createProjectionMapper(this);
    for (let i = 0; i < 6; i++) {
        quads.push(pMapper.createQuadMap(width, height, 80));
    }
    // loads calibration in the "maps" directory
    //pMapper.load("maps/map.json");

    for (let x = 0; x < numDots/2; x++) {
        for (let y = 0; y < numDots/2; y++) {
            let this_circle= {
                xpos: random(0, width), 
                ypos: random(0, height),
                diam: random(10, 100)
            };
            dots_array.push(this_circle);
        }
    }
}

function draw() {
    background(0);
    for (let i = 0; i < 3; i++) {
        quads[i].displaySketch(dots);
    }
    for (let i = 3; i < 6; i++) {
        quads[i].displaySketch(stripes);
    }}

function keyPressed() {
    switch (key) {
        case "c":
            pMapper.toggleCalibration();
            break;
        case "f":
            let fs = fullscreen();
            fullscreen(!fs);
            break;
        case "l":
            pMapper.load("maps/map.json");
            break;

        case "s":
            pMapper.save("map.json");
            break;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function dots(mySketch) {
    randomSeed(1234);
    mySketch.clear();
    mySketch.push();
    mySketch.background("pink");
    mySketch.fill(255);
    mySketch.noStroke();
    for (let i = 0; i < 60; i++) {
        mySketch.ellipse(dots_array[i].xpos, dots_array[i].ypos, dots_array[i].diam);
    }
    mySketch.pop();
}


function stripes(yourSketch) {
    randomSeed(4321);
    yourSketch.clear();
    yourSketch.push();
    yourSketch.background("orange");
    yourSketch.stroke(255);
    yourSketch.strokeWeight(5);
    for (let i = 0; i < 10; i++) {
        yourSketch.line(dots_array[i].xpos, dots_array[i].ypos, dots_array[i].diam);
    }
    yourSketch.pop();
}