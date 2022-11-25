'use strict';

/* VARS */
var mqJustDesktop = window.matchMedia( "(min-width: 1280px)" );
var mqDesktop = window.matchMedia( "(min-width: 768px)" );
var mqTabletPortrait = window.matchMedia( "(min-width: 768px) and (max-width: 1279px)" );
var mqTabletMobilePortrait = window.matchMedia( "(min-width: 320px) and (max-width: 1024px)" );
var mqMobilePortrait = window.matchMedia( "(max-width: 767px)" );

/* DOCUMENT READY */

$(document).ready(function() {
  //Remove # from href
  $( document ).on('click', 'a, area', function(e) {
    var ahref = $(this).attr('href');
    if(ahref=="#"){
      e.preventDefault();
    }
  });

  // Add touch-device class to body if it is a touch device
  if(isTouchDevice()) {
    $('body, .btn, a').addClass('touch');
    $('.hero__bg-video').remove();
    $('.carousel__card__figure__bg-video').remove();
  } else {
    $('body, .btn, a, .hero__bg-video, .carousel__card__figure__bg-video').addClass('no-touch');
  }

  // match Height
  $('.products__cards__item').matchHeight();
  $('.services__cards__text').matchHeight();
  $('.services__cards__title').matchHeight();
  $('.services__cards__text__subtitle').matchHeight();
  $('.clients__cards__item__content').matchHeight();
  $('.clients__cards__text__title').matchHeight();

  // Carousel
  var carousel = new Swiper('.carousel .swiper-container', {
    loop: true,
    loopAdditionalSlides: 2,
    centeredSlides: true,
    spaceBetween: 50,
    freeMode: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
      draggable: true,
    },
    slidesPerView: 3,
    breakpoints: {
      // when window width is <= 767px
      767: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      }
    }
  });
});

/* FUNCTIONS */

// Detect if it is a touch device
function isTouchDevice() {
  return true == ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch);
}
