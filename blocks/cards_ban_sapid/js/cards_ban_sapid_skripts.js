$(document).ready(function () {
    $('.ban_sapid-box-btn.js-open-content').on('click', function () {
        if ($(this).hasClass('opened')) {
            $('.ban_sapid-box-main').fadeOut();
            $('.js-open-content').removeClass('opened');
        } else {
            $('.ban_sapid-box-main').fadeOut();
            $('.js-open-content').removeClass('opened');
            $(this).addClass('opened');
            $(this).siblings('.ban_sapid-box-main').fadeIn();
        }
    });

    $('.js-open-video').on('click', function () {
        $('.ban_sapid-box-main').fadeOut();
        $('.js-open-content').removeClass('opened');
    });

    $('.ban_sapid-box-main-btn_close').on('click', function () {
        $(this).parent('.ban_sapid-box-main').fadeOut();
        $('.js-open-content').removeClass('opened');
    });

    $(document).click(function (event) {
        if ($(event.target).closest(".ban_sapid-box").length)
            return;
        $('.ban_sapid-box-main').fadeOut();
        $('.js-open-content').removeClass('opened');
        event.stopPropagation();
    });
});