$(document).ready(function() {
    // banner
    var sync_img = $(".sync_img");
    var sync_txt = $(".sync_txt");
    var slidesPerPage = 5;
    var syncedSecondary = true;

    sync_img.find('a').attr('tabindex', '-1');

    sync_img.owlCarousel({
        items: 1,
        slideSpeed: 5000,
        nav: true,
        autoplay: true,
        dots: false,
        nav: false,
        loop: true,
        autoplayHoverPause: true,
        responsiveRefreshRate: 200,
    }).on('changed.owl.carousel', syncPosition);

    sync_txt
        .on('initialized.owl.carousel', function() {
            sync_txt.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: false,
            mouseDrag: false,
            autoWidth: true,
            slideBy: slidesPerPage,
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        sync_txt
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync_txt.find('.owl-item.active').length - 1;
        var start = sync_txt.find('.owl-item.active').first().index();
        var end = sync_txt.find('.owl-item.active').last().index();

        if (current > end) {
            sync_txt.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync_txt.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync_img.data('owl.carousel').to(number, 100, true);
        }
    }

    sync_txt.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync_img.data('owl.carousel').to(number, 300, true);
    });

    sync_txt.on("focus", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync_img.data('owl.carousel').to(number, 300, true);
    });

    sync_txt.keydown(function(e) {
        if (e.which == 13) {
            sync_txt.unbind('click');
        };
    });


    //tab
    $('.tabList').owlCarousel({
        dots: false,
        loop: false,
        margin: 20,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            355: {
                items: 2,
                nav: true,
            },
            500: {
                items: 3,
                nav: true,
            },
            650: {
                items: 4,
                nav: true,
            },
            1000: {
                items: 5,
                nav: false,
            }
        }
    });


    // 外部連結
    $('.link_box').owlCarousel({
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            500: {
                items: 3
            },
            900: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    });
});