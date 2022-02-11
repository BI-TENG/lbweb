$(document).ready(function() {
    // 漢堡開關
    $('.mobile_navbar').hide();
    $('.burger').click(function() {
        $(this).toggleClass('open');
        $('.mobile_navbar').slideToggle();
    });

    // 手機選單
    var li = $('.mobile_navbar .main_navbar>li')
    $('.main_navbar_inner').hide();
    li.click(function() {
        $(this).find($('.main_navbar_inner')).slideToggle();
        $(this).siblings(li).find('.main_navbar_inner').slideUp();
        // $(this).toggleClass('up');
        // $(this).siblings(li).removeClass('up');
    });

    $('.inner_box').hide();
    $('.main_navbar_inner>li').click(function(e) {
        e.stopPropagation();
        $(this).find($('.inner_box')).slideToggle();
        $(this).siblings('.main_navbar_inner>li').find('.inner_box').slideUp();
    });

    $('.inner_box_b').hide();
    $('.inner_box>li').click(function(e) {
        e.stopPropagation();
        $(this).find($('.inner_box_b')).slideToggle();
        $(this).siblings('.inner_box>li').find('.inner_box_b').slideUp();
    });

    $('.inner_box_c').hide();
    $('.inner_box_b>li').click(function(e) {
        e.stopPropagation();
        $(this).find($('.inner_box_c')).slideToggle();
        $(this).siblings('.inner_box_b>li').find('.inner_box_c').slideUp();
    });

    $('.inner_box_c>li').click(function(e) {
        e.stopPropagation();
    });
});