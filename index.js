var $main_icon = $('.main-icon');
var $win = $(window);

$win.on('scroll', function(){
  var top = $win.scrollTop();
  $main_icon.css('transform', 'rotate(' + top + 'deg');
})
