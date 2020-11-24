/* Clase 39 - Mostrar y Borrar contenido */

$(function(){
    'use strict';
    // Seleccionamos un evento
    $('div.logo img').on('click', function(){ // Al hacer click 
        console.log('Has hecho click en el Logo');
        $(this).remove(); // this hace referencia al objeto que causa el evento (img)
    });

    $('div.logo img').on('mouseenter', function(){ // mouseenter es el hover
        console.log('Dentro el logo')
    });

    $('div.logo img').on('mouseleave', function(){ // mouseenter es el hover
        console.log('Fuera el logo')
    });

    // Enseñar menu
    $('#menu').on('click', function{
        $('#navegación').show(); // Muestra el menu
    });
});