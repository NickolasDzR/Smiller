import $ from 'jquery';

$(function(){ 
    $('.carousel-services').on('initialized.owl.carousel', function() {
        setTimeout(function(){
            carouselService() 
        }, 100);
    });
    $('.carousel-services').owlCarousel({
        nav: true,
        loop:true,
        dots: true,
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

    $('.carousel-services-content').equalHeights();



    function carouselService() {
        $('.carousel-services-item').each(function() {
            var ths = $(this),
            thsh = ths.find('.carousel-services-content').outerHeight();
            ths.find('.carousel-services-image').css('min-height', thsh);
        });
    } carouselService()


    $('.carousel-services-composition .h3').each(function() {
        var ths = $(this);
        ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
    });
});

