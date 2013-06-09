$(document).ready(function() {
  var el1 = $('.hldr').children(':first-child');
  var el2 = $('.hldr').children(':last-child');
  var pos1 = el1.position().top;
  var pos2 = el2.position().top;
  var swapped = false;
  var animComplete = true;
  
  function swap() {
    if (animComplete == false) { return; }
    
    var endY = Math.round(pos2 - pos1);
    var a = (swapped == false) ? el1 : el2;
    var b = (swapped == false) ? el2 : el1;

    animComplete = false;
    b.animate({opacity: 0}, 500);
    b.animate({top: '-=' + endY}, 0);
    endY = (swapped == true) ? (endY - endY) : endY;
    a.css({'z-index': '1'})
    a.animate({top: endY}, 
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