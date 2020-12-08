/* Clase 44 - Selección y Cambio de Atributos */

$(function(){
    'use strict';
    // Seleccionamos el atributo
    $('.navegacion ul li:first a').attr('href');

    // Modificamos el atributo
    $('.navegacion ul li:first a').attr('href', 'http://www.github.com');
    
    // Cambiando una imagen
    $('article:first img').attr('src', 'img/imagen2.jpg');

    // Al dar click cambiar imagen
    $('main article:first img').on('click', function(){
        $(this).atrr('src', 'img/imagen2.jpg');
    })
});