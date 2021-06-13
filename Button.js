class Button {
  constructor(x, y, width, height, id) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.domElement;
    this.id = id;
    this.p5elt;
  }
  setup() {
    this.p5elt = createButton("");
    this.p5elt.position(this.x, this.y);
    this.p5elt.id(this.id);
    this.domElement = select("#" + this.id).elt;
    this.p5elt.class("btn btn-6 btn-6d");
  }
  changeText(text) {
    this.domElement.innerHTML = text;
  }
  makeEvents() {
    this.domElement.onclick = function () {
      let decision;
      if (this.id == "button-one") {
        decision = "1";
        scenes.nextScene(decision);
      } else if (this.id == "button-two") {
        decision = "2";
        scenes.nextScene(decision);
      } else {
        end.start();
      }
    };
  }
  hide() {
    this.p5elt.hide();
  }
  show() {
    this.p5elt.show();
  }
}
