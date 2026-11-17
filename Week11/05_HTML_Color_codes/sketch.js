async function setup() {
  createCanvas(800, 600);
  // load JSON with callback
  background(100);
  await loadJSON("https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/web_colors.json", printData);
noLoop();
}

function printData(data) {
  textSize(18);
  let x = 10;
  // loop through and offset the text
  for (let i = 0; i < data.colors.length; i++) {
    if (i != 0 && i % 36== 0) {
      x += 200;
    }

    // use the fill color 
    fill(data.colors[i].hex);
    // write out the names of the colors
    text(data.colors[i].color, x, (i % 36) * 16.1 + 24);
    // print it all out to the console
    console.log(i + ' ' + data.colors[i].hex + ' ' + data.colors[i].color);
  }

}