$(document).ready(function () {
    $('.page_content--business-deposit .dropdown-title').on('click', function () {
        if ($(window).width() < 999) {
            $(this).toggleClass('active');
            $(this).siblings('.dropdown-text').slideToggle();
        }
    });
});
