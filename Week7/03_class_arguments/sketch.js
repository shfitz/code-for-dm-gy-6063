let bouncer1, bouncer2; // some instances of a class

// setup!
function setup() {
  createCanvas(800, 600);
  background(255);
  // create a new ball with a random size
  bouncer1 = new Ball(random(30, 200));
  bouncer2 = new Ball(random(30, 200));
}

// Ball qualities. size is determined in the constructor
// size, color, position
// update pos, boundary check, draw the thing
class Ball {
  constructor(_mySize) {
    let locSize = _mySize;
    this.col = color(
      random(0, 255),
      random(0, 255),
      random(0, 255),
      random(0, 255)
    );
    this.size = _mySize; // size is passed as an argument
    this.xDir = random(-3, 3);
    this.yDir = random(-3, 3);

    this.x = random(locSize / 2, width - locSize / 2);
    this.y = random(locSize / 2, height - locSize / 2);
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
      random(0, 255)
    );
  }
}

// let's draw our scene!
function draw() {
  background(255, 100);
  noStroke();
  bouncer1.update();
  bouncer1.render();
  bouncer2.update();
  bouncer2.render();

  if (
    dist(bouncer1.x, bouncer1.y, bouncer2.x, bouncer2.y) <=
    bouncer1.size / 2 + bouncer2.size / 2
  ) {
    bouncer2.col=color(random(0, 255), random(0, 255), random(0, 255), random(0, 255));
    bouncer1.col=color(random(0, 255), random(0, 255), random(0, 255), random(0, 255));

    bouncer2.xDir *= -1;
    bouncer1.xDir *= -1;
    bouncer2.yDir *= -1;
    bouncer1.yDir *= -1;

    bouncer2.changeColor();
    bouncer1.changeColor();
  }
}