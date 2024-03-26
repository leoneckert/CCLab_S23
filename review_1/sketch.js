let x1 = 200;
let blueChannel = 0;

let xPositions = [100, 120, 5];
let yPositions = [130, 10, 250];


let noisePointer = 0;
let x = 0;
let y = 0;

let sinStep = 0;

function setup(){
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasContainer");
    console.log("i am in setup");

    // xPositions.push(200);
    // xPositions.push(200);
    // xPositions.push(200);
    // xPositions.push(200);
    
    

    xPositions[0] = 400;
    console.log(xPositions);
    
}

function draw(){ //frames of our animation
    background(255);
    console.log("i am in draw")


    // for(let y = 0; y < height; y+=10){
    //     for(let x = 0; x < width; x+=10){
    //         // console.log(i)
    //         fill(255, 10);
    //         if( mouseX > x && 
    //             mouseX < x+10 && 
    //             mouseY > y && 
    //             mouseY < y +10){
    //                 fill(0);
    //             }
    //         rect(x, y, 10, 10);
    //     }
    // }
    


    // fill(150, 10, 240);
    // circle(xPositions[0], yPositions[0], 50);
    // circle(xPositions[1], yPositions[1], 50);
    // circle(xPositions[2], yPositions[2], 50);

    // fill(30, 10, blueChannel);
    // circle(300, 300, 20);

    // x1 = x1 + 1;
    // blueChannel = frameCount%255; // "%" is a remainder operator

    // sin(); // -1, 1
    // cos(); // -1, 1
    // noise(); // 0, 1
    // random(); // 0, 1

    // noStroke();
    // fill(0);
    
    // x = 0
    // for(let noisePointer = 0; noisePointer < width; noisePointer += 0.01){
    //     y = map(noise(noisePointer), 0, 1, 100, 300);
    //     circle(x, y, 10);
    //     x += 1;
    // }

    // +=0.01;

    let sinValue = sin(sinStep);
    let size = map(sinValue, -1, 1, 10, 200);
    circle(width/2, height/2, size);


    sinStep+=0.01;


}
