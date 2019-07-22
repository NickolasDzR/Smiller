import $ from 'jquery';

$(function(){
        $("#my-menu").mmenu({
           "extensions": [
              "fx-menu-fade",
              "fx-panels-none",
              "fx-listitems-slide",
              'position-right',
              'theme-dark',
              'pagedim-black'
            ],
            "navbar": [{
                "position": 'title',
                "content": 
                   'none',
                
             }],
             "navbars": [{
                "position": 'title',
                "content": 
                   '<a href="#"><img src="img/svg/logo-1.svg#logo-1" alt="Салон красоты Смитлер"/></a>',
                
             }]
        });

    var api = $("#my-menu").data("mmenu");
    var $hamburger = $('.hamburger');

        api.bind( "open:finish", function() { // start instead of finish will start animation at startup
            $hamburger.addClass('is-active');
        });
        api.bind( "close:finish", function() {
            $hamburger.removeClass('is-active');
    });
});

/* '<img src="img/svg/logo-1.svg#logo-1" alt="Салон красоты Смитлер"/>' */