// Initialize a sound classifier method with SpeechCommands18w model
let classifier;

// Array containing the 18 words of SpeechCommands18w
let words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "up",
    "down",
    "left",
    "right",
    "go",
    "stop",
    "yes",
    "no",
];

// move a ball
let posX, posY;

// Variable for displaying the results on the canvas
let predictedWord = "";

async function setup() {
    // Options for the SpeechCommands18w model, the default probabilityThreshold is 0
    let options = { probabilityThreshold: 0.7 };
    // Load SpeechCommands18w sound classifier model
    classifier = await ml5.soundClassifier("SpeechCommands18w", options);

    createCanvas(800, 600);
    // Classify the sound from microphone in real time
    classifier.classifyStart(gotResult);

    posX = width/2;
    posY = height/2;
}

function draw() {
    background(250);
    // Call function for displaying background words
    displayWords();

    // Once the model outputs results start displaying the predicted word on the canvas
    if (predictedWord !== "") {
        fill(211, 107, 255);
        textAlign(RIGHT, CENTER);
        textSize(18);
        text(predictedWord, width-10, 40);
    }
    noStroke();
    fill("orange");
    // move a ball 
    moveWords();
    ellipse(posX, posY, 50);
}

// Function to display the 18 words on the canvas
function displayWords() {
    textAlign(LEFT, CENTER);
    textSize(18);
    fill(96);
    text("Say one of these words!", 10, 40);
    let x = 10;
    for (let i = 0; i < words.length; i++) {
        let y = 60+ i*20;
        fill(158);
        text(words[i], x, y);
    }
}

// move the ellipse if left, right, up, down
function moveWords() {
    if(predictedWord==="left"){
        posX--;
    } else     if(predictedWord==="right"){
        posX++;
    }  else  if(predictedWord==="up"){
        posY--;
    } else   if(predictedWord==="down"){
        posY++;
    }
}

// A function to run when we get any errors and the results
function gotResult(results) {
    // The results are in an array ordered by confidence
    console.log(results);
    // Load the first label to the text variable displayed on the canvas
    predictedWord = results[0].label;
}