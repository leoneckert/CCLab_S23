// sounds from:
// https://freesound.org/people/GowlerMusic/sounds/266566/
// https://freesound.org/people/cfork/sounds/8000/
// https://freesound.org/people/ccolbert70Eagles23/sounds/423526/

let plop;
let gong;
let punch;

function preload(){
    plop = loadSound("sounds/8000__cfork__cf_fx_bloibb.mp3");
    gong = loadSound("sounds/266566__gowlermusic__gong-hit.wav")
    punch = loadSound("sounds/423526__ccolbert70eagles23__karate-chop.m4a")

}


function setup(){
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasContainer");  

}

function draw(){
    background(120, 40, 240);
}


class Creature{
    constructor(x_, y_){
        this.x = x_;
        this.y = y_;
        this.xSpeed = random(-2, 2);
        this.ySpeed = random(2, 2);

    }
    update(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
    display(){
        push();
        translate(this.x, this.y)
        
        

        pop();
    }
}


function mousePressed(){
    plop.play();
}