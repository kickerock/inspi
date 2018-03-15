// main.js file
// Author: Andrew Narolskii
// Email: kickerwrk@gmail.com
// 2018

$(document).ready(function() {
  // Инициализация слайдера
  $(".owl-carousel").owlCarousel({
    animateOut: 'rotateOut',
    animateIn: 'bounce',
    autoHeight: true,
    items: 1,
    loop: false,
    dots: false,
    nav: false,
    mouseDrag: false,
    merge: false,
    smartSpeed: 250,
    URLhashListener: true,
    startPosition: '#start'

  });

  function talks() {
    var timerId = setInterval(function() {
      $('.display').toggle();
      $('.talk').toggle();
    }, 500);
    setTimeout(function() {
      clearInterval(timerId);

    }, 3000);
  };
  talks();
  // Начальные фразы (-:


  // ----------------//----------------

  // Подмигивание

  // ----------------//----------------

  // Поговорим?)
  $('.talking').click(function() {
    if ($(this).hasClass('second')) {

      $('.wow').hide();
    } else {
      $('.wow').show();
    }


    talks();

  });
  // -------------//----------------

  if($(document).width()<=768){
    $('#social div').hide();
    $('.talking').click(function() {
        $(document).scrollTop( $("#bboard").offset().top );
    });
  }
});
