
$(document).ready(function() {
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

    if ($('.mytooltipster').length > 0) {
        $('.mytooltipster').tooltipster({
            side: ['right', 'left', 'top', 'bottom'],
            interactive: true,
            distance: 5,
            trigger:  'custom',
            triggerOpen:  {
                click:  true,
                touchstart:  true
            },
            triggerClose:  {
                click:  true,
                scroll:  true,
                tap:  true
            }
        });
    }

    $('.ui-dropdown_list-item').on('click', function () {
        $(this).find('.ui-dropdown_list-item-head').toggleClass('active');
        $(this).find('.ui-dropdown_list-item-main').slideToggle();
    });

    $('.switch-btns-txt').on('click', function () {
        if ($(this).hasClass('active')) {} else {
            $('.switch-btns-btn').toggleClass('active');
            $('.switch-btns-txt').toggleClass('active');
            $('.switch-content-item').fadeOut(0).eq($(this).index()).fadeIn();

            if ($('.calc-category').length > 0 ) {
                calcCategorySlider.update();
            }
        }
    });

    $('.switch-btns-btn').on('click', function () {
        $(this).toggleClass('active');
        $(this).siblings('.switch-btns-txt').toggleClass('active');
        $('.switch-content-item').fadeOut(0).eq($('.switch-btns-txt.active').index()).fadeIn();

        if ($('.calc-category').length > 0 ) {
            calcCategorySlider.update();
        }
    });

    // multiservice page
    $('.page_content--multiservice .program_tabs-head-item').click(function() {
        $('.program_tabs-head-item').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.program_tabs-head').siblings('.program_tabs-main').find('.program_tabs-main-box').removeClass('active').eq($(this).index()).addClass('active');
    });

    $('.page_content--multiservice .program_tabs-main-box-btn').click(function() {
        $(this).toggleClass('active');
        $(this).siblings('.program_tabs-main-box-content').slideToggle();
    });


    $('.page_content--multiservice .programs-main-tabs-item').click(function() {
        $('.programs-main-tabs-item').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.programs-main-tabs').siblings('.programs-main-content').find('.programs-main-content-box').removeClass('active').eq($(this).index()).addClass('active');
    });
    //-- end multiservice page


    // refinancing page
    if ($('.page_content--refinancing .calc-loans').length > 0) {
        $("#slider_loan_sum1").slider({
            range: "min",
            step: 1,
            min: 50000,
            max: 1000000,
            value: 700000,
            slide: function (event, ui) {
                $("#slider_loan_sum_text1").val(ui.value.toLocaleString('ru-RU'));
            }
        });

        $("#slider_loan_sum2").slider({
            range: "min",
            step: 1,
            min: 50000,
            max: 1000000,
            value: 700000,
            slide: function (event, ui) {
                $("#slider_loan_sum_text2").val(ui.value.toLocaleString('ru-RU'));
            }
        });

        $("#slider_loan_sum3").slider({
            range: "min",
            step: 1,
            min: 50000,
            max: 1000000,
            value: 700000,
            slide: function (event, ui) {
                $("#slider_loan_sum_text3").val(ui.value.toLocaleString('ru-RU'));
            }
        });

        $("#slider_loan_sum4").slider({
            range: "min",
            step: 1,
            min: 50000,
            max: 1000000,
            value: 700000,
            slide: function (event, ui) {
                $("#slider_loan_sum_text4").val(ui.value.toLocaleString('ru-RU'));
            }
        });

        $("#slider_loan_sum5").slider({
            range: "min",
            step: 1,
            min: 50000,
            max: 1000000,
            value: 700000,
            slide: function (event, ui) {
                $("#slider_loan_sum_text5").val(ui.value.toLocaleString('ru-RU'));
            }
        });

        $("#slider_loan_sum6").slider({
            range: "min",
            step: 1,
            min: 5,
            max: 40,
            value: 20,
            slide: function (event, ui) {
                $("#slider_loan_sum_text6").val(ui.value.toLocaleString('ru-RU'));
            }
        });
    }

    const $calcLoansHead = $('.page_content--refinancing .calc-loans-box-head');
    const $calcLoansHeadSon = $calcLoansHead.find('.calc-loans-box-head-btn_del');

    $calcLoansHead.on('click', function() {
        event.stopPropagation();
        $(this).toggleClass('open');
        $(this).siblings('.calc-loans-box-main').slideToggle();
        return false;
    });

    $calcLoansHeadSon.on('click', function(event) {
        event.stopPropagation();
    });

    //-- end refinancing page

    // insurance page
    $('.page_content--insurance .dropdown_list-item-head').on('click', function () {
        $(this).toggleClass('open');
        $(this).siblings('.dropdown_list-item-main').slideToggle();
    })
    //--end  insurance page

    if ($('.js-popup_open').length > 0) {
        $(".js-popup_open").fancybox({
            margin: 0,
            padding: 0,
            closeBtn: false,
            centerOnScroll: true,
            autoScale: false,
            helpers: {
                overlay: {
                    locked: false
                }
            }
        });
      } 
});
