class DialogScene {
  constructor(scenario) {
    // this.scenario = scenario;
    this.bodyTextElement = select("#dialogBodyText");
    this.choiceOne; // text
    this.choiceTwo; // text
    this.currentScene = 0;
  }

  display() {
    noStroke();
    // this.bodyTextElement.html(this.scenario.scenario);
  }
  nextScene() {
    this.bodyTextElement.html(story.story[this.currentScene].scenario);
    buttonOne.changeText(story.story[this.currentScene].choice1);
    buttonTwo.changeText(story.story[this.currentScene].choice2);
    // Look like we might need a postScene kinda thing
    this.currentScene++;
  }
}
