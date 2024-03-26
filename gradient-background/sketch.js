let myBackground;
let myObjects = [];
function preload(){
    myBackground = loadImage("assets/gradient-bkg.png")
}

function setup(){
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasContainer");

    for(let i = 0; i< 70; i++){
        myObjects.push(new Walker(width/2, height/2));
    }

    //  the image source, x, y, w, h
    image(myBackground, 0, 0, width, height);
}

function draw(){
    
    for(let i = 0; i < myObjects.length; i++){
        myObjects[i].update();
        myObjects[i].display();
    }
    
}

class Walker{
    constructor(x_, y_){
        this.x = x_; 
        this.y = y_;
        this.speedX = random(-3, 3);
        this.speedY = random(-3, 3);
    }
    update(){
        this.x += this.speedX*map(noise(frameCount*0.2), 0, 1, -1, 1);
        this.y += this.speedY*map(noise((frameCount+100)*0.2), 0, 1, -1, 1);
        if(this.y>height || this.y < 0){
            this.speedY *= -1;
        }
        if(this.x>width || this.x < 0){
            this.speedX *= -1;
        }
    }
    display(){
        push();
        translate(this.x, this.y);
        fill(0);
        circle(0, 0, 2);
        pop();
    }
}