//Analyze the frequency spectrum and waveform of sounds.
let song;
let fft;

// state
let shouldRestart;
let songState;

// buttons
let backButton;
let playButton;
let stopButton;

// volume
let volume;

class ControlButton {
    constructor(_label, _x, _y, _onClick) {
        this.button = createButton(_label);
        this.button.position(_x, _y);
        this.button.style("width", width / 5 + "px");
        this.button.style("height", "30px");
        this.button.mouseClicked(_onClick);
    }

    html(_label) {
        this.button.html(_label);
    }
}

async function setup() {
    createCanvas(windowWidth, windowHeight);
    // load a song
    song = await loadSound('assets/time_traveler.mp3');

    // init buttons
    backButton = new ControlButton("⏮", 10, 10, backClicked);
    playButton = new ControlButton("⏵", 2 * 10 + width / 4, 10, playClicked);
    stopButton = new ControlButton("■", 3 * 10 + width / 2, 10, stopClicked);

    // init volume
    // args are low value, high value, default value
    volume = createSlider(0, 100, 20);
    // position it on the page
    volume.position(10, 50);

    // for skipping back when paused
    shouldRestart = false;
    songState = 'stopped';

    fft = new p5.FFT(32);
    song.connect(fft);
}

function draw() {
    let vol = volume.value() / 100.;
    song.amp(vol);

    textAlign(CENTER, CENTER);
    textSize(32);
    if (songState == 'playing') {
        background(20, 220, 120);

        playButton.html("▮▮");

        let spectrum = fft.analyze();
        // noStroke();
        stroke(255);
        strokeWeight(10);
        for (let i = 0; i < spectrum.length; i++) {
            // values from the FFT analysis are typically very small
            let mappedVal = map(spectrum[i], 0, .2, 0, height*6, true);
            line(i * width / spectrum.length + 10, height / 2 + mappedVal, i * width / spectrum.length + 10, height / 2 - mappedVal);
        }

        //text
        fill(0);
        noStroke();
        text("now playing Time Traveler by KNOWER", width / 2, height / 2);
    } else if (songState == 'paused') {
        background(20, 120, 220);
        fill(0);
        noStroke();
        text("Time Traveler by KNOWER is paused", width / 2, height / 2);
        playButton.html("⏵");
    } else {
        background(220, 20, 120);
        fill(0);
        noStroke();
        text("waiting to play Time Traveler by KNOWER", width / 2, height / 2);
        playButton.html("⏵");
    }

    textSize(20);
    textAlign(LEFT, TOP);
    fill(0);
    noStroke();
    text("vol", volume.width + 20, 50);
}

function backClicked() {
    // if playing, jump to beginning and keep playing
    // if paused or stopped, jump to beginning and stay stopped
    if (song.isPlaying()) {
        song.jump(0);
    } else if (songState == 'paused') {
        shouldRestart = true;
    } else {
        song.stop();
        songState = 'stopped';
    }
}

function playClicked() {
    // if playing, pause
    // if paused or stopped, play
    if (song.isPlaying()) {
        song.pause();
        songState = 'paused';
    } else if (songState == 'paused') {
        song.play();
        songState = 'playing';
        if (shouldRestart) {
            song.jump(0);
            shouldRestart = false;
        }
    } else {
        song.play();
        songState = 'playing';
    }
}

function stopClicked() {
    // always stop.
    // just make sure that whenever it restarts
    //   it starts in the beginning.
    song.stop();
    songState = 'stopped';
}