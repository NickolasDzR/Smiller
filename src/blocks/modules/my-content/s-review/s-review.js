import $ from 'jquery';


$(function () {
    $('.reviews').owlCarousel({
        loop: true,
        items: 1,
        smartSpeed: 300,
        nav: false,
        dots: true,
        autoHeight: true
    });
});