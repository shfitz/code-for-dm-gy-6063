let bouncer1, bouncer2; // some instances of a class

function setup() {
  createCanvas(800, 600);
  background(255);
  // create a new ball with a random size
  bouncer1 = new Ball(10);
  bouncer2 = new Ball(100);
}

// Ball qualities
// size, color, position
// update pos, boundary check, draw the thing
class Ball {
  constructor(anythingunderthesun) { // size is determined by an argument
    // let locSize = _mySize;
    this.col = color( // color is randomly determined
      random(0, 255),
      random(0, 255),
      random(0, 255),
      random(10, 150)
    );
    this.size = anythingunderthesun; // size has been passed as an argument
    this.xDir = random(-3, 3);
    this.yDir = random(-3, 3);

    this.x = random(anythingunderthesun / 2, width - anythingunderthesun / 2);
    this.y = random(anythingunderthesun / 2, height - anythingunderthesun / 2);
  }

  update() {
    this.x += this.xDir;
    this.y += this.yDir;
    if (this.x <= this.size / 2 || this.x >= width - this.size / 2)
      this.xDir *= -1;
    if (this.y <= this.size / 2 || this.y >= height - this.size / 2)
      this.yDir *= -1;
  }

  render() {
    fill(this.col);
    ellipse(this.x, this.y, this.size);
  }

  changeColor() {
    this.col = color(
      random(0, 255),
      random(0, 255),
      random(0, 255),
      random(50, 200)
    );
  }
}

function draw() {
  background(255, .5);
  noStroke();
  // update the balls
  bouncer1.update();
  bouncer2.update();

  //render the balls
  bouncer1.render();
  bouncer2.render();

  // check if the balls are intersecting
  if ( // if the distance between the center of the balls is less than the size/2
    dist(bouncer1.x, bouncer1.y, bouncer2.x, bouncer2.y) <=
    bouncer1.size / 2 + bouncer2.size / 2
  ) {
 // set a new direction
    bouncer2.xDir *= random(-1.5, -0.5);
    bouncer1.xDir *= random(-1.5, -0.5);
    bouncer2.yDir *= random(-1.5, -0.5);
    bouncer1.yDir *= random(-1.5, -0.5);

    bouncer2.changeColor();
    bouncer1.changeColor();
  }
}