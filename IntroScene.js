class IntroScene {
  constructor(leftHand, rightHand, dialogScene) {
    this.inProgress = true;
    this.leftHand = leftHand;
    this.rightHand = rightHand;
    this.upperHandPos;
    this.lowerHandPos;
    this.movingPos;
    this.dialogScene = dialogScene;
  }
  setup() {
    textFont("Cabin Sketch");
    textAlign(CENTER, CENTER);
    this.upperHandPos = height - this.leftHand.h;
    this.lowerHandPos = percentToPixelHeight(80);
    this.addText();
    this.movingPos = this.upperHandPos;
  }
  addText() {
    textSize(90);
    fill("rgba(" + rgbColors.dark + ", 1)");
    text("OUT\nOF\nTOUCH", width / 2, height / 2);
  }
  moveHandsDown() {
    if (this.movingPos < this.lowerHandPos) {
      this.leftHand.y = this.movingPos;
      this.rightHand.y = this.movingPos;
      this.movingPos += 10;
    }
    return false;
  }
  start() {
    this.inProgress = true;

    let handMoved = false;
    let textShown = false;
    this.inProgress = this.moveHandsDown();
  }
}
