// https://sunrise-sunset.org/api

let data;
let url ='https://api.sunrise-sunset.org/v2?lat=40.660583%20&lng=-73.94809';

async function setup() {
  createCanvas(400, 400);
   data = await loadJSON(url);
  console.log(data); // print the whole object
  // just print the sunrise time
  console.log('sunrise : ' + data.sunrise);
  // just print the sunset time
  console.log('sunset : ' + data.sunset);
}

function draw() {
  background(220);
}