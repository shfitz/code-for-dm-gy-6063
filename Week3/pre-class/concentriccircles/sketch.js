let num=75;

function setup() {
    createCanvas(800, 600);
    colorMode(HSB);
}

function draw() {
    background(0, 0,85);
    noFill();
    for(let i = 0; i<num; i++){
        stroke(360/num*i, 100, 100);
        ellipse(width/2, height/2, i*10+5);
    }

    for(let i = 0; i<num; i++){
        stroke(360/num*i, 100, 100);
        ellipse(mouseX, mouseY, i*10+5);
    }

}
