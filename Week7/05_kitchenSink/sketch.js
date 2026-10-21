let pMapper;
let quadMap, triMap, lineMap, bezMap, polyMap;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    // create mapper object
    pMapper = createProjectionMapper(this);
  polyMap = pMapper.createPolyMap(5); // how many sides?
  triMap = pMapper.createTriMap(300, 300); // dimensions
  quadMap = pMapper.createQuadMap(400, 400); // dimensions
  lineMap = pMapper.createLineMap(1); // just a line!
  bezMap = pMapper.createBezierMap(); // curves, can take an argument
    // loads calibration in the "maps" directory
    //pMapper.load("maps/map.json");
}

function draw() {
    background(0);
      lineMap.display(color("lime")); // this will just show a color
      quadMap.display(color("aliceblue")); // show a color
      triMap.displaySketch(rainbow); // display a sketch
      bezMap.display(color("orange")); // show a color
      polyMap.displaySketch(rainbow); // show a sketch
}

function rainbow(pg) {


  pg.background("pink");
  pg.colorMode(HSB, 255);

  for (let i = 0; i < 1000; i++) {
    pg.stroke(i % 255, 255, 255);
    pg.line(i, 0, i, this.height);
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