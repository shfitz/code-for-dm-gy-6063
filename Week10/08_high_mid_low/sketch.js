// adapted from https://p5sound.com/analysis-fft/index.html
let song, fft;

async function setup() {
  createCanvas(800, 600);
  colorMode(HSB);
  song = await loadSound('assets/time_traveler.mp3');
  
  fft = new p5.FFT(512);
  song.connect(fft);
}

function draw() {
  background(240);
  let spectrum = fft.analyze();
  let bands = [
    energy(spectrum, 20, 250),
    energy(spectrum, 250, 2000),
    energy(spectrum, 2000, 12000),
  ];
  for (let i = 0; i < bands.length; i++) {
    noStroke();
    fill(i*360/bands.length, 100, 100);
    circle(i*width/bands.length + (width/bands.length/2), height / 2, map(bands[i], 0, 1, 10, 200));
  }
  textAlign(LEFT);
  if (!song.isPlaying()) {
    text('click to play', 10, 20);
  }
}

// Average energy between lowHz and highHz, scaled to 0..1 using a -100 dB … -10 dB range.
function energy(spectrum, lowHz, highHz) {
  let nyquist = getAudioContext().sampleRate / 2;
  let lo = floor(lowHz / nyquist * spectrum.length);
  let hi = min(spectrum.length - 1, ceil(highHz / nyquist * spectrum.length));
  let sum = 0;
  for (let i = lo; i <= hi; i++) sum += spectrum[i];
  let avg = sum / (hi - lo + 1);
  return constrain(map(20 * Math.log10(avg + 1e-6), -100, -10, 0, 1), 0, 1);
}

function mousePressed() {
  if (!song.isPlaying()) song.play();
}
