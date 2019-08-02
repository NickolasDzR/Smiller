import $ from 'jquery';

var owl = $('.s-reviews .owl-carousel');
$(function () {
    $('.reviews').owlCarousel({
        loop: true,
        items: 1,
        smartSpeed: 1500,
        nav: false,
        dots: true,
        autoHeight: true
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