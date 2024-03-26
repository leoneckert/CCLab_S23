let squareSize = 1;
let a = 0;
let a2 = 0;
let bigRadius = 150;

function setup(){
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasContainer");
    background(120, 40, 240);

}

function draw(){
    

    push();
    translate(width/2, height/2);
    
    rotate( radians(a) );
    /// below here

        // rect(-squareSize/2 + 140, -squareSize/2, squareSize, squareSize);
        
        push();
        translate(bigRadius, 0);
        rotate( radians(a2) );
            
            // rect(-squareSize/2, -squareSize/2, squareSize, squareSize)

            fill(0);
            noStroke();
            circle(-squareSize/2, -squareSize/2, 2)
            
            fill(255);
            circle(squareSize/2, -squareSize/2, 2)
            fill(0);
            circle(squareSize/2, squareSize/2, 2)
            fill(255);
            circle(-squareSize/2, squareSize/2, 2)

            // fill(0, 255, 0);
            // circle(0, 0, 5);

        pop();


        fill(255, 0, 0);
        circle(0, 0, 5);


    /// above here
    pop();

    a++;
    a2-=4;

    // bigRadius-=0.1;
    squareSize*=1.001
}