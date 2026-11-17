// https://openweathermap.org/api

let weather;
let bgColor;

async function setup() {
	createCanvas(800, 600);
  weather = await loadJSON("https://api.openweathermap.org/data/2.5/weather?lat=40.650002&lon=-73.949997&appid=527babb16277dfd8046941982848d4ae&units=imperial");	
}

function draw() {
	background(220);
	fill(0);
	textSize(24);
    textAlign(CENTER, CENTER);
	text("The current temperature in Brooklyn is " + getTemp(weather) + " degrees Fahrenheit", width/2, height/2);	
}

function getTemp(data){
	let temp = data.main.temp;
	return temp;
}