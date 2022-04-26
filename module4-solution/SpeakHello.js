
(function (window) {
  var hellospeaker = {};
  speakWord = "Hello";
  hellospeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  window.hellospeaker = hellospeaker;

})(window);

