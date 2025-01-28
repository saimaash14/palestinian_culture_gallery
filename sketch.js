let leaves = [];
let leafImg;

function preload() {
  // Load the leaf image (replace 'leaf.png' with your image file path)
  leafImg = loadImage('leaf.png');
}

function setup() {
  createCanvas(400, 400);
  // Create an initial set of leaves
  for (let i = 0; i < 10; i++) {
    leaves.push(new Leaf(random(width), random(-200, -50)));
  }
}

function draw() {
  background(220);

  // Update and display each leaf
  for (let i = 0; i < leaves.length; i++) {
    leaves[i].update();
    leaves[i].display();
  }
}

// Leaf class
class Leaf {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(20, 40);  // Random leaf size
    this.speed = random(0.5, 0.7); // Falling speed
    this.wind = random(-0.5, 0.5); // Gentle horizontal wind
  }

  update() {
    this.y += this.speed;   // Fall down slowly
    this.x += this.wind;    // Gentle horizontal movement due to wind

    // Reset leaf to the top when it goes off screen
    if (this.y > height) {
      this.y = random(-200, -50);
      this.x = random(width);
    }
  }

  display() {
    // Display the leaf image, scaling it according to its size
    image(leafImg, this.x, this.y, this.size, this.size);
  }
}
