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

        $('.mytooltipster').on('click', function(event) {
            event.preventDefault();
        });
    }

    if ($('.calc-category').length > 0 ) {
        var calcCategorySlider = new Swiper('.calc-category .swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: 40,
            watchOverflow: true,

            breakpoints: {
                1259: {
                    spaceBetween: 25,
                },

                999: {
                    spaceBetween: 35,
                },

                767: {
                    spaceBetween: 20,
                },
            }
        });
    }

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

    // calc start
    $("#slider_card").slider({
        range: "min",
        step: 1,
        min: 60000,
        max: 1000000,
        value: 80000,
        slide: function (event, ui) {
            $("#slider_card_text").val(ui.value.toLocaleString('ru-RU'));
        }
    });

    $("#slider_card_text").on("keyup", function() {
        $("#slider_card").slider("value", $(this).val());
    });

    $("#slider_card_participant").slider({
        range: "min",
        step: 1,
        min: 10000,
        max: 500000,
        value: 180000,
        slide: function (event, ui) {
            $("#slider_card_participant_text").val(ui.value.toLocaleString('ru-RU'));
        }
    });

    $("#slider_card_participant_text").on("keyup", function() {
        $("#slider_card_participant").slider("value", $(this).val());
    });      

    $('.calc-category-item').on('click', function () {
        $(this).siblings('.calc-category-item').removeClass('active');
        $(this).addClass('active');
    });
    // -- calc end

    function Participant() {
        if ($('#participant').is(':checked')) {
            $('#line_sl_sal').css({'display':'block'});
            $('#line_sl_kash').css({'display':'none'});
            $('#calc-result-title-cash').css({'display':'none'});
            $('#calc-result-title-sal').css({'display':'block'});
            $('.dont_get-container').fadeIn();    
        } else {            
            $('#line_sl_sal').css({'display':'none'});
            $('#line_sl_kash').css({'display':'block'});
            $('#calc-result-title-cash').css({'display':'block'});
            $('#calc-result-title-sal').css({'display':'none'});
            $('.dont_get-container').fadeOut(0);           
        }
    }

    function ParticipantGrace() {
        if ($('#participant_grace').is(':checked')) {
            $('#grace1').html('100');
            $('#grace2').html('298');
            $('#grace3').html('452,04');  
            $('#grace4').html('27 149,96');    
        } else {            
            $('#grace1').html('150');
            $('#grace2').html('445,5');
            $('#grace3').html('672,14');  
            $('#grace4').html('26 732,36');             
        }
    }

    Participant();
    ParticipantGrace();

    $('#participant').change(function(){
        Participant();
    });

    $('#participant_grace').change(function(){
        ParticipantGrace();
    });

    if ($('.sl-dragme').length > 0) {
        if ($(window).width() > 767) {
            var $dragMe = $('.sl-dragme-toggle'),
                $container = $('.sl-dragme'),
                containerWidth = $container.width(),
                $viewAfter = $('.sl-dragme-view-before'),
                startPos = containerWidth - 110;

            $('.sl-dragme-content').css({'width': containerWidth});

            $dragMe.draggable({
                containment: "parent",
                drag: function () {
                    $viewAfter.css({
                        width: parseFloat($(this).css('left')) + 56.5
                    });
                }
            });

            $viewAfter.css({'width': startPos + 55 + 'px'});
            $dragMe.css({'left': startPos + 'px'});

        } else {
            $('.sl-dragme-hidden-btn').on('click', function () {
                $('.sl-dragme').toggleClass('open');
            });
        }
    }

    if ($(window).width() > 767) {
        $('.page_content--universal_card .family_values-box-front .ui-btn_white').on('click', function () {
            $('.family_values').addClass('active');

        });

        $('.page_content--universal_card .family_values-box-back .family_values-box-btn_close').on('click', function () {
            $('.family_values').removeClass('active');
        });
    } else {
        $('.page_content--universal_card .family_values-box-front .ui-btn_white').on('click', function () {
            $('.family_values-box-front').fadeOut(0);
            $('.family_values-box-back').fadeIn(200);

        });

        $('.page_content--universal_card .family_values-box-back .family_values-box-btn_close').on('click', function () {
            $('.family_values-box-back').fadeOut(0);
            $('.family_values-box-front').fadeIn(200);
        });
    }

    // анимация при прокрутке
    if ($('.page_content--fresh_card .how_get_static-container').length > 0) {
        if ($(window).width() > 767) {
            $('.how_get_static-steps-box-img-icon').addClass('hide_b').viewportChecker({
                classToAdd: 'show_b animated fadeInUp',
                offset: 200
            });
        } else {
            $('.how_get_static-steps-box-txt').addClass('hide_b').viewportChecker({
                classToAdd: 'show_b animated fadeInUp',
                offset: 80
            });
        }
    }

    $('.page_content--fresh_card .grace-dropdown-head span').on('click', function () {
        $(this).parents('.grace-dropdown-head').toggleClass('open');
        $(this).parents('.grace-dropdown-head').siblings('.grace-dropdown-main').slideToggle();

    });

    $('.js-to_docs').on('click', function (event) {
        event.preventDefault();
        $('.tabs-head-item').removeClass('active');
        $('.tabs-head-item-docs').addClass('active');
        $('.tabs-content-item').removeClass('active');
        $('.tabs-content-item-docs').addClass('active');
        $('html,body').stop().animate({ scrollTop: $('.tabs-container').offset().top }, 400);
    });
});
