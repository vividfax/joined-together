class Button {
  constructor(x, y, width, height, id) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.domElement;
    this.id = id;
  }
  display() {
    // stroke(colors.dark);
    // strokeWeight(2);
    // scribble.bowing = 0;
    // scribble.scribbleRect(this.x, this.y, this.width, this.height);

    // rectMode(CENTER);
    // noStroke();
    // fill(colors.white);
    // rect(this.x, this.y, this.width, this.height);
    // fill(colors.dark);
    // textSize(18);
    // textFont("Avenir");
    // rectMode(CORNER);
    // textLeading(26);
    let p5elt = createButton("Unchanged - use Button.changeText to update");
    this.style(p5elt);
    p5elt.position(this.x, this.y);
    p5elt.id(this.id);
    this.domElement = select("#" + this.id).elt;
    this.makeEvents();
  }
  changeText(text) {
    this.domElement.innerHTML = text;
  }
  makeEvents() {
    this.domElement.onclick = function () {
      console.log("clicked");
      scenes.nextScene();
      // animate hands
      // change text
    };
  }
  style(button) {
    button.class("btn");
  }
}
