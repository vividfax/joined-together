class DialogScene {
  constructor(leftHand, rightHand) {
    this.bodyTextElement = select("#dialogBodyText");
    this.choiceOne; // text
    this.choiceTwo; // text
    this.currentScene = 0;
    this.leftHand = leftHand;
    this.rightHand = rightHand;
    this.endButton;
    this.endOutcome;
  }
  nextScene(choice) {
    let outcome;
    if (
      story.story[this.currentScene - 1] != undefined &&
      this.currentScene != story.story.length
    ) {
      if (choice == "1" && this.currentScene == story.story.length - 2) {
        this.endOutcome = "positive";
        outcome = story.story[this.currentScene - 1].outcome1;
      }
      if (choice == "2" && this.currentScene == story.story.length - 2) {
        this.endOutcome = "negative";
        outcome = story.story[this.currentScene - 1].outcome2;
      } else if (choice == "1") {
        outcome = story.story[this.currentScene - 1].outcome1;
      } else {
        outcome = story.story[this.currentScene - 1].outcome2;
      }

      this.bodyTextElement.html(outcome);
      this.bodyTextElement.html(story.story[this.currentScene].scenario, true);
      buttonOne.changeText(story.story[this.currentScene].choice1);
      buttonTwo.changeText(story.story[this.currentScene].choice2);
    } else if (this.currentScene == 0) {
      this.bodyTextElement.html(story.story[this.currentScene].scenario);
      buttonOne.changeText(story.story[this.currentScene].choice1);
      buttonTwo.changeText(story.story[this.currentScene].choice2);
    }
    if (this.currentScene == story.story.length - 1) {
      if (this.endOutcome == "positive") {
        outcome = story.story[this.currentScene].outcome1;
      }
      if (this.endOutcome == "negative") {
        outcome = story.story[this.currentScene].outcome2;
      }
      console.log(story.story, this.currentScene);
      this.bodyTextElement.html(outcome);
      buttonOne.hide();
      buttonTwo.hide();
      this.endButton = new Button(
        width / 2 - 240,
        (height / 4) * 3,
        360,
        80,
        "button-three"
      );
      this.endButton.setup();
      this.endButton.makeEvents();
    }
    if (this.currentScene < story.story.length - 1) this.currentScene++;
  }
  moveHandsFurther() {
    this.leftHand.x += 300;
    this.rightHand.x -= 300;
  }
  moveHandsCloser() {
    this.leftHand.x -= 200;
    this.rightHand.x += 200;
  }
  hide() {
    this.bodyTextElement.hide();
  }
  show() {
    this.bodyTextElement.show();
  }
}
