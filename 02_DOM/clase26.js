/* Clase 26 - GetElementsByClassName */
(function(){
    'use strict';
    document.addEventListener('DOMContentLoaded', function(){
        var navegacion = document.getElementsByClassName('navegacion');
        // Puede regresar muchos valores por una clase como un Array
        console.log(navegacion[0]);

        var contenido = document.getElementsByClassName('contenido');
        console.log(contenido[0]);
        
    });
  })(); 