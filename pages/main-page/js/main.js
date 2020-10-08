$(document).ready(function () {
    if ($('.main_ban').length > 0 ) {
        var topBanSlider = new Swiper('.main_ban .swiper-container', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            autoplay: {
                delay: 7000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.main_ban-nav-pagination-num',
                type: 'fraction',
            },
            navigation: {
                nextEl: '.main_ban-nav-btn-next',
                prevEl: '.main_ban-nav-btn-prev',
            },
        });

        $('.main_ban-nav-pagination-progress').asPieProgress({
            namespace: '',
            goal: 14000,
            min: 0,
            max: 14000,
            speed: 70,
            easing: 'linear',
            trackcolor: 'transparent',
            fillcolor: 'none',
            barcolor: '#fe5000',
            barsize: '6'
        });

        $('.main_ban-nav-pagination-progress').asPieProgress('start');

        topBanSlider.on('slideChange', function () {
            $('.main_ban-nav-pagination-progress').asPieProgress('reset');
            $('.main_ban-nav-pagination-progress').asPieProgress('start');
        });

        topBanSlider.on('touchStart', function () {
            $('.main_ban-nav-pagination-progress').asPieProgress('stop');
        });

        topBanSlider.on('touchEnd', function () {
            $('.main_ban-nav-pagination-progress').asPieProgress('start');
        });
    }

    if ($('.bonuses_block-slider').length > 0 ) {
        var bonusesSlider = new Swiper('.bonuses_block-slider .swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: 20,

            breakpoints: {
                767: {
                  spaceBetween: 15
                },
            }
        });
    }

    if ($('.useful_goods_block-slider').length > 0 ) {
        var usefulGoodsSlider = new Swiper('.useful_goods_block-slider .swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: 20,
            resistanceRatio: 0.2,
            // scrollbar: {
            //     el: '.useful_goods_block .swiper-scrollbar',
            //     hide: false,
            //     draggable: true,
            //     snapOnRelease: false,
            //     dragSize: '32px',
            // },
            navigation: {
                nextEl: '.useful_goods_block .swiper-btn-next',
                prevEl: '.useful_goods_block .swiper-btn-prev',
            },

            pagination: {
                el: '.useful_goods_block .swiper-pagination',
            },
            breakpoints: {
                767: {
                  spaceBetween: 15,
                  resistanceRatio: 0.5,
                },
            }
        });

        // usefulGoodsSlider.on('progress', function () {
        //     var transformProgress = $('.useful_goods_block-slider .swiper-scrollbar-drag').css();
        //     // transformProgressMatch = transformProgress.match(/matrix\(\d+, ?\d+, ?\d+, ?\d+, ?(\d+)/)[1];
        //     console.log(transformProgress)
        // });

        // mySwiper.scrollbar.dragEl

        // $(".useful_goods_block-slider .swiper-container").mCustomScrollbar({
        //     axis: "x",
        //     theme: "rounded-dots",
        //     scrollbarPosition: "outside"
        // });
    }

    if ( $('.open_acc_form-main-item select').length > 0 ) {
        $('.open_acc_form-main-item select').selectpicker({
            size: 8,
        });
    }

    if ( $('.open_acc_form-main-item input[name=phone]').length > 0 ) {
        $('input[name=phone]').mask('+7 (000) 000-00-00');
    }

    $('.currency_block-switch-txt').on('click', function () {
        if($(this).hasClass('active')){} else{
            $('.currency_block-switch-btn').toggleClass('active');
            $('.currency_block-switch-txt').toggleClass('active');
            $('.currency_block-content-item').fadeOut(0).eq($(this).index()).fadeIn(0);
        }
    });

    $('.currency_block-switch-btn').on('click', function () {
        $(this).toggleClass('active');
        $(this).siblings('.currency_block-switch-txt').toggleClass('active');
        $('.currency_block-content-item').fadeOut(0).eq($('.currency_block-switch-txt.active').index()).fadeIn(0);
    });

    if ( $('.currency_block-tab_btns select').length > 0 ) {
        $('.currency_block-tab_btns select').selectpicker();
    }

    $(document).on('change', '#currency_block-tab_btns-select', function(){
        if ($(this).find("option:selected").val() == 'curr_tabl1') {
            $('.currency_block-tables_wrap-item').fadeOut(0);
            $('#curr_tabl1').fadeIn();
        } else {
            if ($(this).find("option:selected").val() == 'curr_tabl2') {
                $('.currency_block-tables_wrap-item').fadeOut(0);
                $('#curr_tabl2').fadeIn();
            } else {
                if ($(this).find("option:selected").val() == 'curr_tabl3') {
                    $('.currency_block-tables_wrap-item').fadeOut(0);
                    $('#curr_tabl3').fadeIn();
                }
            }
        }
    });

    $('.webinar_adv-btn_close').on('click', function () {
        $(this).parents('.webinar_adv-container').css({'display':'none'});
    });
});
