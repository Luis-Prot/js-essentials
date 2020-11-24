/* Clase 41 - Manejador de Eventos */

$(function(){
    'use strict';
    // Manejo de varios eventos como un objeto JSON
    $('main').on({
        click: function(){
            $(this).addClass('fondorojo activo');
        },
        mouseenter: function(){
            $(this).addClass('fondorojo');
        },
        mouseleave: function(){
            $(this).addClass('activo');
        }
    });
});