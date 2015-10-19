$(document).ready(function () {
  (function ($) { // IIFE
    $.fn.blinkIt = function (fadeTime) {
      var text = this

      function disAppear () {
        text.fadeOut(fadeTime, function(){
          text.fadeIn(fadeTime, disAppear)
        });
      }
      disAppear();
      // return this;
    };
  } (jQuery));

  jQuery('#blink').blinkIt(1000);
  jQuery('#joy').blinkIt(500);
});
