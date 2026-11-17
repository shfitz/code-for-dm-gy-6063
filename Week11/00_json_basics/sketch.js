let data;

async function setup() {
  createCanvas(800, 600);
  data = await loadJSON('assets/prefs.json');
  let user = data.name;
  let bev = data.drink;
  let breakfast = data.food;
  console.log(user + ' likes ' + bev + ' and '+ breakfast);
  
  background(250);
  textSize(24);
  text(user + ' likes ' + bev + ' and '+ breakfast, 10, 10, width-10, height-10);
}
