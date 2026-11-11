let sound;

async function setup() {
    createCanvas(800, 600);
    // load a sound
    sound = await loadSound('assets/beep.mp3');
}

function draw() {
    background(220);
    textAlign(CENTER, CENTER);
    text("click to beep", width/2, height/2);
}

// play based on user interaction
function mousePressed() {
  sound.play();
}
