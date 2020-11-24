/* Clase 40 - Agregar y Quitar clases */

$(function(){
    'use strict';
    // Agregar clases
    $('div.log img').addClass('activo');
    $('.navegacion nav ul li:first').addClass('activo');

    // Agrega una clase al hacer un click
    $('.navegacion ul li a').on('click', function(e){
        $('.navegacion ul li a').removeClass('active');
        e.preventDefault();
        $(this).addClass('active');
    });

    // Quitar clases
    $('div.log img').removeClass('activo');
});