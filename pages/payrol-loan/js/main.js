$(document).ready(function () {
    if ($('.tabs-container').length > 0) {
        var tabsHead = new Swiper('.tabs-head .swiper-container', {
            spaceBetween: 40,
            slidesPerView: 'auto',
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            watchOverflow: true,

            breakpoints: {
                767: {
                  spaceBetween: 20
                },
            }
        });
    }

    $('.tabs-head-item').on('click', function () {
        if ($(this).hasClass('active')) {} else {
            $('.tabs-head-item').removeClass('active');
            $(this).addClass('active');
            $('.tabs-content-item').fadeOut(0).eq($(this).index()).fadeIn();
        }
    });
});