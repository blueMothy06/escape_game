//virtual camera
//move the mouse around
//the sprite follows the mouse but appears at the center of the sketch
//because the camera is following it
let myCanvas;
let message = 'hello :)';

// img
let bg;
let homePage;
let endPage;
let roombg1;
let clickImg;

// button
var clickDoor;

let mode = 'room1';

function preload() {
  clickImg = loadImage('logo.png');
  bg = loadImage('my_assets/img/bg.png');
  homePage = loadImage('my_assets/img/dma_node 1.png');
  roombg1 = loadImage('my_assets/img/dma_node 2.png');
  endPage = loadImage('my_assets/img/dma_node 3.png');
}

function setup() {
  myCanvas = createCanvas(800, 750);
  myCanvas.parent('myCanvas');

    clickDoor = new Clickable();
    clickDoor.image = clickImg;
    clickDoor.locate(330,120);
    clickDoor.resize(180,440);
    clickDoor.text = "";

    clickDoor.onHover = function () {
      this.color = "#AA33AA";
      this.noTint = false;
      this.tint = "#FF0000";
      message = 'welp';
    }

    clickDoor.onOutside = function () {
   this.color = "#FFFFFF";
   this.noTint = true;
   message = 'hey :\')';
   }

}

function draw() {
  background(bg);
  clickDoor.draw();
  mainText();

}

function mainText() {
  fill(255);
  textAlign(CENTER);
  textSize(25);
  fill('white');
  text(message, width * 0.5, height * 0.9);
}


function home() {
background(homePage);
}

function ending() {
  background(240, 0 ,0);
  stroke(255);
  fill(255);
  textSize(75);
  textAlign(CENTER);
  text('GAME OVER', width*0.5, height*0.33);h1>
  textSize(25);
  text('Press "S" To Restart Game', width*0.5, height*0.66);
}
