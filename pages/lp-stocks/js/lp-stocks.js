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
  // $('.popup-error-btn, .popup-error-btn-close').click(function () {
  //   $('.popup-error-container').fadeToggle();
  //   $('.popup_black').toggleClass('active');
  //   $('.popup').toggleClass('over');
  // });
  // $('.popup-successfully-btn, .popup-successfully-btn-close').click(
  //   function () {
  //     $('.popup-successfully-container').fadeToggle();
  //     $('.popup_black').toggleClass('active');
  //     $('.popup').toggleClass('over');
  //   }
  // );
});
