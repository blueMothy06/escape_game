//virtual camera
//move the mouse around
//the sprite follows the mouse but appears at the center of the sketch
//because the camera is following it
let myCanvas;
let message = 'hello :)';
let narrationText = '';
let rooms = ['room1', 'room_door', 'room_kit', 'room_bed'];
let num = 0;
let endingCounter;

// img
let homePage;
let endPage;

//rooms
let room_living_on;
let room_living_off;
let room_bedroom;
let room_kitchen;
let room_doorway;
let roombg1;
let roombg2;

// item image
let tvOn;
let door;
let fridge;
let bed;

// button
var clickDoor;
var clickYes;
var clickNo;
let right;
let left;
let close;
let clickTVon;
let clickFridge;
let clickBed;

// ending image
let ending_tv;
let ending_door;
let ending_kit;
let ending_bed;

let mode = 'home';

function preload() {
  myFont = loadFont('my_assets/font/JosefinSans-Light.ttf');
  homePage = loadImage('my_assets/img/dma_node 1.png');
  room_living_on = loadImage('my_assets/img/dma_node-1.1.png');
  room_living_off = loadImage('my_assets/img/dma_node-1.2.png');
  room_bedroom = loadImage('my_assets/img/dma_node-2.png');
  room_kitchen = loadImage('my_assets/img/dma_node-3.png');
  room_doorway = loadImage('my_assets/img/dma_node-4.png');

  // endings
  ending_tv = loadImage('my_assets/img/ending_tv.png');
  ending_door = loadImage('my_assets/img/ending_door.png');
  ending_kit = loadImage('my_assets/img/ending_kit.png');
  ending_bed = loadImage('my_assets/img/ending_bed.png');

  // menu
  left = loadImage('my_assets/img/prev.png');
  right = loadImage('my_assets/img/next.png');
  close = loadImage('my_assets/img/close.png');
  endPage = loadImage('my_assets/img/ending_true.png');

  // clickable items
  door = loadImage('my_assets/img/door.png');
  tvOn = loadImage('my_assets/img/tv-on.png');
  fridge = loadImage('my_assets/img/fridge.png');
  bed = loadImage('my_assets/img/bed.png');
}

function setup() {
  myCanvas = createCanvas(800, 750);
  myCanvas.parent('myCanvas');

  //click start
  clickStart = new Clickable();
  clickStart.text = "Start";
  clickStart.locate(300, 400);
  clickStart.resize(200, 200);
  clickStart.strokeWeight = 0;

  clickStart.onHover = function() {
    clickStart.imageScale = 1.1;
  }

  clickStart.onOutside = function() {
    clickStart.imageScale = 1;
  }

  clickStart.onRelease = function() {
    mode = rooms[num];
  }

  // clickYes
  clickYes = new Clickable();
  clickYes.textScaled = true;
  clickYes.text = "Yeah";
  clickYes.locate(100, 500);
  clickYes.resize(250, 190);

  clickYes.onRelease = function() {
    mode = rooms[num];
  }

  // clickNo
  clickNo = new Clickable();
  clickNo.textScaled = true;
  clickNo.text = "Nah";
  clickNo.locate(400, 500);
  clickNo.resize(250, 190);
  clickNo.strokeWeight = 0;

  clickNo.onRelease = function() {
    mode = rooms[num];
  }

  //click left
  clickLeft = new Clickable();
  clickLeft.text = "";
  clickLeft.image = left;
  clickLeft.color = "#EEEEEE00";
  clickLeft.locate(20, 400);
  clickLeft.resize(50, 50);
  clickLeft.strokeWeight = 0;

  clickLeft.onHover = function() {
    ;
    clickLeft.imageScale = 1.1;
  }

  clickLeft.onOutside = function() {
    clickLeft.imageScale = 1;
  }

  clickLeft.onRelease = function() {
    num++;
    mode = rooms[num];
  }

  //click right
  clickRight = new Clickable();
  clickRight.text = "";
  clickRight.image = right;
  clickRight.color = "#EEEEEE00";
  clickRight.locate(730, 400);
  clickRight.resize(50, 50);
  clickRight.strokeWeight = 0;

  clickRight.onHover = function() {
    clickRight.imageScale = 1.1;
  }

  clickRight.onOutside = function() {
    clickRight.imageScale = 1;
  }

  clickRight.onRelease = function() {
    num--;
    mode = rooms[num];
  }

  //click close
  clickClose = new Clickable();
  clickClose.text = "";
  clickClose.image = close;
  clickClose.color = "#EEEEEE00";
  clickClose.locate(730, 100);
  clickClose.resize(50, 50);
  clickClose.strokeWeight = 0;

  clickClose.onHover = function() {
    clickClose.imageScale = 1.1;
  }

  clickClose.onOutside = function() {
    clickClose.imageScale = 1;
  }

  clickClose.onRelease = function() {
    mode = rooms[num];
  }

  // TV INTERACTIONS
  clickTVon = new Clickable();
  clickTVon.text = "";
  clickTVon.image = tvOn;
  clickTVon.locate(260, 240);
  clickTVon.resize(250, 180);
  clickTVon.strokeWeight = 0;

  clickTVon.onHover = function() {
    message = 'It keeps going on and on about how everyone is reacting to this...';
    clickTVon.imageScale = 1.1;
  }

  clickTVon.onOutside = function() {
    message = 'What should I look at?';
    clickTVon.imageScale = 1;
  }

  clickTVon.onRelease = function() {
    narrationText = 'Maybe I should turn it off?';
    mode = 'narration_w_ch';
  }

  // click doorway
  clickDoor = new Clickable();
  clickDoor.image = door;
  clickDoor.text = "";
  clickDoor.locate(300, 120);
  clickDoor.resize(220, 440);
  clickDoor.strokeWeight = 0;

  clickDoor.onHover = function() {
    message = 'I should probably keep this closed.';
    clickDoor.imageScale = 1.1;
  }

  clickDoor.onOutside = function() {
    message = 'What should I look at?';
    clickDoor.imageScale = 1;
  }

  clickDoor.onRelease = function() {
    mode = 'end_door';
    message = 'The Calamity comes and unprepared, I get obliterated to bits.';
  }
}

