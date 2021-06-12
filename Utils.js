function percentToPixelHeight(percentage) {
    let decimal = percentage * 0.01;
    return decimal * windowHeight;
}
function percentToPixelWidth(percentage) {
    let decimal = percentage * 0.01;
    return decimal * windowWidth;
}
