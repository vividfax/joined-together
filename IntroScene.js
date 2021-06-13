class IntroScene {
  constructor(leftHand, rightHand) {
    this.inProgress = false;
    this.leftHand = leftHand;
    this.rightHand = rightHand;
    this.upperHandPos;
    this.lowerHandPos;
  }
  setup() {
    textFont("Cabin Sketch");
    textAlign(CENTER, CENTER);
    this.upperHandPos = 1496 * 0.4;
    this.lowerHandPos = percentToPixelHeight(5);
    this.addText();
  }
  addText() {
    textSize(90);
    fill("rgba(" + rgbColors.dark + ", 0.1)");
    text("OUT\nOF\nTOUCH", width / 2, height / 2);
  }
  moveHandsDown() {
    for (let i = this.upperHandPos; i < this.lowerHandPos; i += 2) {
      this.leftHand.translateY = i;
      this.rightHand.translateY = i;
    }
    return true;
  }
  start() {
    this.inProgress = true;
    let handMoved = false;
    let textShown = false;
    this.setup();
    this.moveHandsDown();
  }
}
