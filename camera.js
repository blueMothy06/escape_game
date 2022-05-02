//virtual camera
//move the mouse around
//the sprite follows the mouse but appears at the center of the sketch
//because the camera is following it
let myCanvas;
let message = 'hello :)';
let narrationText = '';
let endCom = '';
let rooms = ['room1', 'room_door', 'room_kit', 'room_bed'];
let num = 0;
let endingCounter = 0;

// arrays for
let tvIntro = ['BREAKING NEWS', 'You have five minutes to prepare.',
  'City-wide lockdown is to be put into place.',
  'Do not leave your home at any cost.',
  'The Calamity has started.'
]

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
let suit;
let cont;

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
let clickSuit;

// ending image
let ending_tv;
let ending_door;
let ending_kit;
let ending_bed;
let ending_true;

let mode = 'home';

function preload() {
  myFont = loadFont('my_assets/font/JosefinSans-Light.ttf');
  homePage = loadImage('my_assets/img/dma_node 1.png');
  room_living_on = loadImage('my_assets/img/dma_node-1.1.png');
  room_living_off = loadImage('my_assets/img/dma_node-1.2.png');
  room_bedroom = loadImage('my_assets/img/dma_node-2.png');
  room_kitchen = loadImage('my_assets/img/dma_node-3.png');
  room_doorway = loadImage('my_assets/img/dma_node-4.png');

  // tv
  intro_tv = loadImage('my_assets/img/intro_tv.png');

  // endings
  ending_tv = loadImage('my_assets/img/ending_tv.png');
  ending_door = loadImage('my_assets/img/ending_door.png');
  ending_kit = loadImage('my_assets/img/ending_kit.png');
  ending_bed = loadImage('my_assets/img/ending_bed.png');
  ending_true = loadImage('my_assets/img/ending_true.png');

  // menu
  left = loadImage('my_assets/img/prev.png');
  right = loadImage('my_assets/img/next.png');
  close = loadImage('my_assets/img/close.png');
  cont = loadImage('my_assets/img/continue.png');
  endPage = loadImage('my_assets/img/ending_true.png');

  // clickable items
  door = loadImage('my_assets/img/door.png');
  tvOn = loadImage('my_assets/img/tv-on.png');
  fridge = loadImage('my_assets/img/fridge.png');
  bed = loadImage('my_assets/img/bed.png');
  suit = loadImage('my_assets/img/suit.png');
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
  clickYes.image = cont;
  clickYes.text = "";
  clickYes.color = "#EEEEEE00";
  clickYes.strokeWeight = 0;
  clickYes.locate(50, 50);
  clickYes.resize(100, 100);

  clickYes.onRelease = function() {
    num = 0;
    endingCounter = 0;
  }

  // clickNext
  clickNext = new Clickable();
  clickNext.image = right;
  clickNext.text = "";
  clickNext.color = "#EEEEEE00";
  clickNext.strokeWeight = 0;
  clickNext.locate(730, 400);
  clickNext.resize(50, 50);

  clickNext.onHover = function() {
    clickNext.imageScale = 1.1;
  }

  clickNext.onOutside = function() {
    clickNext.imageScale = 1;
    }

  clickNext.onRelease = function() {
    mode = rooms[0];
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
    mode = rooms[0];
    num = 0;
    print(endingCounter);
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
    endingCounter++;
    endCom = 'I switch over to a telenovela and watch one last episode of "My coworker Mike has ran off with my husband!" As it\'s telling me to tune in for next week, the Calamity strikes, so I\'ll never know how it ends.';
    mode = 'end_tv';
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
    endingCounter++;
    endCom = 'The Calamity comes and unprepared for its full brunt, I get obliterated to bits.';
  }

  // click fridge
  clickFridge = new Clickable();
  clickFridge.image = fridge;
  clickFridge.text = "";
  clickFridge.locate(178, 103);
  clickFridge.resize(250, 500);
  clickFridge.strokeWeight = 0;

  clickFridge.onHover = function() {
    message = 'Maybe I could have a quick snack?';
    clickFridge.imageScale = 1.1;
  }

  clickFridge.onOutside = function() {
    message = 'What should I look at?';
    clickFridge.imageScale = 1;
  }

  clickFridge.onRelease = function() {
    mode = 'end_kit';
    endingCounter++;
    endCom = 'I try to eat sushi, but it turns out that I\'m out of wasabi. The Calamity hits and I perish with an mediocre meal, clutched in between my fingers.';
  }

  // click bed
  clickBed = new Clickable();
  clickBed.image = bed;
  clickBed.text = "";
  clickBed.locate(-10, 350);
  clickBed.resize(640, 400);
  clickBed.strokeWeight = 0;

  clickBed.onHover = function() {
    message = 'Maybe I could just hide under the bed.';
    clickBed.imageScale = 1.1;
  }

  clickBed.onOutside = function() {
    message = 'What should I look at?';
    clickBed.imageScale = 1;
  }

  clickBed.onRelease = function() {
    mode = 'end_bed';
    endingCounter++;
    endCom = 'I have tea with the monster that has been living under my bed. Even though the Calamity hits us, I\'m too busy trying to figure out which fork to use.';
  }

  // click suit
  clickSuit = new Clickable();
  clickSuit.image = suit;
  clickSuit.text = "";
  clickSuit.color = "#EEEEEE00";
  clickSuit.locate(600, 500);
  clickSuit.resize(70, 70);
  clickSuit.strokeWeight = 0;

  clickSuit.onHover = function() {
    message = 'Hey, when did this appear?';
    clickSuit.imageScale = 1.1;
  }

  clickSuit.onOutside = function() {
    message = 'What should I look at?';
    clickSuit.imageScale = 1;
  }

  clickSuit.onRelease = function() {
    mode = 'room_true';
    endCom = 'I decide that I\'m tired of waiting for the Calamity to come to me. It\'s happened too many times now. Instead of trying to avoid it, I\'ll confront it. Not without some extra preparation, of course. So into the Calamity I go.';
  }
}

