let colors = {
  white: "#FFFFFF",
  light: "#FFE486",
  mid: "#CEBBD8",
  dark: "#5D5761",
  black: "#033F63",
};
let rgbColors = {
  white: "#FFFFFF",
  light: "#FFE486",
  mid: "#CEBBD8",
  dark: "93,87,97",
  black: "#033F63",
};
let scribble = new Scribble();

let intro;
let story;
let scenes = [];

let leftImage;
let rightImage;
let curtain;

let leftHand;
let rightHand;
let buttonOne;
let buttonTwo;
let clickables = [buttonOne, buttonTwo];

let imgWidth = 792 * 0.4;
let imgHeight = 1496 * 0.4;

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

  let distance = width / 8;

  rightHand = new Hand(width / 2 + distance, height - imgHeight, leftImage);
  leftHand = new Hand(
    width / 2 - imgWidth - distance,
    height - imgHeight,
    rightImage
  );

  intro = new IntroScene(leftHand, rightHand);
  scenes = new DialogScene();
  buttonOne = new Button(width / 4, (height / 5) * 4, 400, 80, "button-one");
  buttonTwo = new Button(
    (width / 4) * 3,
    (height / 5) * 4,
    400,
    80,
    "button-two"
  );

  noLoop();
}

function draw() {
  background(colors.light);
  intro.start();
  tint(255, 30);

  rightHand.display();
  leftHand.display();
  buttonOne.display();
  buttonTwo.display();
  buttonOne.changeText("test");
}

function mousePressed() {
  if (!interacted) {
    // audio.play();
    interacted = true;
  }
}
