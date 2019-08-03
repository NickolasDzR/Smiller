import "./import/modules.js";
import "./import/components.js";


import $ from 'jquery';

$(function () {
    $(window).on('load', function() {
        $('.preloader').delay(1000).fadeOut('slow');
    })
});