function draw() {
  mainText();
  switch (mode) {
    case 'home':
      home();
      break;
    case 'intro':
      intro();
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
    case 'room_true':
      room_true();
      break;
    case 'ending':
      ending();
      break;
  }
  //add button.draw()
}

function mouseClicked() {
  if (mode == 'home') {
    mode = 'intro';
  }
  if (mode == 'ending') {
    mode = 'home';
  }
}

function mainText() {
  fill(255);
  textAlign(CENTER);
  textSize(23);
  fill('white');
  text(message, width * 0.5, height * 0.9);
}

function narrText() {
  fill(255);
  textAlign(CENTER);
  textSize(23);
  fill('white');
  text(narrationText, width * 0.05, height * 0.83, 700, 120);
}

function endText() {
  fill('#2A3A3F');
  textAlign(CENTER);
  textSize(23);
  text(endCom, width * 0.2, height * 0.9, 500, 100);
}

function endLong() {
  fill(255);
  textAlign(CENTER);
  textSize(23);
  text(endCom, width * 0.05, height * 0.83, 700, 140);
}

function intro() {
  background(intro_tv);
  endCom = 'BREAKING NEWS. You have five minutes to prepare. City-wide lockdown is to be put into place. Do not leave your home at any cost. The Calamity has started.'
  clickNext.draw();
  endLong();
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
  if (endingCounter >= 4) {
    clickSuit.draw();
    print('unlocked');
  }
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

function room_true() {
  background(ending_true);
  clickYes.draw();
  endLong();
}

function end_tv() {
  background(ending_tv);
  endLong();
  clickClose.draw();
}

function end_door() {
  background(ending_door);
  endText();
  clickClose.draw();
}

function end_kit() {
  background(ending_kit);
  endLong();
  clickClose.draw();
}

function end_bed() {
  background(ending_bed);
  endLong();
  clickClose.draw();
}

function narration() {
  background('black');
  //  textWrap(WORD);
  narrText();
}

function narration_w_ch() {
  background('black');
  clickYes.draw();
  narrText();
}
