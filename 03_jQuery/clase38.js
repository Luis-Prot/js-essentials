/* Clase 37 - Clonando de Contenido */

$(function(){
    'use strict';
    $('main article').remove(); // Elimina un elemento del DOM
    $('main article').hide(); // Esconde el elementy display: none

    // Clonar un elemento
    var copia = $('main article:last').clone();
    // Lo coloca al final
    $('main ').append(copia);
    // Lo coloca al inicio
    $('main ').prepend(copia);

    // Otra forma es con appendTo que utiliza primero como selector tu copia
    var copia2 = $('main article:last').clone();
    // Final
    $(copia2).appendTo('main')
    // Inicio
    $(copia2).prependTo('main')
});