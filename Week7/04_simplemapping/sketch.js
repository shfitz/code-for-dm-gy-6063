let pMapper;
let quads = [];
let dots_array = [];
let numDots=200;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    // create mapper object
    pMapper = createProjectionMapper(this);
    for (let i = 0; i < 3; i++) {
        quads.push(pMapper.createQuadMap(width, height));
    }
    // loads calibration in the "maps" directory
    //pMapper.load("maps/map.json");

    for (let x = 0; x < numDots; x++) {
        for (let y = 0; y < 6; y++) {
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
}

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