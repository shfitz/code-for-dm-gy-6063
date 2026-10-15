let pMapper;
let quads = [];

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    // create mapper object
    pMapper = createProjectionMapper(this);
    for (let i = 0; i < 3; i++) {
        quads.push(pMapper.createQuadMap(50 * (i + 1), 50 / (1 + i)));
    }
    // loads calibration in the "maps" directory
    //pMapper.load("maps/map.json");
}

function draw() {
    background(0);
    for (let i = 0; i < 3; i++) {
        let c = color(255 / (i + 1), 255, 255);
        quads[i].display(c);
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