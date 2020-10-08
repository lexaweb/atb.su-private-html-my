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

    if ($('.useful_goods_block-slider').length > 0 ) {
        var usefulGoodsSlider = new Swiper('.useful_goods_block-slider .swiper-container', {
            slidesPerView: 3,
            spaceBetween: 20,
            resistanceRatio: 0.2,
            watchSlidesVisibility: true,
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
                1259: {
                    slidesPerView: 'auto',
                },

                767: {
                    slidesPerView: 'auto',
                    spaceBetween: 15
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

    if ($('.calc_section-tags').length > 0 ) {
        var calcTagsSlider = new Swiper('.calc_section-tags .swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: 15,
            watchOverflow: true,

            breakpoints: {
                767: {
                    slidesPerView: 'auto',
                    spaceBetween: 8,
                },
            }
        });
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

    $(document).on("click", ".calc_section-tags-item", function () {
        $(".calc_section-tags-item ").removeClass("active");
        $(this).addClass("active");
    });

    // скрытие контента в блоке новостей
    // function hiddenNewsContent() {
    //     $('.news_block-content-item').each(function () {
    //         var heightDesc = $(this).children('.news_block-content-item-desc').height() + 'px';
    //         var maxHeightDesc = $(this).children('.news_block-content-item-desc').css('max-height');
    //         if (heightDesc == maxHeightDesc ) {
    //             $(this).children('.news_block-content-item-desc').addClass('news_block-content-item-desc--hidden');
    //         } else {
    //             $(this).children('.news_block-content-item-desc').removeClass('news_block-content-item-desc--hidden');
    //         }
    //     });
    // }

    //calc
    $("#slider_cost").slider({
        range: "min",
        step: 50,
        min: 625000,
        max: 7500000,
        value: 625000,
        slide: function (event, ui) {
            $("#slider_cost_text").val(ui.value.toLocaleString('ru-RU'));
        }
    });

    $("#slider_pay").slider({
        range: "min",
        step: 50,
        min: 1200000,
        max: 5500000,
        value: 1200000,
        slide: function (event, ui) {
            $("#slider_pay_text").val(ui.value.toLocaleString('ru-RU'));
        }
    });

    $("#slider_year").slider({
        range: "min",
        step: 1,
        min: 3,
        max: 20,
        value: 3,
        slide: function (event, ui) {
            $("#slider_year_text").val(ui.value.toLocaleString('ru-RU'));
        }
    });

    $("#slider_credit_sum").slider({
        range: "min",
        step: 50,
        min: 60000,
        max: 1000000,
        value: 60000,
        slide: function (event, ui) {
            $("#slider_credit_sum_text").val(ui.value.toLocaleString('ru-RU'));
        }
    });

    $("#slider_credit_date").slider({
        range: "min",
        step: 1,
        min: 24,
        max: 60,
        value: 24,
        slide: function (event, ui) {
            $("#slider_credit_date_text").val(ui.value.toLocaleString('ru-RU'));
        }
    });

    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: '<Пред',
        nextText: 'След>',
        currentText: 'Сегодня',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
        ],
        monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
            'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'
        ],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);

    $("input[name='birth_date']").datepicker({
        maxDate: "-25y",
        minDate: "-42y",
        yearRange: "42y:-25y",
        changeYear: true
    });

    $(document).on('click', '.calc_section-options-head', function () {
        $(this).siblings('.calc_section-options-main').slideToggle();
    });

    $('.calc_section-switch-txt').on('click', function () {
        if($(this).hasClass('active')){} else{
            $('.calc_section-switch-btn').toggleClass('active');
            $('.calc_section-switch-txt').toggleClass('active');
            $('.calc_section-main-tab').fadeOut(0).eq($(this).index()).fadeIn();
            calcTagsSlider.update()
        }
    });

    $('.calc_section-switch-btn').on('click', function () {
        $(this).toggleClass('active');
        $(this).siblings('.calc_section-switch-txt').toggleClass('active');
        $('.calc_section-main-tab').fadeOut(0).eq($('.calc_section-switch-txt.active').index()).fadeIn();
        calcTagsSlider.update()
    });

    //-- end calc

    $('.webinar_adv-btn_close').on('click', function () {
        $(this).parents('.webinar_adv-container').css({'display':'none'});
    });

    $('.js-inner_link').on('click', function(event) {
        event.preventDefault();
        window.location.href = $(this).data('link');
    });

});
