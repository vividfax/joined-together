let colors = {
    white: "#FFFFFF",
    light: "#FEDC97",
    mid: "#8DA784",
    dark: "#28666E",
    black: "#033F63"
};
let scribble = new Scribble();

function setup() {

    createCanvas(windowWidth, windowHeight);
    createGrain();
    textFont("Cabin Sketch");
    frameRate(5);
}

function draw() {

    updatePixels();

    fill(colors.light);
    rect(width/8, height/8, width/8*6, height/8*6);
    stroke(colors.dark);
    scribble.bowing = 0;
    strokeWeight(2);
    scribble.scribbleRect(width/2, height/2, width/8*6, height/8*6);

    fill(colors.dark);
    noStroke();
    textSize(60);
    textAlign(CENTER, CENTER);
    text("Joined\nTogether", width/2, height/2);

}

function createGrain() {

    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {

            if (random() > 0.5) {
                set(i, j, color(colors.mid));
            } else {
                set(i, j, color("#7FA17F"));
            }
        }
    }
}
