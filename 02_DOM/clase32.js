/* Clase 32 - Clonar elementos */

(function(){
    'use strict';
    document.addEventListener('DOMContentLoaded', function(){
        var contenido = document.querySelectorAll('main');
        var nuevoContenido = contenido[0].cloneNode(true); // Clona el contenido es esencial el valor de true

        var sidebar = document.querySelector('aside'); 
        sidebar.insertBefore(nuevoContenido, sidebar.childNodes[5]); // Elegimos donde clonarlo
    });
})();