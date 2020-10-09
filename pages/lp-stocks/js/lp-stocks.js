$(document).ready(function () {
  var swiper = new Swiper('.subscription-slider', {
    slidesPerView: "auto",
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});