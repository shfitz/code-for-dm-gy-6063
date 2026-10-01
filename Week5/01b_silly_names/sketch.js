// create an empty array to be filled with ints later
let nums = [];

// some arrays of words
// note that these can be created here, or elsewhere
let adjective = ["burly", "tired", "desultory", "remarkable", "cat-like"];
let noun = ["cat", "milkshake", "bicycle", "coffee", "tent"];

function setup() {
    createCanvas(800, 400);
    background(220);
    textSize(24);

    // access array indecies with []
    let phrase = adjective[0] + " " + noun[4];
    text(phrase, 10, 20);

    // can fill arrays one item a a time
    nums[0] = floor(random(0, 255));
    console.log(nums[0]);

    // loops make life easier
    for (let i = 0; i < 100; i++) {
        //for loop to generate the series of index numbners
        nums[i] = floor(random(0, 255));
    }

    // silly word pairs
    for (let i = 0; i < adjective.length; i++) {
        let adj = floor(random(0, 5));
        let n = floor(random(0, 5));
        //for loop to generate the series of index numbers
        text(adjective[adj] + " " + noun[n], 10, 20*i+50);
    }
} 