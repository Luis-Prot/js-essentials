/* Clase 46 - Eventos animados */

$(function(){
    'use strict';
    $('.logo img').on('click', function(){
        // Elegimos una animación 1000 = 1 segundo, 500= medio segundo
        $('this').animate({'width': '200px', 1000});
    });

    // Creacion de funciones
    function aumentarImagen(){
        $('this').animate({'width': '100%'})
    };
    function disminuirImagen(){
        $('this').animate({'width': '350px'})
    };

    $('main article img').on('mouseenter', aumentarImagen);
    $('main article img').on('mouseleave', disminuirImagen);
});