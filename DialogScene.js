class DialogScene {
  constructor(leftHand, rightHand) {
    this.bodyTextElement = select("#dialogBodyText");
    this.choiceOne; // text
    this.choiceTwo; // text
    this.currentScene = 0;
    this.leftHand = leftHand;
    this.rightHand = rightHand;
    // this.endButton;
    this.endOutcome;
    this.handsMovedCloser = false;
    this.handsMovedFurther = false;
    this.handDistance;
  }
  nextScene(choice) {
    let outcome;
    if (
      story.story[this.currentScene - 1] != undefined &&
      this.currentScene <= story.story.length
    ) {
      // Ending scenario
      if (choice == "1" && this.currentScene == story.story.length) {
        this.endOutcome = "positive";
        outcome = story.story[this.currentScene - 1].outcome1;
      } else if (choice == "2" && this.currentScene == story.story.length) {
        this.endOutcome = "negative";
        outcome = story.story[this.currentScene - 1].outcome2;
      }
      // Normal scenario
      if (choice == "1" && this.currentScene < story.story.length) {
        outcome = story.story[this.currentScene - 1].outcome1;
      } else if (choice == "2" && this.currentScene < story.story.length) {
        outcome = story.story[this.currentScene - 1].outcome2;
      }
      this.bodyTextElement.html(outcome);

      if (story.story[this.currentScene] != undefined) {
        this.bodyTextElement.html(
          story.story[this.currentScene].scenario,
          true
        );
        buttonOne.changeText(story.story[this.currentScene].choice1);
        buttonTwo.changeText(story.story[this.currentScene].choice2);
      }
    } else if (this.currentScene == 0) {
      this.bodyTextElement.html(story.story[this.currentScene].scenario);
      buttonOne.changeText(story.story[this.currentScene].choice1);
      buttonTwo.changeText(story.story[this.currentScene].choice2);
    }
    if (this.currentScene == story.story.length) {
      if (this.endOutcome == "positive") {
        outcome = story.story[this.currentScene - 1].outcome1;
      }
      if (this.endOutcome == "negative") {
        outcome = story.story[this.currentScene - 1].outcome2;
      }
      this.bodyTextElement.html(outcome, false);
      buttonOne.hide();
      buttonTwo.hide();
      if (endButton == undefined) {
        endButton = new Button(
          width / 2 - 240,
          (height / 4) * 3,
          360,
          80,
          "button-three"
        );
        endButton.setup();
        endButton.makeEvents();
      }
    }
    if (this.currentScene < story.story.length) this.currentScene++;
  }
  moveHandsFurther() {
    if (
      this.handsMovedFurther == false &&
      this.handDistance > 50 &&
      this.handDistance < 700
    ) {
      this.leftHand.x += 20;
      this.rightHand.x -= 20;
    } else this.handsMovedFurther = true;
  }
  moveHandsCloser() {
    if (
      this.handsMovedCloser == false &&
      this.handDistance < 600 &&
      this.handDistance > -100
    ) {
      this.leftHand.x -= 20;
      this.rightHand.x += 20;
    } else this.handsMovedCloser = true;
  }
  hide() {
    this.bodyTextElement.hide();
  }
  show() {
    this.bodyTextElement.show();
  }
  calculateDistance() {
    this.handDistance = this.leftHand.x - (this.rightHand.x + this.rightHand.w);
  }
}
