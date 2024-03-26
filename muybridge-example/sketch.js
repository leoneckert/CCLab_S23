let horseImages = [];
let currentImage = 0;
function preload(){
    for(let i = 0; i < 9; i++){
        let filename = "muybridge/muybridge_"+i+".jpg";
        console.log(filename);
        let img = loadImage(filename);
        horseImages.push(img);
    }
    console.log(horseImages);
}

function setup(){
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasContainer");

    
}

function draw(){
    background(120, 40, 240);

    push();
    scale(0.5);
    image(horseImages[currentImage], 0, 0);
    pop();

    if(frameCount%5 == 0){
        currentImage++;
    }
    if(currentImage > 8){
        currentImage = 0;
    }
}