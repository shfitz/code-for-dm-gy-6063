let s, m, h, d, mo, y;
let ps;
let ms, fc;

function setup() {
    createCanvas(800, 600);
    y = year();
    mo = month();
    d = day();
    console.log('year: '+ y +', month: '+mo +'day: '+d);
}

function draw() {
    background(220);
    ms = millis(); // time since sketch start
    // console.log(ms);
    fc = frameCount;
    // console.log(fc);

    s = second();
    m = minute();
    h =hour();
    if(ps != s){
    console.log('hour: '+ h + ', minute:' + m + 'second: '+s);
    }
    ps = s;

}
