$(document).ready(function () {
  if ($('.top_b_gallery').length > 0 ) {
  var galleryThumbs = new Swiper('.ban_sapid-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'fade',
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    noSwipingClass: 'ban_sapid-container',
  });

  var galleryTop = new Swiper('.top_b_gallery-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.top_b_gallery-nav-pagination-num',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.top_b_gallery-nav-btn-next',
      prevEl: '.top_b_gallery-nav-btn-prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });

  $('.top_b_gallery-nav-pagination-progress').asPieProgress({
    namespace: '',
    goal: 14000,
    min: 0,
    max: 14000,
    speed: 70,
    easing: 'linear',
    trackcolor: 'transparent',
    fillcolor: 'none',
    barcolor: '#fe5000',
    barsize: '6',
  });


  $('.top_b_gallery-nav-pagination-progress').asPieProgress('start');

  galleryTop.on('slideChange', function () {
    $('.top_b_gallery-nav-pagination-progress').asPieProgress('reset');
    $('.top_b_gallery-nav-pagination-progress').asPieProgress('start');
  });

  galleryTop.on('touchStart', function () {
    $('.top_b_gallery-nav-pagination-progress').asPieProgress('stop');
  });

  galleryTop.on('touchEnd', function () {
    $('.top_b_gallery-nav-pagination-progress').asPieProgress('start');
  });
}
});
