let myMap;
let lat, lon;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  lat = 35.68;
  lon = 139.76;
  getData();
  myMap = createGeoMap({ center: [lat, lon], zoom: 3 });
}

async function getData() {
  await loadJSON("http://api.open-notify.org/iss-now.json", printData);
}

function draw() {
  if (frameCount%1200 == 0) {
    getData();
  }
}

// The map follows the canvas size.
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  getData();
}

function printData(data) {
  console.log(data);
  clear();
  lat = data.iss_position.latitude;
  lon = data.iss_position.longitude;
  myMap.flyTo(lat, lon);
  const p = myMap.toScreen(lat, lon);

  stroke(255);
  strokeWeight(5);
  fill('#ff33eb');
  circle(p.x, p.y, 25);
  console.log(p.x, p.y);
}

