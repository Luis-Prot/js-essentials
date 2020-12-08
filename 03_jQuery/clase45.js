/* Clase 45 - Cambiando el CSS de un elemento */

$(function(){
    'use strict';
    
    // Cambiar una propiedad 
    $('.logo img').css({'width': '400px'});

    $('main article h2').css({'color': '#db008d'});

    // Agregar más propiedades de CSS
    $('aside').css({'background-color': '#e1e1e1', 
                    'text-transform': 'uppercase',
                    'padding': '20px',
    });

    function cambiarColor(){
        $('.navegacion').css({'background-color': 'red'})
    };

    // Hacerlo con funciones
    $('.navegacion ul li a').on('mouseenter', cambiarColor);
});