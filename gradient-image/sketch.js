let gradient;


function preload(){
    gradient = loadImage("assets/gradient-bkg.png")
}


function setup(){
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasContainer");
    // image(gradient, 0, 0, width, height)
}

function draw(){
    // background(120, 40, 240);
    // fill(120, 40, 240);
    // rect(0, 0, width, height);
    image(gradient, 0, 0, width, height)

    // draw stuff as normal
    circle(frameCount*5%width, 100, 40)



}