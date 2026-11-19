const base_url = "http://www.omdbapi.com/?apikey=YOUR_API_KEY_GOES_HERE&t=";

let movie_info;
let movie_poster;
let movie_name;
let btn;

async function setup() {
  createCanvas(800, 600);
 
  movie_name = createInput();
  movie_name.position(400, 50);
  btn = createButton("get movie");
  btn.position(560, 50);
  btn.size(170, 34);
  btn.mousePressed(requestMovie);
  background(220);
}

async function requestMovie() {
  let title = movie_name.value();
   movie_info = await loadJSON(base_url + title);
  
  if(!movie_info.Error){
  if(movie_info.Poster != "N/A") movie_poster = await loadImage(movie_info.Poster, gotImage);
  }else{

  }
}

function gotImage(poster){
  background(220);
  image(poster, 10, 10);
  // console.log(poster);
  text("Plot: " + movie_info.Plot, poster.width+50, 10, width-poster.width-75, height);
}