function draw() {
  mainText();
  switch (mode) {
    case 'home':
      home();
      break;
    case 'narration':
      narration();
      break;
    case 'narration_w_ch':
      narration_w_ch();
      break;
    case 'room1':
      room_liv_on();
      break;
    case 'end_tv':
      end_tv();
      break;
    case 'end_door':
      end_door();
      break;
    case 'end_kit':
      end_kit();
      break;
    case 'end_bed':
      end_bed();
      break;
    case 'room_door':
      room_door();
      break;
    case 'room_kit':
      room_kit();
      break;
    case 'room_bed':
      room_bed();
      break;
    case 'ending':
      ending();
      break;
  }
  //add button.draw()
}

function mouseClicked() {
  if (mode == 'home') {
    mode = 'room1';
  }
  if (mode == 'ending') {
    mode = 'home';
  }
}

function mainText() {
  fill(255);
  textAlign(CENTER);
  textSize(25);
  fill('white');
//  textWrap(WORD);
  text(message, width * 0.5, height * 0.9);
}

function narrText() {
  fill(255);
  textAlign(CENTER);
  textSize(25);
  fill('white');
//  textWrap(WORD);
  text(narrationText, width * 0.5, height * 0.5);
}

function home() {
  background(homePage);
}

function ending() {
  background(endPage);
  num = 0;
}

function room1() {
  background(bg);
  clickDoor.draw();
  mainText();
}

function room_liv_on() {
  background(room_living_on);
  clickTVon.draw();
  clickLeft.draw();
  mainText();
}

function room_bed() {
  background(room_bedroom);
  clickBed.draw();
  clickRight.draw();
  mainText();
}

function room_kit() {
  background(room_kitchen);
  clickFridge.draw();
  clickLeft.draw();
  clickRight.draw();
  mainText();
}

function room_door() {
  background(room_doorway);
  clickDoor.draw();
  clickLeft.draw();
  clickRight.draw();
  mainText();
}

function end_tv() {
  background(ending_tv);
  mainText();
}

function end_door() {
  background(ending_door);
  mainText();
}

function end_kit() {
  background(ending_kit);
  mainText();
}

function end_bed() {
  background(ending_bed);
  mainText();
}

function narration() {
  background('black');
//  textWrap(WORD);
  narrText();
}

function narration_w_ch() {
  background('black');
  clickYes.draw();
  clickNo.draw();
  clickClose.draw();
  narrText();
}
