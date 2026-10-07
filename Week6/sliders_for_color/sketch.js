let r, g, b, a;

function setup() {
  createCanvas(800, 600);
  rectMode(CORNERS);
  r = createSlider(0, 255, 200);
  r.position(6, 10);
  g = createSlider(0, 255, 100);
  g.position(6, 50);
  b = createSlider(0, 255, 200);
  b.position(6, 90);
  a = createSlider(0, 255, 0);
  a.position(6, 130);
}

function draw() {
  background(255);
  fill(180, 0, 220);
  rect(50, 200, width-100, height-100);
  fill(r.value(), g.value(), b.value(), a.value());
  rect(100, 250, width-50, height-50);
  fill(0);
  text('Red: ' + r.value(), 10, 42);
  text('Green: ' + g.value(), 10, 82);
  text('Blue: ' + b.value(), 10, 122);
  text('Alpha: ' + a.value(), 10, 162);
}

function mouseReleased(){
   console.log("color val: ("+r.value()+","+g.value()+","+b.value()+","+a.value()+")");
}