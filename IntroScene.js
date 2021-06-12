class IntroScene {

    constructor(leftHand, rightHand) {
        this.inProgress = false;
        this.leftHand = leftHand;
        this.rightHand = rightHand;
        this.lowerHandPosition = percentToPixelHeight(5);
    }
    setup() {
        textFont("Cabin Sketch");
        textAlign(CENTER, CENTER);
    }
    displayText() {
        textSize(90);
        fill(colors.dark);
        text("OUT\nOF\nTOUCH", width/2, height/2);
    }
    moveHandsDown() {
        let startingPosition = this.leftHand.y;
        for(let i=startingPosition; i+=2; i < this.lowerHandPosition){
            this.leftHand.y = i;
            this.rightHand.y = i;
        }
        return true;
    }
    start() {
        this.inProgress = true;
        let handMoved = false;
        let textShown = false;
        this.setup();
        this.displayText();
        this.moveHandsDown();
    }
}
