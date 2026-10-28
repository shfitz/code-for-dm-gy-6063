let vid; 

async function setup() {
  createCanvas(windowWidth, windowHeight);
  // load a video
  vid = await createVideo("assets/snow.mp4");
  vid.autoplay(); // start playing it
  vid.volume(0); // we'll mute the sound for now
  vid.hide(); // hide the HTML player
  vid.loop(); // loop the video

}

function draw() {
  background(0);
  // we need to load pixels every frame
  vid.loadPixels();

for (let i = 0; i < vid.pixels.length; i += 4) {
    // read RGB values of a pixel:
    let r = vid.pixels[i];
    let g = vid.pixels[i + 1];
    let b = vid.pixels[i + 2];

    // if color is close to black, make it red
    if(r < 110 && g < 110 && b < 110) {
      vid.pixels[i] = 255;
      vid.pixels[i + 1] = 0;
      vid.pixels[i + 2] = 0;
    }

  }
  vid.updatePixels();

  image(vid, 0, 0);
}
