$(document).ready(function() {
    $('.cancel').on('click', function() {
        $('.agree').hide();
    })

    $('.menu').hide();
    $('.menu_btn').on('click', function() {
        $('.menu').slideToggle();
    })

    // scrollbar
    $(".message_box").overlayScrollbars({
        className: "os-theme-dark"
    });
});