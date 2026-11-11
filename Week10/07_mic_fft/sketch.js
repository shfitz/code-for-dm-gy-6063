//Analyze the frequency spectrum and waveform of sounds.
let mic;
let fft;
let useMic = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
    fft = new p5.FFT(32);
}

function draw() {
    textAlign(CENTER, CENTER);
    textSize(32);
    background(20, 220, 120);
    if (useMic) {
        let spectrum = fft.analyze();
        // noStroke();
        stroke(255);
        strokeWeight(10);
        for (let i = 0; i < spectrum.length; i++) {
            let mappedVal = map(spectrum[i], 0, .1, 0, height * 6, true);
            line(i * width / spectrum.length + 10, height / 2 + mappedVal, i * width / spectrum.length + 10, height / 2 - mappedVal);
        }
    } else {
        text("click to use the mic", width / 2, height / 2);
    }
}

function mousePressed() {
    if (!useMic) {
        mic = new p5.AudioIn();
        mic.start();                 // request mic permission
        mic.connect(fft);            // spectrum
        useMic = true;
    }
}