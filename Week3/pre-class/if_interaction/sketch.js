let x, y, size;

function setup() {
    createCanvas(800, 600);
    x = width/2;
    y = height/2;
    size=100;
    background(220);
    rectMode(CENTER);
    noStroke();
}

function draw() {
    background(220);
    if(mouseX>width/2){
        fill(0);
    } else if(mouseX<width/2){
        fill(255);
    }
    if(mouseY>height/2){
        strokeWeight(10);
        stroke(127);
    } else if(mouseY<height/2){
        noStroke();
    }
    rect(x, y, size);
}
