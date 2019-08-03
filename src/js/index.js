import "./import/modules.js";
import "./import/components.js";


import $ from 'jquery';

$(function(){
    setTimeout(function(){
      $('.preloader').fadeOut('slow', function() {
        $(this).remove();
      });
     }, 1000);
  });