import $ from 'jquery';

var owl = $('.s-partners .owl-carousel');
$(function () {
    $('.partners').owlCarousel({
        loop: true,
        items: 4,
        smartSpeed: 1500,
        nav: true,
        navText: ['<i class="icon icofont-rounded-right"</i>','<i class="icon icofont-rounded-left"</i>'],
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            },
        }
    });
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });
});

