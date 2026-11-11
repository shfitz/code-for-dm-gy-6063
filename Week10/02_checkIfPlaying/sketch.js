let song;

async function setup() {
    createCanvas(800, 600);
    // load a song
    song = await loadSound('assets/bet_you_do.mp3');
    textAlign(CENTER, CENTER);
}

function draw() {
    if (song.isPlaying()) {
        background(20, 220, 120);
        text("now playing Bet You Do by Pixel Grip", width / 2, height / 2);
    } else {
        background(220, 20, 120);
        text("click to play Bet You Do by Pixel Grip", width / 2, height / 2);
    }
    
}

// play based on user interaction
function mousePressed() {
    if (!song.isPlaying()) {
        song.play();
    } else {
        song.stop();
    }
}
