$(document).ready(function () {
  var swiper = new Swiper('.subscription-slider', {
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  $('.popup-error-btn-close').click(function () {
    $('.popup-error-container').toggleClass('active');
    $('.popup_black').toggleClass('active');
    $('.popup').removeClass('over');
  });
  $('.popup-successfully-btn-close').click(function () {
    $('.popup-successfully-container').toggleClass('active');
    $('.popup_black').toggleClass('active');
    $('.popup').removeClass('over');
  });

  if ($('.main_ban').length > 0) {
    var topBanSlider = new Swiper('.main_ban .swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.main_ban-nav-pagination-num',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.main_ban-nav-btn-next',
        prevEl: '.main_ban-nav-btn-prev',
      },
    });

    $('.main_ban-nav-pagination-progress').asPieProgress({
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

    $('.main_ban-nav-pagination-progress').asPieProgress('start');

    topBanSlider.on('slideChange', function () {
      $('.main_ban-nav-pagination-progress').asPieProgress('reset');
      $('.main_ban-nav-pagination-progress').asPieProgress('start');
    });

    topBanSlider.on('touchStart', function () {
      $('.main_ban-nav-pagination-progress').asPieProgress('stop');
    });

    topBanSlider.on('touchEnd', function () {
      $('.main_ban-nav-pagination-progress').asPieProgress('start');
    });
  }
});
