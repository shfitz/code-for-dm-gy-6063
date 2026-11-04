
let faceMesh;
let video;
let faces = [];
let options = { maxFaces: 1, refineLandmarks: false, flipHorizontal: false };

async function setup() {
  createCanvas(800, 600);
  
  // Load the faceMesh model asynchronously
  faceMesh = await ml5.faceMesh(options);
  
  // Create the webcam video and hide it
  video = createCapture(VIDEO);
  video.size(800, 600);
  video.hide();
  
  // Start detecting faces from the webcam video
  faceMesh.detectStart(video, gotFaces);
}

function draw() {
  // Draw the webcam video
  image(video, 0, 0, width, height);

  // id we have only one face, draw the eyes
  if(faces.length == 1) {
    let leftEye = faces[0].leftEye.keypoints;
    let rightEye = faces[0].rightEye.keypoints;
    fill(255);
    stroke(0);
    // draw left eye
    // i know the eyes have 17 keypoints each
    beginShape();
    for(let i = 0; i<8;i++){
      vertex(leftEye[i].x,leftEye[i].y);
    }
    for(let i = 16;i>7;i--){
      vertex(leftEye[i].x,leftEye[i].y);
    }
    endShape();
    // draw pupil

    // draw right eye
    beginShape();
    for(let i = 0; i<8;i++){
      vertex(rightEye[i].x,rightEye[i].y);
    }
    for(let i = 16;i>7;i--){
      vertex(rightEye[i].x,rightEye[i].y);
    }
    endShape();
    // draw pupil
    fill(255, 0, 0);
    noStroke();
    ellipse(faces[0].leftEye.centerX, faces[0].leftEye.centerY, 8,8);
    ellipse(faces[0].rightEye.centerX, faces[0].rightEye.centerY, 8,8);
  }
}

// Callback function for when faceMesh outputs data
function gotFaces(results) {
  // Save the output to the faces variable
  faces = results;
  // console.log(faces);
}