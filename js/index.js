$(document).ready(function() {

  $('.auto-height').css('min-height', window.innerHeight + 'px');

});

$(window).resize(function() {

  $('.auto-height').css('min-height', window.innerHeight + 'px');

});