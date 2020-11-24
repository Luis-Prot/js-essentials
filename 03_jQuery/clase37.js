/* Clase 36 - Selección de Contenido */

$(function(){
    'use strict';

    // Con jQuery
    $('header'); // Selecciona etiqueta
    $('.contenido'); // Seleciona clase
    $('#contenido'); // Selecciona ID

    // Sin jQuery
    document.getElementsByTagName('header') // Selecciona la etiqueta header
    document.querySelector('header') // Selecciona la etiqueta header
    document.getElementsByClassName('contenido') // Selecciona elementos por clase
    document.querySelectorAll('.contenido') // Selecciona las clases contenido
    document.getElementById('contenido') // Selecciona el ID
    document.querySelector('#contenido') // Selecciona el ID
    
});