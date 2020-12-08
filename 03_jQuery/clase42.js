/* Clase 42 - Navegando a travez del DOM */

$(function(){
    'use strict';
    // Navegamos a un elemento hijo 
    $('.navegacion').chidren();
    // Navega dos etiquetas hacia adentro
    $('.navegacion').chidren().chidren();

    // Elemento padre de article que corresponde a main 
    $('article:first').parent();

    // Selecciona el tercer article
    $('article:first').parent()[2];

    // Selecciona el siguiente
    $('article:first').next();
    $('article:first').next().next();
});