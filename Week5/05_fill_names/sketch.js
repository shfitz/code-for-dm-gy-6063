// create an empty array to be filled with ints later
let nums = [];

// some arrays of words
// note that these can be created here, or elsewhere
let adjective = ["burly", "tired", "desultory", "remarkable", "cat-like"];
let noun = ["cat", "milkshake", "bicycle", "coffee", "tent"];

function setup() {
    createCanvas(400, 400);
    background(220);

    // access array indecies with []
    let phrase = adjective[0] + " " + noun[4];
    console.log(phrase);

    // can fill arrays one item a a time
    nums[0] = random(0, 255);
    console.log(nums[0]);

    // loops make life easier
    for (let i = 0; i < 100; i++) {
        //for loop to generate the series of index numbners
        nums[i] = random(0, 255);
    }

    console.log(nums);

} 