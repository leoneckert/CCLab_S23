
let horses = [];

let currentImage = 0;

function preload(){

    for(let i = 0; i < 9; i++){
        let filename = "muybridge/muybridge_" + i + ".jpg"
        console.log(filename);
        horses.push( loadImage(filename) );
    }
    console.log(horses)
}


function setup(){
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasContainer");



    

}

function draw(){
    background(120, 40, 240);


    // let imageWidth = horses[0].width;
    // let imageHeight = horses[0].height;
    // let newWidth = imageWidth * 0.5;
    // let newHeight = imageHeight * 0.5;


    // image(horses[0], 0, 0, newWidth, newHeight);


    // push();
    // scale(0.5);
    
    // image(horses[ round(currentImage) ], 0, 0);
    
    // pop();
    
    // // yelena's trick
    // // to make it slow
    // // but need to use round() in the actual array (above)
    // // where we use currentImage
    // currentImage+=0.1;


    // if(currentImage>8){
    //     currentImage=0;
    // }




    push();
    scale(0.5);
    
    image(horses[ round(currentImage) ], 0, 0);
    
    pop();
    


    if(frameCount%10 == 0){
        currentImage++;
    }
   


    if(currentImage>8){
        currentImage=0;
    }



    /*

    9/2 = 4.5
    9%2 = 1
    12%5 = 2

    0%3==0   true
    1%3==0   false
    2%3==0   false
    3%3==0   true

    4%3==0   false
    5%3==0   false
    6%3==0   true
    7%3==0   false
    8%3==0   false
    9%3==0   true
 



    */
}