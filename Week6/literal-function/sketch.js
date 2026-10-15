//Object Literals
//Similar to JSON format

//Object literal can be a way of grouping variables together
let defaults = {
    bg: "aliceblue",
    f: "yellow",
    canvasWidth: 800
}

//Object literal can also have functions
let rectangle = {
    width: 100,
    height: 200,
    x: 100,
    y: 100,
    display: function () {
        rect(this.x, this.y, this.width, this.height);
    },
    area: function () {
        return this.width * this.height;
    },
    perimeter: function () {
        return 2 * this.width + 2 * this.height;
    }
};

let a, p;

let rects = [];
let numRect = 100;

function setup() {
    createCanvas(defaults.canvasWidth, 400);
    rectMode(CENTER);
    background(defaults.bg);
    fill(defaults.f);
    for (let i = 0; i < numRect; i++) {
        let r = {
            pos:[random(width), random(height)],
            render: function () {
                rect(this.pos[0], this.pos[1], 200, 200);
            }
        }
        rects.push(r);
    }
    fill(100, 0, 200, 100);
    for (let i = 0; i < numRect; i++) {
        rects[i].render();

    }

    //   a =createP();
    //   p =createP();
    //   a.position(100, 100);
    //   p.position(100, 120);
    //   a.html("Area: " + rectangle.area());
    //   p.html("Perimeter: " + rectangle.perimeter());
}

function draw() {

}