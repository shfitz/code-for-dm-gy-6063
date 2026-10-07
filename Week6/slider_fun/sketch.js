// set slider value with a sin wave
// array of sliders
let sliders = [];
//offset
let offset = 0.0;
// number of sliders
let numSliders=40;

function setup() {
    createCanvas(windowWidth, windowHeight);
    let increment = height/numSliders;
    for (let i = 0; i < numSliders; i++) {
        // create the sliders
        sliders.push(createSlider(0, 400, 50));
        // draw the sliders on screen
        sliders[i].position(10, i*increment);
        //  set their attributes
        sliders[i].style("width", "100%");
    }
}

function draw() {
    background(0);
    // loop through the array
    for (let i = 0; i < sliders.length; i++) {
        // calculate a value
        let val = sin(i / 2 + offset);
        // use sin to adjust the slider value
        sliders[i].value(val * 200 + 200);
        // update the offset
        offset += .0005
    }
}

function windowResized(){
    
     resizeCanvas(windowWidth,windowHeight);
    let increment = height/numSliders;
    for (let i = 0; i < numSliders; i++) {
        // draw the sliders on screen
        sliders[i].position(10, i*increment);
        //  set their attributes
        sliders[i].style("width", "100%");
    }
}