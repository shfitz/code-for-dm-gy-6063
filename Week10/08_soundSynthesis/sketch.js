// variables
// buttons
let tri, sin, squ;
// 
let osc, freq, amp;
let playing = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
    osc = new p5.Oscillator();
}

function draw() {
    textAlign(CENTER, CENTER);
    textSize(32);
    background(20, 220, 120);
    if (playing) {
       
    } else {
        text("click to make some sound", width / 2, height / 2);
    }
}

function playOscillator() {
  // starting an oscillator on a user interaction like mousePressed() will enable audio in browsers that have a strict autoplay policy (most browsers).
  osc.start();
  playing = true;
}

function mouseReleased() {
  //lower volume to 0 over 0.1 seconds
  osc.amp(0, 0.1);
  playing = false;
}