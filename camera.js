//virtual camera
//move the mouse around
//the sprite follows the mouse but appears at the center of the sketch
//because the camera is following it
let myCanvas;
let message = 'hello :)';
let narrationText = '';

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
let clickImg;

// items
let tvOn;
let door;

// button
var clickDoor;
var clickYes;
var clickNo;
let right;
let left;
let clickTVon;

let mode = 'room_door';

function preload() {
  clickImg = loadImage('logo.png');
  homePage = loadImage('my_assets/img/dma_node 1.png');
  room_living_on = loadImage('my_assets/img/dma_node-1.1.png');
  room_living_off = loadImage('my_assets/img/dma_node-1.2.png');
  room_bedroom = loadImage('my_assets/img/dma_node-2.png');
  room_kitchen = loadImage('my_assets/img/dma_node-3.png');
  room_doorway = loadImage('my_assets/img/dma_node-4.png');

  left = loadImage('my_assets/img/prev.png');
  door = loadImage('my_assets/img/door.png');
  right = loadImage('my_assets/img/next.png');
  tvOn = loadImage('my_assets/img/tv-on.png');
  endPage = loadImage('my_assets/img/dma_node 3.png');
}

function setup() {
  myCanvas = createCanvas(800, 750);
  myCanvas.parent('myCanvas');

  clickDoor = new Clickable();
  clickDoor.image = door;
  clickDoor.text = "";
  clickDoor.locate(300, 120);
  clickDoor.resize(220, 440);
  clickDoor.strokeWeight = 0;

  clickDoor.onHover = function() {
    message = 'I should probably keep this closed.';
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

//click left
  clickLeft = new Clickable();
  clickLeft.text = "";
  clickLeft.image = left;
  clickLeft.locate(20, 400);
  clickLeft.resize(50,50);
  clickLeft.strokeWeight = 0;

  clickLeft.onHover = function() {
    message = 'Move to the next area';
  }

  clickLeft.onRelease = function() {
    if (mode === 'room_liv_on')
    {
      mode = 'room_door';
    }
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
    case 'room_door':
      room_door();
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
  }
  if (mode === 'ending') {
      mode = 'home';
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
  clickLeft.draw();
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
  background(room_doorway);
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
  clickNo.draw();
  narrText();
}
