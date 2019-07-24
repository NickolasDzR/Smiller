import $ from 'jquery';

$(function(){ 
    $('.owl-carousel').owlCarousel({
        nav: true,
        loop:true,
        dots: true,
        smartSpeed: 700,
        navText: ['<i class="icon icofont-double-left"</i>','<i class="icon icofont-double-right"</i>']
    });
});