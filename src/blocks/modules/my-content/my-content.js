import $ from 'jquery';
import "@babel/polyfill";

$(function(){ 
    $('.carousel-services').on('initialized.owl.carousel', function() {
        setTimeout(function(){
            carouselService() 
        }, 100);
    });
    $('.carousel-services').owlCarousel({
        nav: true,
        loop:true,
        dots: false,
        smartSpeed: 700,
        navText: ['<i class="icon icofont-double-left"</i>','<i class="icon icofont-double-right"</i>'],
        responsiveClass: true,
        responsive:{ // @media
            0:{
                items:1, // one items on this size
                nav:true
            },
            800:{ // size
                items:2,
                nav:false
            },
            1100:{ // size
                items:3,
                nav:true,
            }
        }
    });

    function carouselService() {
        $('.carousel-services-item').each(function() {
            var ths = $(this),
            thsh = ths.find('.carousel-services-content').outerHeight();
            ths.find('.carousel-services-image').css('min-height', this);
        });
    } carouselService()


    $('.carousel-services-composition .h3').each(function() {
        var ths = $(this);
        ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
    });
});
window.onload = function() {
    setTimeout(function() {
        const carouselEl = document.querySelectorAll('.carousel-services-content');
        const carouseImg = document.querySelectorAll('.carousel-services-image');
        function getEqualHight(height) {
            for (let i = 0; i <= carouselEl.length - 1; i += 1) {
                carouselEl[i].style.height = `${height}px`;
                carouseImg[i].style.height = `${height}px`;
            }
        }
        let higherElement = 0;
        for (const height of carouselEl) {
            if (height.clientHeight > higherElement) {
                higherElement = height.clientHeight;
            }
            getEqualHight(higherElement);
        }
    }, 1000);
}