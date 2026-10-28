let doggo;

async function setup() {
    doggo = await loadImage("assets/blixa.jpg");
    createCanvas(windowWidth, windowHeight);
    print("Original size: " + doggo.width + " , " + doggo.height);
    noLoop();
}

function draw() {
    background(0);
    image(doggo, 0, 0);
}
