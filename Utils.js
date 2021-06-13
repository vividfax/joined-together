function percentToPixelHeight(percentage) {
  let decimal = percentage * 0.01;
  return decimal * windowHeight;
}
function percentToPixelWidth(percentage) {
  let decimal = percentage * 0.01;
  return decimal * windowWidth;
}
var myPromise = new Promise(function (resolve, reject) {
  // resolve the promise after 1 second
  setTimeout(resolve, 20);
});
