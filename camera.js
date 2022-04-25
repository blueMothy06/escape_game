//virtual camera
//move the mouse around
//the sprite follows the mouse but appears at the center of the sketch
//because the camera is following it
let myCanvas;
let message = 'hello :)';
let narrationText = '';

// img
let bg;
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
let clickImg;

// items
let tvOn;

// button
var clickDoor;
var clickYes;
var clickNo;
let clickTVon;

let mode = 'home';

function preload() {
  clickImg = loadImage('logo.png');
  bg = loadImage('my_assets/img/bg.png');
  homePage = loadImage('my_assets/img/dma_node 1.png');
  room_living_on = loadImage('my_assets/img/dma_node-1.1.png');
  room_living_off = loadImage('my_assets/img/dma_node-1.2.png');
  room_bedroom = loadImage('my_assets/img/dma_node-2.png');
  room_kitchen = loadImage('my_assets/img/dma_node-3.png');
  room_doorway = loadImage('my_assets/img/dma_node-4.png');

  tvOn = loadImage('my_assets/img/tv-on.png');
  endPage = loadImage('my_assets/img/dma_node 3.png');
}

function setup() {
  myCanvas = createCanvas(800, 750);
  myCanvas.parent('myCanvas');

  clickDoor = new Clickable();
  clickDoor.image = tvOn;
  clickDoor.locate(330, 120);
  clickDoor.resize(180, 440);

  clickDoor.onHover = function() {
    message = 'a door';
  }

  clickDoor.onOutside = function() {
    message = 'What should I look at?';
  }

  clickDoor.onRelease = function() {
    narrationText = 'I opened the door';
    mode = 'ending';
  }


// clickYes
  clickYes = new Clickable();
  clickYes.textScaled = true;
  clickYes.text = "Yeah";
  clickYes.locate(100, 500);
  clickYes.resize(250,190);
  clickYes.strokeWeight = 0;

  clickYes.onRelease = function() {
    mode = 'room_liv_on';
  }

// clickNo
  clickNo = new Clickable();
  clickNo.textScaled = true;
  clickNo.text = "Nah";
  clickNo.locate(400, 500);
  clickNo.resize(250,190);
  clickNo.strokeWeight = 0;

  clickNo.onRelease = function() {
    mode = 'room_liv_on';
  }


// TV INTERACTIONS
  clickTVon = new Clickable();
  clickTVon.text = "";
  clickTVon.image = tvOn;
  clickTVon.locate(260, 240);
  clickTVon.resize(250,190);
  clickTVon.strokeWeight = 0;

  clickTVon.onHover = function() {
    message = 'It keeps going on and on about how everyone is reacting to this...';
  }

  clickTVon.onOutside = function() {
    message = 'What should I look at?';
  }

  clickTVon.onRelease = function() {
    narrationText = 'Maybe I should turn it off?';
    mode = 'narration_w_ch';
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
    case 'room2':
      room2();
      break;
    case 'ending':
      ending();
      break;
  }

}

function mouseClicked() {
  if (mode === 'home') {
    mode = 'room1';
  } else if (mode === 'ending') {
      mode = 'room1';
  }
}

function mainText() {
  fill(255);
  textAlign(CENTER);
  textSize(25);
  fill('white');
  text(message, width * 0.5, height * 0.9);
}

function narrText() {
  fill(255);
  textAlign(CENTER);
  textSize(25);
  fill('white');
  text(narrationText, width * 0.5, height * 0.5);
}


function home() {
  background(homePage);
}

function ending() {
  background(endPage);

}

function room1() {
  background(bg);
  clickDoor.draw();
  mainText();
}

function room_liv_on() {
  background(room_living_on);
  clickTVon.draw();
  mainText();
}

function room_liv_off() {
  background(room_living_off);
  clickDoor.draw();
  mainText();
}

function room_bed() {
  background(room_bedroom);
  clickDoor.draw();
  mainText();
}

function room_kit() {
  background(room_kitchen);
  clickDoor.draw();
  mainText();
}

function room_door() {
  background(room_door);
  clickDoor.draw();
  mainText();
}

function narration() {
  background('black');
  narrText();
}

function narration_w_ch() {
  background('black');
  clickYes.draw();
  clickNo.draw();7
  narrText();
}
