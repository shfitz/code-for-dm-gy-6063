let song;

// state
let shouldRestart;
let songState;

// buttons
let backButton;
let playButton;
let stopButton;

// volume
let volume;

async function setup() {
    createCanvas(800, 600);
    // load a song
    song = await loadSound('assets/bet_you_do.mp3');
    textAlign(CENTER, CENTER);
    textSize(32);
    // init buttons
    backButton = createButton("⏮");
    backButton.position(10, 10);
    backButton.style("width", width / 5 + "px");
    backButton.style("height", "30px");
    backButton.mouseClicked(backClicked);

    playButton = createButton("⏵");
    playButton.position(2 * 10 + width / 4, 10);
    playButton.style("width", width / 5 + "px");
    playButton.style("height", "30px");
    playButton.mouseClicked(playClicked);

    stopButton = createButton("■");
    stopButton.position(3 * 10 + width / 2, 10);
    stopButton.style("width", width / 5 + "px");
    stopButton.style("height", "30px");
    stopButton.mouseClicked(stopClicked);

    // init volume
    // args are low value, high value, default value
    volume = createSlider(0, 100, 20);
    // position it on the page
    volume.position(10, 50);

    // for skipping back when paused
    shouldRestart = false;
    songState = 'stopped';
}

function draw() {
    let vol = volume.value() / 100.;
    song.amp(vol);
    if (songState == 'playing') {
        background(20, 220, 120);
        text("now playing Bet You Do by Pixel Grip", width / 2, height / 2);
        playButton.html("▮▮");
    } else if (songState == 'paused') {
        background(20, 120, 220);
        text("Bet You Do by Pixel Grip is paused", width / 2, height / 2);
        playButton.html("⏵");
    } else {
        background(220, 20, 120);
        text("waiting to play Bet You Do by Pixel Grip", width / 2, height / 2);
        playButton.html("⏵");
    }
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