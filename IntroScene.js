class IntroScene {
  constructor(leftHand, rightHand, dialogScene, buttonOne, buttonTwo) {
    this.inProgress = true;
    this.leftHand = leftHand;
    this.rightHand = rightHand;
    this.upperHandPos;
    this.lowerHandPos;
    this.movingPos;
    this.dialogScene = dialogScene;
    this.buttonOne = buttonOne;
    this.buttonTwo = buttonTwo;
    this.title = select("h1");
    this.handsMovedDown = false;
    this.handsMovedUp = false;
    this.started = false;
  }
  setup() {
    textFont("Cabin Sketch");
    textAlign(CENTER, CENTER);
    this.upperHandPos = height - this.leftHand.h;
    this.lowerHandPos = percentToPixelHeight(80);
    this.movingPos = this.upperHandPos;
  }
  showHide() {
    this.title.toggleClass("hide");
  }
  moveHandsDown() {
    if (this.movingPos < this.lowerHandPos && this.handsMovedDown == false) {
      this.leftHand.y = this.movingPos;
      this.rightHand.y = this.movingPos;
      this.movingPos += 50;
    } else if (this.handsMovedDown == false) {
      this.handsMovedDown = true;
    }
    return this.moveHandsUp();
  }
  moveHandsUp() {
    if (
      this.movingPos > this.upperHandPos &&
      this.handsMovedDown == true &&
      this.handsMovedUp == false
    ) {
      this.leftHand.y = this.movingPos;
      this.rightHand.y = this.movingPos;
      this.movingPos -= 50;
      return false;
    } else if (
      this.movingPos == this.upperHandPos &&
      this.handsMovedDown == true &&
      this.handsMovedUp == false
    ) {
      this.handsMovedUp = true;
      return true;
    } else if (this.handsMovedDown == true && this.handsMovedUp == true)
      return true;
    else return false;
  }
  start() {
    return this.moveHandsDown();
  }
}
