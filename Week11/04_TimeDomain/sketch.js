let tempArray = [];
let timeArray = [];
let url ="https://archive-api.open-meteo.com/v1/archive?latitude=40.65&longitude=-73.99&start_date=2026-11-17&end_date=2026-11-18&hourly=temperature_2m&timezone=America%2FNew_York&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch";
let loTemp = 999;
let hiTemp = -100;

async function setup() {
  createCanvas(800, 600);
  loadData(url);
}

function draw() {
  background(220);
  fill(0);
    for(let i = 0; i<timeArray.length;i+=2){
    // console.log(timeArray[i]);
    text(timeArray[i].slice(-5),i*width/timeArray.length,height-30)
  }
  noFill();
  beginShape();
      for(let i = 0; i<tempArray.length;i+=2){
    // console.log(timeArray[i]);
    let scaledY = map(tempArray[i], loTemp, hiTemp, height - 50, 50);
    vertex(i*width/timeArray.length,scaledY);
  }
  endShape();
  noLoop();
}

async function loadData(location){
    weather = await loadJSON(location);
    getTemp(weather);
}

function getTemp(data) {
  timeArray = data.hourly.time;
  tempArray = data.hourly.temperature_2m;
  console.log(timeArray.length);
  for(let i = 0; i<tempArray.length;i++){
    if(tempArray[i] > hiTemp) hiTemp = tempArray[i];
    if(tempArray[i] < loTemp) loTemp = tempArray[i];
  }

}
