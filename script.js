var birdText = new Audio();
birdText.src =
  "https://cdn.glitch.global/a6edab6c-50be-420b-8ce6-40e40be1f1a4/BidrdMonologue2.mp3?v=1664472867301";

var fishText = new Audio();
fishText.src =
  "https://cdn.glitch.global/a6edab6c-50be-420b-8ce6-40e40be1f1a4/FishMonologue.mp3?v=1664472868657";

var birdMark = false;
var fishMark = false;

window.addEventListener("touchstart", () => {
  if (birdMark) {
    fishText.pause();
    birdText.play().catch(console.error);
  } else if (fishMark) {
    birdText.pause();
    fishText.play().catch(console.error);
  }
});

AFRAME.registerComponent("registerbirdevents", {
  init: function () {
    var marker = this.el;

    marker.addEventListener("markerFound", function () {
      var markerId = "markerA";
      birdMark = true;
      fishMark = false;
    });

    marker.addEventListener("markerLost", function () {
      var markerId = "markerA";
      birdText.pause();
    });
  },
});

AFRAME.registerComponent("registerfishevents", {
  init: function () {
    var marker = this.el;

    marker.addEventListener("markerFound", function () {
      var markerId = "markerB";
      birdMark = false;
      fishMark = true;
    });

    marker.addEventListener("markerLost", function () {
      var markerId = "markerB";
      fishText.pause();
    });
  },
});
