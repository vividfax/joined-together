let colors = {
    white: "#FFFFFF",
    light: "#FFE486",
    mid: "#CEBBD8",
    dark: "#5D5761",
    black: "#033F63"
};
let hsbColors = {
    white: "#FFFFFF",
    light: "#FFE486",
    mid: "#CEBBD8",
    dark: "71, 71, 62",
    black: "#033F63"
};
let scribble = new Scribble();

let intro;
let story;
let scenes = [];

let leftImage;
let rightImage;

let leftHand;
let rightHand;

let imgWidth = 792 * 0.4;
let imgHeight = 1496 * 0.4;

function preload() {

    story = loadJSON("story.json");

    leftImage = loadImage("assets/lefthand.png");
    rightImage = loadImage("assets/righthand.png");
}

function setup() {

    createCanvas(windowWidth, windowHeight);
    textFont("Cabin Sketch");
    textAlign(CENTER, CENTER);
    scribble.bowing = 0;
    let distance = width/8;
    rightHand = new Hand(width/2 + distance, height - imgHeight, rightImage);
    leftHand = new Hand(width/2 - imgWidth - distance, height - imgHeight, leftImage);
    intro = new IntroScene(leftHand, rightHand);
    for (let i = 0; i < story.story.length; i++) {
        // dialogScenes[i] = new DialogScene(story.story[i]);
    }
    noLoop();
}

function draw() {

    background(colors.light);
    intro.start()
    // tint(255, 30);



    rightHand.display();
    leftHand.display();
    // dialogScenes[0].display();
}

function mousePressed() {


}
