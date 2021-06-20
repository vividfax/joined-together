class EndingScene {
  constructor(leftHand, rightHand, dialogScenes, outcome) {
    this.inProgress = true;
    this.leftHand = leftHand;
    this.rightHand = rightHand;
    this.dialogScenes = dialogScenes;
    this.movingPos;
    this.outcome = outcome;
  }
  start() {
    this.dialogScenes.bodyTextElement.hide();
    endButton.hide();
    if (this.dialogScenes.endOutcome == "positive") {
      this.dialogScenes.moveHandsCloser();
    }
    if (this.dialogScenes.endOutcome == "negative") {
      this.dialogScenes.moveHandsFurther();
    }
  }
}
