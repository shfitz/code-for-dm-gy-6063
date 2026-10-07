let myButton;
let drawAball = false;
let x, y;

function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight);

    // create the button
    myButton = createButton("don't press me!!"); // create button, give it some text

    x = width / 2 - myButton.width / 2;
    y = height / 2 - myButton.height / 2;
    // position the button
    myButton.position(x, y);

    // what is the callback for the button?
    myButton.mousePressed(doSomething);
}

function draw() {
    background(240, 120, 0);

    if (drawAball) {
        fill(140, 16, 220);
        ellipse(width / 2, height / 2, 200);
    }
    x = x + random(-2,2);
    y = y + random(-2,2);
    
    myButton.position(x, y);
}

function doSomething() {
    console.log('you pressed me!');
    drawAball = !drawAball;

}
