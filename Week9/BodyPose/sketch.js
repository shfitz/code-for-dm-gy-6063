
let video;
let bodyPose;
let poses = [];
let connections;

async function setup() {
  createCanvas(800, 600);

  // create an instace of the model
  // this has a large number of options
  // https://docs.ml5js.org/#/reference/bodypose?id=ml5bodypose
  bodyPose = await ml5.bodyPose();

  // Create the video and hide it
  video = createCapture(VIDEO);
  video.size(800, 600);
  video.hide();

  // Start detecting poses in the webcam video
  // you can see a list of points tracked
  //  https://docs.ml5js.org/#/reference/bodypose?id=bodyposedetectstart
  bodyPose.detectStart(video, gotPoses);

  // Get the skeletal connection information
  // returns an array of arrays representing the connections between keypoints.
  // https://docs.ml5js.org/#/reference/bodypose?id=bodyposegetconnections--bodyposegetskeleton
  // connections = bodyPose.getConnections();
}

function draw() {
  // Draw the webcam video
  image(video, 0, 0, width, height);

  /*
  // Draw the skeleton connections 
  // can be useful if you use these lines to 
  // detect things for collisions or otehr interactions
  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i];
    for (let j = 0; j < connections.length; j++) {
      let pointAIndex = connections[j][0];
      let pointBIndex = connections[j][1];
      let pointA = pose.keypoints[pointAIndex];
      let pointB = pose.keypoints[pointBIndex];
      // Only draw a line if both points are confident enough
      if (pointA.confidence > 0.1 && pointB.confidence > 0.1) {
        stroke(255);
        strokeWeight(2);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
      }
    }
  }
*/
  // Draw all the tracked landmark points
  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i];
    for (let j = 0; j < pose.keypoints.length; j++) {
      let keypoint = pose.keypoints[j];
      // Only draw a circle if the keypoint's confidence is bigger than 0.1
      if (keypoint.confidence > 0.1) {
        fill(255);
        noStroke();
        circle(keypoint.x, keypoint.y, 10);
      }
    }
  }
}

// Callback function for when bodyPose outputs data
function gotPoses(results) {
  // Save the output to the poses variable
  poses = results;
  // console.log(poses);
}