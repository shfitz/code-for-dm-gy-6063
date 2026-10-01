let s, m, h, d, mo, y; // variables for time units 
let ps; // variable for previous second
let ms, fc; // variable for counting relative to this sketch
let mmddyyyy; // string to hold information

function setup() {
    createCanvas(800, 600);
    // get longer term variables and print them 
    y = year();
    mo = month();
    d = day();

    mmddyyyy = 'month: ' + mo + ', day: ' + d + ', year: ' + y;
    // to the console
    console.log(mmddyyyy);
}

function draw() {
    background(220);
    // print mm/dd/yyyy to the screen
    textSize(24);
    text(mmddyyyy, 10, 20);

    // time since sketch start
    ms = millis();
    text('millis since start ' + ms, 10, 50);
    // use nf() to convert to limit # of digits
    text('millis since start ' + nf(ms, 0, 2), 10, 80);

    // frames since sketch started
    fc = frameCount;
    text('frames since start ' + fc, 10, 110);

    // get the clock time
    s = second();
    m = minute();
    h = hour();
    text('current time: ' + h + ':' + m + ':' + s, 10, 140);
    // nf() can also pad out numer of digits
    text('current time: ' + h + ':' + nf(m, 2, 0) + ':' + nf(s, 2, 0), 10, 170);

    // only update console when the second changes value
    if (ps != s) {
        console.log('hour: ' + h + ', minute:' + m + 'second: ' + s);
    }
    // save current second to the previosu second variable
    ps = s;

}
