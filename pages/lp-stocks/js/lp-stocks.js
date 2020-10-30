$(document).ready(function () {
  if ($('.subscription-slider').length > 0 ) {
  var swiper = new Swiper('.subscription-slider', {
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.subscription-slider .swiper-button-next',
      prevEl: '.subscription-slider .swiper-button-prev',
    },
    pagination: {
      el: '.subscription-slider .swiper-pagination',
      clickable: true,
    },
  });
}

});
