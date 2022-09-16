let crowd = [];

class Block{
    constructor(){
        this.randX = random(-windowWidth/2,windowWidth/2);
        this.randY = random(-windowHeight/2,windowHeight/2);
        this.x = this.randX;
        this.y = this.randY;
        this.width = random(500);
        this.height = random(500);
        this.r = random(255);
        this.g = random(255);
        this.b = random(255);
    }

    display(){
        fill(this.r, this.g, this.b);
        rect(this.x, this.y, this.width, this.height);
    }
    move(){
        this.x = mouseX + this.randX;
        this.y = mouseY + this.randY;
    }
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    crowd.push(new Block());
}

let clr = 0;
function draw(){
    background(255);
    
    for(let i=0; i<crowd.length; i++){
        crowd[i].move();
        crowd[i].display();
    }
    console.log(crowd);
    
    //fill(255, clr, 0);
    //rect(mouseX, mouseY, 30, 30);
}

function mouseClicked(){
    crowd.push(new Block());

    if (clr===0){
        clr = 255;
    }
    else{
        clr = 0;
    }
}