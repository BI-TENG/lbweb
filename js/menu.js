$(document).ready(function() {
    // 桌機左測選單
    var list_a = $('.dropdown_menu_list');
    var btn_a = $('.dropdown_menu_btn');
    $(list_a).hide();
    $('.dropdown_menu_btn.chevron_up').addClass('up');
    $('.dropdown_menu_list.open').show();
    $(btn_a).on('click', function() {
        $(this).find(list_a).slideToggle();
        $(this).siblings(btn_a).find(list_a).slideUp();
        $(this).toggleClass('up');
        $(this).siblings(btn_a).removeClass('up');
    });


    var list_b = $('.dropdown_menu_small_list');
    var btn_b = $('.dropdown_menu_small_btn');
    $(list_b).hide();
    $('.dropdown_menu_small_btn.chevron_up').addClass('up');
    $('.dropdown_menu_small_list.open').show();
    $(btn_b).on('click', function(e) {
        e.stopPropagation();
        $(this).find(list_b).slideToggle();
        $(this).siblings(btn_b).find(list_b).slideUp();
        $(this).toggleClass('up');
        $(this).siblings(btn_b).removeClass('up');
        // 清除上一層
        $(btn_a).siblings(btn_a).removeClass('color');
        $(btn_a).find(list_a).find('a').removeClass('change_color');
        // 本身
        $(this).toggleClass('color');
        $(this).siblings(btn_b).removeClass('color');
        // 下一層
        $(this).find(list_b).find('a').toggleClass('change_color');
        $(this).siblings(btn_b).find(list_b).find('a').removeClass('change_color');
    });


    var list_c = $('.dropdown_menu_small_list_b');
    var btn_c = $('.dropdown_menu_small_btn_b');
    $(list_c).hide();
    $('.dropdown_menu_small_btn_b.chevron_up').addClass('up');
    $('.dropdown_menu_small_list_b.open').show();
    $(btn_c).on('click', function(e) {
        e.stopPropagation();
        $(this).find(list_c).slideToggle();
        $(this).siblings(btn_c).find(list_c).slideUp();
        $(this).toggleClass('up');
        $(this).siblings(btn_c).removeClass('up');
        // 清除上一層
        $(btn_b).siblings(btn_b).removeClass('color');
        $(btn_b).find(list_b).find('a').removeClass('change_color');
        // 本身
        $(this).toggleClass('color');
        $(this).siblings(btn_c).removeClass('color');
        // 下一層
        $(this).find(list_c).find('a').toggleClass('change_color');
        $(this).siblings(btn_c).find(list_c).find('a').removeClass('change_color');
    });
});