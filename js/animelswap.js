$(document).ready(function() {
  var el1 = $('.hldr').children(':first-child');
  var el2 = $('.hldr').children(':last-child');
  var dir = 'top';
  var pos1 = el1.offset()[dir];
  var pos2 = el2.offset()[dir];
  var swapped = false;
  var animComplete = true;
  
  function swap() {
    if (animComplete == false) { return; }
    
    var endPt = Math.round(pos2 - pos1);
    var a = (swapped == false) ? el1 : el2;
    var b = (swapped == false) ? el2 : el1;
    var aprop = {};
    var bprop = {};
    
    animComplete = false;
    bprop[dir] = '-=' + endPt;
    endPt = (swapped == true) ? (endPt - endPt) : endPt;
    aprop[dir] = endPt;

    b.animate({opacity: 0}, 500);
    b.animate(bprop, 0);
    a.css({'z-index': '1'})
    a.animate(aprop, 
                  {duration: 800,
                   complete: function() {
                     animComplete = true;
                   }
                  });
    b.animate({opacity: 1}, 300);
    swapped = (swapped == false) ? true : false;
  }
  
  $('button').on('click', swap);
});