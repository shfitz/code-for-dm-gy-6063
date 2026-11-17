let data;
let user = [];
let bev = [];
let breakfast = [];

async function setup() {
  createCanvas(800, 600);
  data = await loadJSON("assets/prefs.json");
  // iterate over values in the data
  for (let i = 0; i < data.likes.length; i++) {
    user[i] = data.likes[i].name;
    bev[i] = data.likes[i].drink;
    breakfast[i] = data.likes[i].food;
  }
}

function draw() {
  background(220);
  // write it out
  textSize(24);
  for (let i = 0; i < data.likes.length; i++) {
    text(user[i] + " likes " + bev[i] + " and " + breakfast[i],20,40 * (1 + i));
  }
  noLoop();
}
