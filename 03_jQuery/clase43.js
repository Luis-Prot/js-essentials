/* Clase 43 - Obteniendo el Texto y Actualizándolo */

$(function(){
    'use strict';
    // Obtencion de texto 
    $('main article:first h2').text();

    // Modificacion de texto
    $('main article:first h2').text('Hola');

    // Podemos darle HTML
    $('main article:first h2').html('<h1>Hola</h1>');
});