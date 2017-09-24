$("#slideshow > div").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1500)
    .next()
    .fadeIn(3000)
    .end()
    .appendTo('#slideshow');
},  5000);

$("#slideshow > div:first").fadeIn(3000);
