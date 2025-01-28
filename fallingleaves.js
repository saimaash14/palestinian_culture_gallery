let leaves = [];
let leafImg;

function preload() {
  leafImg = loadImage('https://i.imgur.com/E9Id8IU.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 10; i++) {
    leaves.push(new Leaf(random(width), random(-200, -50)));
  }
}

function draw() {
  clear()

  
  for (let i = 0; i < leaves.length; i++) {
    leaves[i].update();
    leaves[i].display();
  }
}


class Leaf {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(20, 40);  
    this.speed = random(0.5, 0.7); 
    this.wind = random(-0.5, 0.5);  
  }

  update() {
    this.y += this.speed; 
    this.x += this.wind;    

    
    if (this.y > height) {
      this.y = random(-200, -50);
      this.x = random(width);
    }
  }

  display() {
    
    image(leafImg, this.x, this.y, this.size, this.size);
  }
}

function windowResized() {
 resizeCanvas(windowWidth, windowHeight);
}