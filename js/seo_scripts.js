$(document).ready(function () {
    $('.seo-container .new_block_simple .title').on('click', function () {
        $(this).toggleClass('active');
        $(this).siblings('.in_simple').slideToggle();
    });

    $('.seo-container .new_block_simple .in_simple .item h2').on('click', function () {
        $(this).siblings('.item_in').slideToggle();
    });
});