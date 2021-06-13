class EndingScene {
  constructor(leftHand, rightHand, dialogScenes, outcome) {
    this.inProgress = true;
    this.leftHand = leftHand;
    this.rightHand = rightHand;
    this.dialogScenes = dialogScenes;
    this.movingPos;
    this.outcome = outcome;
  }
  setup() {}
  start() {
    this.inProgress = true;
    this.dialogScenes.bodyTextElement.hide();
    this.dialogScenes.endButton.hide();
    if (this.dialogScenes.endOutcome == "positive") {
      if (this.leftHand.x - (this.rightHand.x + this.rightHand.w) > 50) {
        this.dialogScenes.moveHandsCloser();
      }
    }
    if (this.dialogScenes.endOutcome == "negative") {
      if (this.leftHand.x - (this.rightHand.x + this.rightHand.w) < 800) {
        this.dialogScenes.moveHandsFurther();
      }
    }
  }
}
