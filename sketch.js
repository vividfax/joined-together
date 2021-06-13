let colors = {
  white: "#FFFFFF",
  light: "#FFE486",
  mid: "#CEBBD8",
  dark: "#5D5761",
  black: "#033F63",
};
let rgbColors = {
  dark: "93,87,97",
};
let started = false;
let intro;
let story;
let end;
let scenes = [];

let leftImage;
let rightImage;
let curtain;

let leftHand;
let rightHand;
let buttonOne;
let buttonTwo;
let clickables = [buttonOne, buttonTwo];

let audio;
let interacted = false;

function preload() {
  story = loadJSON("story.json");

  leftImage = loadImage("assets/lefthand.png");
  rightImage = loadImage("assets/righthand.png");
  curtain = loadImage("assets/curtain.jpg");

  audio = new Audio("assets/cinema.ogg");
  audio.loop = true;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Cabin Sketch");
  textAlign(CENTER, CENTER);
  frameRate(5);
  let noOfHands = 1;
  rightHand = new Hand(rightImage, noOfHands);
  noOfHands++;
  leftHand = new Hand(leftImage, noOfHands);
  leftHand.setup();
  rightHand.setup();
  scenes = new DialogScene(leftHand, rightHand);

  end = new EndingScene(leftHand, rightHand, scenes);
  buttonOne = new Button(
    width / 4 - 180,
    (height / 4) * 3,
    360,
    80,
    "button-one"
  );
  buttonTwo = new Button(
    (width / 4) * 3 - 240,
    (height / 4) * 3,
    360,
    80,
    "button-two"
  );
  buttonOne.setup();
  buttonTwo.setup();
  buttonOne.hide();
  buttonTwo.hide();
  intro = new IntroScene(leftHand, rightHand, scenes, buttonOne, buttonTwo);
  scenes.hide();
  intro.setup();
  //   noLoop();
  createGrain();
}

function draw() {
  //   background(colors.light);
  updatePixels();
  intro.start();
  //   tint(255, 50);
  rightHand.display();
  leftHand.display();
  buttonOne.makeEvents();
  buttonTwo.makeEvents();
}

function mousePressed() {
  if (!interacted) {
    // audio.play();
    interacted = true;
  }
}

function createGrain() {
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if (random() > 0.5) {
        set(i, j, color(colors.light));
      } else {
        set(i, j, color("#FFE986"));
      }
    }
  }
}
function mouseClicked() {
  if (started == false) {
    intro.showHide();
    buttonOne.show();
    buttonTwo.show();
    scenes.show();
    scenes.bodyTextElement.show();
    scenes.nextScene(0);
    audio.play();
    started = true;
  }
}
