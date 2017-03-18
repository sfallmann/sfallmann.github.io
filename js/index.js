//var $titles = $('#header h2');
//  $titles.slideToggle( 1000, 'swing', function() {
 //   // Animation complete.
 // });

var $leftNavLinks = $('.left-nav-item.nav-link');
var $aboutContent = $('#about .content');
var $rollup = $('#rollup');

var $firstNavItem = $('.left-nav-item:first-of-type');
var $titles = $('.titles');
var $wobble = $('.wobble');
var $hornsWobble = $('.horns-wobble');

$rollup.on('click', function(){
  $('#rollup .fa').toggleClass('fa-chevron-down').toggleClass('fa-chevron-up');
  $leftNavLinks.toggleClass('hidden');

})

function showContent() {
  $rollup.trigger('click');
  
  var id = $(this).data('anchor');
  var pos = $(id).position();
  scrollTo(pos.left, pos.top);
  var $content = $(id + " .content");
  $content.hide();
  $content.fadeIn("slow");
};

$leftNavLinks.on('click', showContent);

$('.logo').on('click', function() {
  $('html,body').scrollTop(0);

  if (!$titles.hasClass('teleport')){
    $titles.addClass('teleport');
  }

  if($('#rollup .fa').hasClass('fa-chevron-up')){
    $rollup.trigger('click');
  }  
  
});

$titles.on('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
  function(e) {
    $titles.removeClass('teleport');
  });

$wobble.on('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
  function(e) {
    $hornsWobble.removeClass('wobble');
    setTimeout(function(){
      $hornsWobble.addClass('wobble');
    }, 1);
    //
  });