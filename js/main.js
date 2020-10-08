$(document).ready(function () {
    var tabsGalleryThumbs = new Swiper('.tabs-container .tabs-head', {
        spaceBetween: 40,
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        watchOverflow: true,
        breakpoints: {
            767: {
                spaceBetween: 20,
                slidesPerView: 'auto',
            },
        }
    });

    $('.tabs-container .tabs-head-item').on('click', function () {
        if ($(this).hasClass('active')) {} else {
            $('.tabs-head-item').removeClass('active');
            $(this).addClass('active');
            $('.tabs-content-item').removeClass('active').fadeOut(0).eq($(this).index()).fadeIn();
        }
    });

    var tabsGalleryThumbsGr = new Swiper('.tabs-container .tabs-head_gr .swiper-container', {
        spaceBetween: 40,
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        watchOverflow: true,
        breakpoints: {
            999: {
                spaceBetween: 20,
                slidesPerView: 'auto',
            },
        },
        on: {
            reachBeginning: function () {
                $('.tabs-head_gr').removeClass('outside_left');
            },
            reachEnd: function () {
                $('.tabs-head_gr').removeClass('outside_right');
            },                          
        },
    });

    tabsGalleryThumbsGr.on('fromEdge', function() {
        if (tabsGalleryThumbsGr.isBeginning == false) {
            $('.tabs-head_gr').addClass('outside_right');
        }
        if (tabsGalleryThumbsGr.isEnd == false) {
            $('.tabs-head_gr').addClass('outside_left');
        }
    });

    $('.tabs-container .tabs-head_gr-item').on('click', function () {
        if ($(this).hasClass('active')) {} else {
            $('.tabs-head_gr-item').removeClass('active');
            $(this).addClass('active');
            $('.tabs-content-item').removeClass('active').fadeOut(0).eq($(this).index()).fadeIn();
        }
    });

    $('.ui-dropdown_list-item-head').on('click', function () {
        $(this).toggleClass('active');
        $(this).siblings('.ui-dropdown_list-item-main').slideToggle();
    });

    $('.ui-dropdown_list-item-tabs-head-item').on('click', function () {
        $(this).siblings('.ui-dropdown_list-item-tabs-head-item').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.ui-dropdown_list-item-tabs').find('.ui-dropdown_list-item-tabs-main-item').removeClass('active').fadeOut(0).eq($(this).index()).fadeIn();
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

    $("a[href^='#']").click(function () {
        var _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        return false;
    });

    function popupTarifTableHeight() {
        var nameRow = $('.popup_tarif-block_desk-name-box');
        var itemsRow = $('.popup_tarif-block_desk-list-item');
        var sectionTable = $('.popup_tarif-block_desk-name .popup_tarif-block_desk-section');
        var maxRowHeight = 0;
        nameRow.css({'height':'auto'});
        $('.popup_tarif-block_desk-list-item-box').css({'height':'auto'});
        for (var k = 0; k < sectionTable.length; k++) {

            for (var i = 0; i < sectionTable.eq(k).find(nameRow).length; i++) {
                for (var j = 0; j < itemsRow.length; j++) {
                    itemsRow.eq(j).find('.popup_tarif-block_desk-section').eq(k).each(function(){
                        $(this).find('.popup_tarif-block_desk-list-item-box').eq(i).each(function(){
                            if ($(this).height() > maxRowHeight) {
                                maxRowHeight = $(this).height();
                            }
                        });
                    });
                }
                for (var j = 0; j < itemsRow.length; j++) {
                    itemsRow.eq(j).find('.popup_tarif-block_desk-section').eq(k).each(function(){
                        $(this).find('.popup_tarif-block_desk-list-item-box').eq(i).height(maxRowHeight);
                    })
                }
                if (sectionTable.eq(k).find(nameRow).eq(i).height() > maxRowHeight) {
                    maxRowHeight = sectionTable.eq(k).find(nameRow).eq(i).height();
                    for (var j = 0; j < itemsRow.length; j++) {
                        itemsRow.eq(j).find('.popup_tarif-block_desk-section').eq(k).each(function(){
                            $(this).find('.popup_tarif-block_desk-list-item-box').eq(i).height(maxRowHeight);
                        })
                    }
                } else {
                    sectionTable.eq(k).find(nameRow).eq(i).height(maxRowHeight);
                }
                maxRowHeight = 0;
            }
        }
    }

    // account-for-business page
    $(window).resize(function() {
        popupTarifTableHeight();
    });

    if ($('.js-popup_open').length > 0) {
        $('.js-popup_open').fancybox({
            'padding': 0,
            'margin': 0,
            closeBtn: false,
            centerOnScroll: true,
            autoScale: false,
            afterShow: function() {
                popupTarifTableHeight();
            },
            beforeClose: function() {
                $('.mytooltipster').tooltipster('close');
                $('.popup_tarif-block_mobile-section:nth-child(1)').find('.popup_tarif-block_mobile-section-head').addClass('active');
                $('.popup_tarif-block_mobile-section:nth-child(1)').find('.popup_tarif-block_mobile-section-hidden').slideDown(0);
            }
        });
    }

    const $tableMobparent = $('.popup_tarif-block_mobile-section-head');
    const $son = $tableMobparent.find('.mytooltipster');

    $tableMobparent.on('click', function() {
        event.stopPropagation();
        $(this).toggleClass('active');
        $(this).siblings('.popup_tarif-block_mobile-section-hidden').slideToggle();
        return false;
    });

    $son.on('click', function(event) {
        event.stopPropagation();
    });

    if ($('.offers-container').length > 0) {
        btnOffset();

        $(window).scroll(function() {
            btnOffset();
        });
    }

    function btnOffset() {
        var offsetContainer = $('.offers-container').offset().top
        var containerHeigt = offsetContainer + $('.offers-container').height();
        if ($('.offers-container').length > 0) {
            if($(window).width() > 767) {
                var scrollWindow = $(window).scrollTop();
                if (scrollWindow > offsetContainer && scrollWindow < containerHeigt) {
                    $('.offers-btn').addClass('fixed');
                } else {
                    $('.offers-btn').removeClass('fixed');
                }
            } else {
                var scrollWindow = $(window).scrollTop();
                if (scrollWindow > offsetContainer && (scrollWindow  < containerHeigt - $(window).height())) {
                    $('.offers-btn').addClass('fixed');
                } else {
                    $('.offers-btn').removeClass('fixed');
                }
            }
        }
    }

    $('.page_content--acc_business .useful_tips-btn span').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).parents('.useful_tips-wrapper').find('.useful_tips-drop').slideUp();
            $(this).html('Подробнее');
        } else {
            $(this).addClass('active');
            $(this).parents('.useful_tips-wrapper').find('.useful_tips-drop').slideDown();
            $(this).html('Свернуть');
        }
    });
    

    // -- end account-for-business page

    // corp_card page
    $('.questions_tabs-head-item').on('click', function () {
        if ($(this).hasClass('active')) {} else {
            $('.questions_tabs-head-item').removeClass('active');
            $(this).addClass('active');
            $('.questions_tabs-main-item').removeClass('active').fadeOut(0).eq($(this).index()).fadeIn();
        }
    });

    if($(window).width() < 767 ) {
        $('.cashback_works-credited-item').on('click', function () {
            $(this).find('.cashback_works-credited-item-head').toggleClass('active');
            $(this).find('.cashback_works-credited-item-main').slideToggle();
        });
    }
    // -- end corp_card page

    // - construction-projects page
    if ($('.rate-calc-wrapper').length > 0) {
        $("#slider_credit_sum").slider({
            range: "min",
            step: 1,
            min: 500000,
            max: 100000000,
            value: 750000,
            slide: function (event, ui) {
                $("#slider_credit_sum_text").val(ui.value.toLocaleString('ru-RU'));
            }
        });

        $("#slider_credit_funds").slider({
            range: "min",
            step: 1,
            min: 500000,
            max: 100000000,
            value: 750000,
            slide: function (event, ui) {
                $("#slider_credit_funds_text").val(ui.value.toLocaleString('ru-RU'));
            }
        });
    }
    // -- END construction-projects page


    // - microlite page
    $('.pay_calc-btn_open span').on('click', function () {
        $('.pay_calc-btn_open').fadeOut(0);
        $('.pay_calc-hidden_block').slideDown();
    });

    $('.pay_calc-btn_close span').on('click', function () {
        $('.pay_calc-hidden_block').slideUp(0);
        $('.pay_calc-btn_open').fadeIn();
    });

    if ($('.pay_calc-container').length > 0) {
        $("#slider_loan_sum").slider({
            range: "min",
            step: 1,
            min: 500000,
            max: 100000000,
            value: 750000,
            slide: function (event, ui) {
                $("#slider_loan_sum_text").val(ui.value.toLocaleString('ru-RU'));
            }
        });

        $("#slider_loan_date").slider({
            range: "min",
            step: 1,
            min: 6,
            max: 60,
            value: 20,
            slide: function (event, ui) {
                $("#slider_loan_date_text").val(ui.value.toLocaleString('ru-RU'));
            }
        });
    }
    // -- END microlite page
});
