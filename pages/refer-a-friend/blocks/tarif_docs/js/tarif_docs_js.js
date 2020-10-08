$(function () {

    $('.open_doc').on('click', function (e) {
      e.preventDefault();
      $(this).parents('li').toggleClass('act');
    });
  
    $('.active_text_toggle').on('click', function (e) {
      e.preventDefault();
      $(this).parents('.wrapper-dropdown-5').toggleClass('active');
    });
});