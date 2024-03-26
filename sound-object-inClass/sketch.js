// sounds from:
// https://freesound.org/people/GowlerMusic/sounds/266566/
// https://freesound.org/people/cfork/sounds/8000/
// https://freesound.org/people/ccolbert70Eagles23/sounds/423526/



let creatures = [];
let numCreatures = 2;

let bodies = [];

let karate;
let gong;
let plop;

function preload(){
    for(let i = 0; i < 3; i++){
        bodies.push( loadImage("bodies/body_"+i+".png"))
    }

    karate = loadSound("sounds/423526__ccolbert70eagles23__karate-chop.m4a");
    gong = loadSound("sounds/266566__gowlermusic__gong-hit.wav");
    
}

function setup(){
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasContainer");  

    for(let i = 0; i < numCreatures;i++){
        let newCreature = new Creature(width/2, height/2);
        creatures.push(newCreature);
    }

}

function draw(){
    background(120, 40, 240);

    gong.rate(  map(mouseX, 0, width, 1, 10)  )
    for(let i = 0; i < creatures.length; i++){
        creatures[i].update();
        creatures[i].display();
    }
 
    // push();
    // translate(mouseX, mouseY);
    // scale(0.3);

    // let imageWidth = bodies[0].width;
    // let imageHeight = bodies[0].height;
    // image(bodies[2], -imageWidth/2, -imageHeight/2);

    // pop();
}


class Creature{
    constructor(x_, y_){
        this.x = x_;
        this.y = y_;
        this.xSpeed = random(-5, 5);
        this.ySpeed = 0;//random(-2, 2);
        this.bodyIndex = floor( random(0, 3) );
        this.radius = 32;
    }
    update(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        // bounce!
        // if(this.x < this.radius || this.x > width - this.radius){   
        //     //turn around speed:
        //     this.xSpeed = -this.xSpeed;
        //     karate.play();
        // }
        if(this.x < this.radius){   
            //turn around speed:
            this.xSpeed = -this.xSpeed;

            
            if(this.bodyIndex  == 0){
                gong.pan(-1)
                gong.play();
            }else {
                karate.pan(-1)
                karate.play();
            }

        }else if(this.x > width - this.radius){   
            //turn around speed:
            this.xSpeed = -this.xSpeed;
            if(this.bodyIndex  == 0){
                gong.pan( 1)
                gong.play();
            }else {
                karate.pan(1)
                karate.play();
            }
        }

        if(this.y < this.radius || this.y > height-this.radius){
            //turn around speed:
            this.ySpeed = -this.ySpeed;
            // gong.play();
        }


    }
    display(){
        push();
        translate(this.x, this.y)
        
        if(this.bodyIndex  == 0){
            fill(211, 110, 255)
        }else if(this.bodyIndex  == 1){
            fill(157, 217, 115)
        }else if(this.bodyIndex  == 2){
            fill(198, 233, 247)
        }
        circle(0, 0, 40);

    
        this.drawBodyImage();

        // noFill();
        // circle(0, 0, this.radius*2);

        pop();
    }
    drawBodyImage(){
        push();
        scale(0.1);
        let imageWidth = bodies[0].width;
        let imageHeight = bodies[0].height;
        image(bodies[this.bodyIndex], -imageWidth/2, -imageHeight/2);
        pop();
    }
}

