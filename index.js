
// var $win = $(window);
//
// $win.on('scroll', function(){
//   var top = $win.scrollTop();
//   $main_icon.css('transform', 'rotate(' + top + 'deg');
// })

$( document ).ready( function() {
   $('.main-sentence-ready').fadeIn( 3000, 'linear' );
   $('.main-sentence-hello').textition({
     speed: 1,
     animation: 'ease-out',
     map: {x: 400, y: 200, z: 0},
     autoplay: true,
     interval: 1.5,
    perspective: 300
   });

 } );
