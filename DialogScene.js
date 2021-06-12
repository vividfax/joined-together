class DialogScene {

    constructor(scenario) {

        this.scenario = scenario;
    }

    display() {

        rectMode(CENTER);
        noStroke();
        fill(colors.white);
        rect(width/4, height/5*4, 400, 80);
        rect(width/4*3, height/5*4, 400, 80);

        stroke(colors.dark);
        strokeWeight(2);
        scribble.scribbleRect(width/4, height/5*4, 400, 80);
        scribble.scribbleRect(width/4*3, height/5*4, 400, 80);
        noStroke();


        noStroke();
        fill(colors.dark);
        textSize(18);
        textFont("Avenir");
        rectMode(CORNER);
        textLeading(26);

        text(this.scenario.scenario, width/2 - 250, height/2 - 100, 500);

        text(this.scenario.choice1, width/4, height/5*4);
        text(this.scenario.choice2, width/4*3, height/5*4);
    }

    hovered() {

    }

    clicked() {

    }
}
