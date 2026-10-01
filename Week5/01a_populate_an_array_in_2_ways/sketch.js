// arrays store multiple items of information

// you can populate an array when you instantiate it
let names = ['Xintong', 'Geanna', 'Michelle', 'Olaf', 'Linke', 'Penny','Xiaoyan','Ziyan','Maria','Emily','Sean','Nicole','Marcus','Eva','Mengni','Fengjia','Yuwei'];
// or leave it empty to fill it later
let nums = [];

function setup() {
  createCanvas(800, 600);
  // access items in the array 
  console.log(names[0]);
  // set items in the array
   names[17] = 'SCOTT';
   console.log(names[17]);
     
  // get the length of an array
  // console.log(names.length);

  // fill an array dynamically
  for (let i = 0; i < names.length; i++) {
    nums[i] = i+1;
  }
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
  }

}

function draw() {
  background(220);
  textSize(24);
  for (let i = 0; i < names.length; i++) {
    text(names[i], 10, 30 * i + 30);
  }
}

function mousePressed() {
 names.pop(); //- remove last item in the array
 names.push('Blixa'); //-- add to last item in the array
 console.log(names.length);
}