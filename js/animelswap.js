$(document).ready(function() {
  var Element = function(el) {
    this.el = el;
    this.x = el.position().left;
    this.y = el.position().top;
  }

  function swap() {
    if (animComplete === false) { return; }

    var endPt = Math.round(pos2 - pos1);
    var a = (swapped === false) ? el1.el : el2.el;
    var b = (swapped === false) ? el2.el : el1.el;
    var aprop = {};
    var bprop = {};

    animComplete = false;
    bprop[dir] = '-=' + endPt;
    endPt = (swapped === true) ? (endPt - endPt) : endPt;
    aprop[dir] = endPt;

    b.animate({opacity: 0}, 500);
    b.animate(bprop, 0);
    a.css({"z-index": "1"})
    a.animate(aprop,
                {duration: 800,
                 complete: function() {
                   animComplete = true;
                 }
                });
    b.animate({opacity: 1}, 300);
    swapped = (swapped === false) ? true : false;
  }

  var el1 = new Element($('.hldr').children(':first-child'));
  var el2 = new Element($('.hldr').children(':last-child'));
  var dir = (el2.y > el1.y) ? "top" : "left";
  var pos1 = el1.el.offset()[dir];
  var pos2 = el2.el.offset()[dir];
  var swapped = false;
  var animComplete = true;

  $("button").on("click", swap);

});