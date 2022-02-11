$(document).ready(function() {
    // 訊息公告
    $('.news_txt').hide()
    $('.news_field').on('click', function() {
        $(this).find('.news_txt').slideToggle();
        $(this).siblings('.news_field').find('.news_txt').slideUp();
        $(this).toggleClass('up');
        $(this).siblings('.news_field').removeClass('up');
    })
});