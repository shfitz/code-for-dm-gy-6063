let spheres = []; // array to hold many spheres
let numspheres = 20;

// here's the class for Ball
class Ball {
    // the constructor is like setup()
    // it's called only once when the object is first created
    constructor(mySize) {
        // data local to the instance is identified
        // by 'this' - like 'this object's variable' 
        this.diam = mySize;

        this.col = color(random(255), random(255), random(255), random(255));

        this.xpos = random(this.diam, width - this.diam);
        this.ypos = random(this.diam, height - this.diam);

        this.xspeed = random(-5, 5);
        this.yspeed = random(-5, 5);
    }
    // method to update the position
    update() {
        this.xpos += this.xspeed;
        this.ypos += this.yspeed;
    }
    // method to check if there is a wall collision
    wallCheck() {
        if (this.xpos >= width - this.diam / 2 || this.xpos <= this.diam / 2) {
            this.xspeed = -this.xspeed;
        }
        if (this.ypos >= height - this.diam / 2 || this.ypos <= this.diam / 2) {
            this.yspeed = -this.yspeed;
        }
    }
    // method to draw the ball
    render() {
        noStroke();
        fill(this.col);
        ellipse(this.xpos, this.ypos, this.diam);
    }
}

function setup() {
    createCanvas(800, 600);
    for (let i = 0; i < numspheres; i++) {
        spheres.push(new Ball(10+i*10));
    }
}

function draw() {
   background(255);
    // call the methods in the object
    for (let i = 0; i < spheres.length; i++) {
        spheres[i].update();
        spheres[i].wallCheck();
        spheres[i].render();
    }
}