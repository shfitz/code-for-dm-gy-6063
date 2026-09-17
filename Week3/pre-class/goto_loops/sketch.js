let x=0;
let incX = 0.0;

let y=0;
let incY = 0.0;

let counter = 0;

function setup() {
    createCanvas(800, 600);
    background('blue');
    noFill();
    stroke(255);
    strokeWeight(.5);
}

function draw() {
   background(0, 0, 255, 1);
    x=(sin(incX)/2)*width + width/2;
    y=(cos(incY)/2)*height + height/2;
    
    incX+=.042;
    incY+=.0243;
    if(frameCount%1 == 0){
        counter++;
        ellipse(x, y, 50);
    }

    if (counter == 600){
        noLoop();
    }
}
