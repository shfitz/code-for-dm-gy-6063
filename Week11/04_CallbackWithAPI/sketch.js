let weather = "loading";
let bgColor = 127;
let lowT, highT;
let url ="https://api.openweathermap.org/data/2.5/weather?lat=40.650002&lon=-73.949997&appid=527babb16277dfd8046941982848d4ae&units=imperial";

async function setup() {
  createCanvas(800, 600);
  loadData(url);
  lowT = color(0, 0, 127);
  highT = color(190, 75, 0);
}

function draw() {
  background(bgColor);
  fill(255);
  textSize(24);
  textAlign(CENTER, CENTER);
  if (frameCount % 18000 == 0) loadData(url);
  text("Current temperature in Brooklyn is " + weather + " degrees Fahrenheit", width/2, height/2);
}

async function loadData(location){
    await loadJSON(location, getTemp);
}

function getTemp(data) {
  weather = data.main.temp;
  console.log(weather);
  bgColor = lerpColor(lowT, highT, (weather/100.0));
}
