// Code by Leon Eckert
// April 2023
// Example of a frame animation for a walker class

let images = [];

let w;
function preload(){
    for(let i = 1; i < 10; i++){
        // images.push(loadImage("walker-jpg/walker-0"+i+".jpg"));
        images.push(loadImage("walker-png/walker-0"+i+".png"));

    }
}


function setup(){
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasContainer");
    w = new Walker(width/2, height/2);
}

function draw(){
    background("#e76acd");
    w.update();
    w.display();
}

class Walker{
    constructor(x, y){
        this.x = x;
        this.y = y;
        
        this.status = "still";
        this.still = images[0];
        this.walkingLeft = [images[1], images[2]];
        this.walkingRight = [images[3], images[4]];
        this.walkingDown = [images[5], images[6]];
        this.walkingUp = [images[7], images[8]];

        this.animationIndex = 0;
        this.animationInterval = 10;
        this.speed = 1.3;
    }
    update(){
        if(keyIsPressed && key == "ArrowUp"){
            this.status = "up";
            this.y-=this.speed;
        }else if(keyIsPressed && key == "ArrowLeft"){
            this.status = "left";
            this.x-=this.speed;
        }else if(keyIsPressed && key == "ArrowRight"){
            this.status = "right";
            this.x+=this.speed;
        }else if(keyIsPressed && key == "ArrowDown"){
            this.status = "down";
            this.y+=this.speed;
        }else{
            this.status = "still";
        }

        if(this.x > width){
            this.x = 0;
        }else if(this.x < 0){
            this.x = width;
        }

        if(this.y > height){
            this.y = 0;
        }else if(this.y < 0){
            this.y = width;
        }
    }
    display(){
        push();
        translate(this.x, this.y);
        scale(0.3); // the image is quite large, i adjust it with scale

        if(this.status == "still"){
            image(this.still, -this.still.width/2, -this.still.height/2);
        }else if(this.status == "left"){
            this.toggle(this.walkingLeft)
        }else if(this.status == "right"){
            this.toggle(this.walkingRight)
        }else if(this.status == "up"){
            this.toggle(this.walkingUp)
        }else if(this.status == "down"){
            this.toggle(this.walkingDown)
        }


        // circle(0,0,4);
        pop();
    }
    toggle(imageArray){
        if(frameCount%this.animationInterval==0 && this.animationIndex==0){
            this.animationIndex = 1;
        }else if(frameCount%this.animationInterval==0 && this.animationIndex==1){
            this.animationIndex = 0;
        }
        let img = imageArray[this.animationIndex]
        image(img, -img.width/2, -img.height/2);
        text(this.animationIndex, 0, 0);
    }

}