// variables
let myButton;
let myInput;
let myText;
let stuff;
let bgColor;

function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight);

    // create a button
    myButton = createButton('submit'); // create button, give it some text
    // make an input box
    myInput = createInput('type a color');
    // position the input
    myInput.position(20, 20);
    // position the button
    myButton.position(25 + myInput.width, 20);

    // what is the callback for the button?
    myButton.mousePressed(changeColor);
    
    // .input() is a calback for something is being entered
    myInput.input(typing);
    // named background colors from 
    // https://htmlcolorcodes.com/color-names/
    bgColor = 'orange';
    
    // store the text to reuse and display realtime
    myText = '';
    stuff='';
}

function draw() {
    background(bgColor);
    text('real time input: ' + stuff, 20, 60);
    text(myText, 20, 80);
}

function changeColor() {
    // cast as a color when assigning it to the variable
    bgColor = color(myInput.value());
}

function typing() {
    stuff = this.value();
}
