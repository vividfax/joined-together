class Hand {

    constructor(x, y, img) {

        this.img = img;
        this.size = 0.4;
        this.w = 792 * this.size;
        this.h = 1496 * this.size;
        this.x = x;
        this.y = y;

    }
    display(x, y) {
        image(this.img, x, y, this.w, this.h);
    }
}
