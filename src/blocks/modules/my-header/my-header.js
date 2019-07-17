import $ from 'jquery';

$(function(){
        $("#my-menu").mmenu({
           "extensions": [
              "fx-menu-fade",
              "fx-panels-none",
              "fx-listitems-slide",
              'position-right',
              'theme-dark'
           ],
           navbars: [{
            content: '<img src="img/svg/logo-1.svg#logo-1" alt="Салон красоты Смитлер">'
        }]
        });

    var api = $("#my-menu").data("mmenu");
    var $hamburger = $('.hamburger');

        api.bind( "open:start", function() {
            $hamburger.addClass('is-active');
        });
        api.bind( "close:start", function() {
            $hamburger.removeClass('is-active');
    });
});