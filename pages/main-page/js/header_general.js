$(document).ready(function () {
    // открыть/показать меню - частные 
    $('header.header_full_width.head_private .head-bot-menu-item').mouseenter(function () {
        $('header.header_full_width .head').stop(true, true).addClass('menu_shadow');
        $('header.header_full_width .head-drop_menu').removeClass('active').eq($(this).index()).addClass('active');
        widthConteiner = $(this).children('.head-drop_menu').children('.drop_menu-inner').children('.drop_menu-tab').width();
        widthCol = ((widthConteiner - 290) / 3);
        $(this).children('.head-drop_menu').children('.drop_menu-inner').children('.drop_menu-tab').children('.drop_menu-tab-col').css({'width' : widthCol});
    });
    $('header.header_full_width.head_private .head-bot-menu-item').mouseleave(function () {
        $('header.header_full_width .head').stop(true, true).removeClass('menu_shadow');
        $('header.header_full_width .head-drop_menu').removeClass('active');
    });

    // открыть/показать меню - бизнесс
    $('header.header_full_width.head_business .head-bot-menu-item').mouseenter(function () {
        var menuTab = $(this).children('.head-drop_menu');
        var havLink = $(this).children('.head-drop_menu').children().length;

        $('header.header_full_width .head-drop_menu').removeClass('active').addClass('biz_sh').eq($(this).index()).addClass('active');
        if (havLink == 0) {
            menuTab.addClass('no_links');
        }
    });
    $('header.header_full_width.head_business .head-bot-menu-item').mouseleave(function () {
        $('header.header_full_width .head-drop_menu').removeClass('active');
    });

    // выбор раздела     
    $('header.header_full_width .head-top-client_menu-btn').click(function () {
        $(this).parent('.head-top-client_menu').toggleClass('active');
    });

    $(document).click(function (event) {
        if ($(event.target).closest('header.header_full_width .head-top-client_menu').length) return;
        $('header.header_full_width .head-top-client_menu').removeClass('active');
        event.stopPropagation();
    });

    // выбор языка
    $('header.header_full_width .head-top-lang-btn').click(function () {
        $(this).parent('.head-top-lang').toggleClass('active');
    });

    $(document).click(function (event) {
        if ($(event.target).closest('header.header_full_width .head-top-lang').length) return;
        $('header.header_full_width .head-top-lang').removeClass('active');
        event.stopPropagation();
    });

    // высота выпадающего меню 
    $.fn.dropMenuHeight = function (){
        var $blocks = $(this),
            maxH    = $blocks.eq(0).height(); 
        $blocks.each(function(){
            maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;
        });
        $blocks.height(maxH); 
    }
    $('header.header_full_width .head-drop_menu').dropMenuHeight(); 


    $(window).resize(function() {
        $('header.header_full_width .head-drop_menu').css({'height' :  'auto'}); 
        $('header.header_full_width .head-drop_menu').dropMenuHeight();
    });

    var tm_id;

    $(document).on('click', 'header.header_full_width .head-top .head-top-burger:not(.business_burger)', function () {
        $.ajax({
            type: "POST",
            url: "/local/templates/main/inc/burger_menu_final_2019.php",
            data: ({
                "page": "main"
            }),
            success: function (a) {
                $('header.header_full_width #header_menu_wrpper').html(a);
                $('header.header_full_width #header_menu_container').addClass('active');
                $('header.header_full_width .head').addClass('open_dop_menu').addClass('menu_shadow');
            }
        });
    });

    $(document).on('click', 'header.header_full_width .head-top .head-top-burger.business_burger', function () {
        $.ajax({
            type: "POST",
            url: "/local/templates/main/inc/burger_menu_final_business_2020.php",
            data: ({
                "page": "main",
                "secret" : $('.head-bot-menu').attr('secret')
            }),
            success: function (a) {
                $('header.header_full_width #header_menu_wrpper').html(a);
                $('header.header_full_width #header_menu_container').addClass('active');
                $('header.header_full_width .head').addClass('open_dop_menu').addClass('menu_shadow');
            }
        });
    });


    $(document).on('click', 'header.header_full_width .head-dop_menu .btn_close', function (e) {
        $('header.header_full_width .head').removeClass('open_dop_menu').removeClass('menu_shadow');
        $('header.header_full_width #header_menu_container').removeClass('active');
        console.log('2');
        e.stopPropagation();
    });

    $(document).click(function (event) {
        if ($(event.target).closest("header.header_full_width").length)
            return;
        $('header.header_full_width .head').removeClass('open_dop_menu').removeClass('menu_shadow');
        $('header.header_full_width #header_menu_container').removeClass('active');
        event.stopPropagation();
    });

    $(document).on('click', 'header.header_full_width .head-top-contacts .city_btn, header.header_full_width .head-dop_menu .block .mob_in_block-addresses a.city', function (e) {
        e.preventDefault();
            $.ajax({
                type: "POST",
                url: "/local/templates/main/inc/header/region_list.php",
                success: function (a) {
                    $('header.header_full_width #header_region_container').html(a);
                    $('header.header_full_width #header_region_container .pan_reg_chosen').slideDown();
                    $('header.header_full_width .head-region').addClass('region_active');
                }
            });
    });

    $(document).on('click', 'header.header_full_width #header_region_container .sel_region_btn', function () {
        var id = $(this).attr('value');
        $.ajax({
            type: "POST",
            url: "/local/templates/main/inc/header/city_list.php",
            data: ({
                "id": id
            }),
            success: function (a) {
                $('#header_region_container .pan_reg_chosen').html(a);
            }
        });
        return false;
    });

    $(document).on('click', 'header.header_full_width .pan_reg_chosen .close_city', function (e) {
        $('header.header_full_width #header_region_container .pan_reg_chosen').slideUp();
        $('header.header_full_width .head-region').removeClass('region_active');
        e.stopPropagation();
    });

    $(document).on('click', 'header.header_full_width .sh_regions', function () {
        $.ajax({
            type: "POST",
            url: "/local/templates/main/inc/header/region_list.php",
            success: function (msg) {
                $('header.header_full_width #header_region_container ').html(msg);
            }
        });
        return false;        
    });

    // $(document).on('click', '.add_city_btn', function(){
	// 	var id=$(this).attr('value');
	// 	var select_city="n";
	// 	if($(this).hasClass('select_city_y')){
	// 		select_city="y";
	// 	}

	// 	$.ajax({
	// 		type: "POST",
	// 		url: "/local/templates/main/inc/header/add_city.php",
	// 		data: ({
	// 			"select_city" : select_city,
	// 			"id" : id
	// 		}),
	// 		success: function(msg){
	// 			$('#city_to').html(msg);
	// 		}
	// 	});
	// 	return false;
	// });


    // $(document).click(function (event) {
    //     if ($(event.target).closest("header.header_full_width #header_region_container").length || $('.header_full_width .head-search').hasClass('active') )
    //         return;
    //     $('header.header_full_width #header_region_container .pan_reg_chosen').slideUp();
    //     $('header.header_full_width .head').removeClass('menu_shadow');
    //     // $(this).parent().removeClass('active');
    //     console.log('4');
    //     event.stopPropagation();
    // });


    $(document).on('click', 'header.header_full_width .head-top-contacts .item.feadback .feadback-btn', function () {
        $(this).parents('.feadback').toggleClass('active');
        if($('#header_menu_container').hasClass('active')) {
            $('header.header_full_width #header_menu_container').removeClass('active');
            $('header.header_full_width .head').removeClass('open_dop_menu').removeClass('menu_shadow');
        }
    });

    $(document).on('click', 'header.header_full_width .head-top-contacts .item.feadback .feadback-block .close_block', function () {
        $(this).parents('.feadback').removeClass('active');
    });

    $(document).click(function (event) {
        if ($(event.target).closest("header.header_full_width .head-top-contacts .item.feadback").length) 
            return;
        $('header.header_full_width .head-top-contacts .item.feadback').removeClass('active');
        event.stopPropagation();
    });

    $(document).on('click', 'header.header_full_width .head-top-search-btn', function (e) {
        e.preventDefault();
        if($('header.header_full_width .head-top-contacts .item.feadback').hasClass('active')) {
            $('header.header_full_width .head-top-contacts .item.feadback').removeClass('active');
        }
        $('header.header_full_width .head-search').addClass('active');
        $('header.header_full_width .head').addClass('menu_shadow');
        $('header.header_full_width #header_menu_container').removeClass('active');
        $('.wrapper').addClass('no_scroll');
        e.stopPropagation();
    });

    $(document).on('click', 'header.header_full_width .head-search .block .inn_block a.close_search', function (e) {
        e.preventDefault();
        $('header.header_full_width .head-search').removeClass('active');
        $('header.header_full_width .head').removeClass('open_dop_menu').removeClass('menu_shadow');
        $('.wrapper').removeClass('no_scroll');
    });

    $(document).click(function (event) {
        if ($(event.target).closest("header.header_full_width .head-search").length  ||  $('header.header_full_width .head-search').hasClass('act') ||  $('header.header_full_width .head').hasClass('open_dop_menu'))
            return;
        $('header.header_full_width .head-search').removeClass('active');
        $('header.header_full_width .head').removeClass('menu_shadow');
        $('.wrapper').removeClass('no_scroll');
        event.stopPropagation();
    });

    //menu-hamburger
    $(document).on('click', 'header.header_full_width .head-dop_menu a.sub_main', function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('active');
    });    

    function headHeightCalc() {
        if ($('.fix_old_head').length > 0 ) {
            var headHeight = $('.header_full_width').css('height');
            $('.fix_old_head').css({'height' : headHeight});
        }
    }

    headHeightCalc();

    $(window).resize(function() {
        headHeightCalc();
    });
});

// $(document).on('keyup', '#title-search-input_new', function() {
//     console.log('2');
//     // $('.title-search-result').css({'display' : 'none !important'});
//     $('.title-search-result').addClass('hide_r');
//   });

function clear_city() {
    $('#head-region').html('');
}