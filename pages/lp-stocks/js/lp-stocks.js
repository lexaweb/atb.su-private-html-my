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
if ($('.page_content--lp-stocks').length > 0 ) {
  $('.fancybox-overlay').addClass('page_content--lp-stocks');
}

});
