$(document).ready(function () {
  $('.active-video').on('click', function () {
    $('.popup_video').fadeToggle();
    $('.fancybox-overlay').fadeToggle();
    $('.add').addClass('over');
  });
  $('.btn_close').on('click', function () {
    $('.popup_video').fadeToggle();
    $('.fancybox-overlay').fadeToggle();
    $('.add').removeClass('over');
  });
});
