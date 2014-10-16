$( document ).ready(function() {

var rotateLogo = function(){
  $('h1').addClass('rotate');
  setTimeout(function(){
    $('h1').removeClass('rotate');

  }, 1000);
}
var hashManipulation = function(){
  if (window.location.hash==='#home' || window.location.hash==='') {
    $('.pages').hide();
    $('#home').fadeIn();
    $('#menu li a').removeClass('current');
    $('#menu li a:contains("home")').addClass('current');
  } else if (window.location.hash==='#about') {
    $('.pages').hide();
    $('#about').fadeIn();
    $('#menu li a').removeClass('current');
    $('#menu li a:contains("about")').addClass('current');
  } else if (window.location.hash==='#gallery') {
    $('.pages').hide();
    $('#gallery').fadeIn();
    $('#menu li a').removeClass('current');
    $('#menu li a:contains("gallery")').addClass('current');    
  } else if (window.location.hash==='#contact') {
    $('.pages').hide();
    $('#contact').fadeIn();
    $('#menu li a').removeClass('current');
    $('#menu li a:contains("contact")').addClass('current');    
  };
};

rotateLogo();
hashManipulation();
$(window).on('hashchange', function(){
  hashManipulation();
  rotateLogo();
});

$('.remodal a').on('click', function(){
  $('.remodal-overlay').hide();
  $('html').css('overflow', 'auto');;
})

}); 