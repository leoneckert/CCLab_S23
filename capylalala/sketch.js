let b;

// from https://p5js.org/reference/#/p5/createGraphics
let insvisibleCanvas2;

function setup() {
  createCanvas(windowWidth, 400);
  insvisibleCanvas2 = createGraphics(width, height);
  b = new Ball(width/2, height/2);
  
  
}

function draw() {
  background("coral");
  
  // line(pmouseX, pmouseY, mouseX, mouseY);
  insvisibleCanvas2.line(pmouseX, pmouseY, mouseX, mouseY);
  
  image(insvisibleCanvas2, 0, 0)
  
  b.update();
  b.display();
  
  
  
}


class Ball{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.speedX = random(-8, 8);
    this.speedY = random(-8, 8);
  }
  update(){
    this.x += this.speedX;
    this.y += this.speedY;
    //bounce x
    if(this.x > width || this.x < 0){
      this.speedX *= -1;
    }
    //bounce y
    if(this.y > height || this.y < 0){
      this.speedY *= -1;''
    } 
  }
  display(){
    push();
    translate(this.x, this.y);
    noStroke();
    fill(0);
    circle(0, 0, 20);
    pop();
    
    // insvisibleCanvas2.push();
    // insvisibleCanvas2.translate(this.x, this.y);
    // insvisibleCanvas2.fill("red");
    // insvisibleCanvas2.noStroke();
    // insvisibleCanvas2.circle(0, 0, 5);
    // insvisibleCanvas2.pop();


    
    
    
    
    
  }
}