class Hand {
  constructor(img, numberOfHands) {
    this.img = img;
    this.size = (0.86 * height) / 1496; //0.4
    this.w = 792 * this.size;
    this.h = 1496 * this.size;
    this.x;
    this.y;
    this.handNumber = numberOfHands;
  }
  setup() {
    if (this.handNumber == 1) {
      this.x = width / 2 - this.w - width / 8;
      this.y = height - this.h;
    } else {
      this.x = width / 2 + width / 8;
      this.y = height - this.h;
    }
  }
  display() {
    image(this.img, this.x, this.y, this.w, this.h);
  }
}
