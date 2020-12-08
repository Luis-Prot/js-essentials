/* Clase 46 - SlideUp y SlideDown  */

$(function(){
    'use strict';
    
    // Esconde un article
    $('.logo img').click(function(){
        // Agregamos una animación con su duración
        $('main article:first').slideUp(1000);
    });

    // Muestra un article
    $('aside').click(function(){
        // Agregamos una animación con su duración
        $('main article:first').slideDown(1000);
    });
});