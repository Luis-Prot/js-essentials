/* Clase 34 - Eliminar Nodos */

(function(){
    'use strict';
    document.addEventListener('DOMContentLoaded', function(){
        var primerPost = document.querySelector('main article');
        primerPost.parentNode // Revisamos el nodo padre
        // Los elemento solo se pueden borrar desde el padre
        primerPost.parentNode.removeChild(primerPost);

        // Borrar el primer celular
        var enlaces = document.querySelector('#navegacion nav ul li a');
        enlaces.parentNode.removeChild(enlaces);

        // Borrar uno en especifico
        var enlaces = document.querySelector('#navegacion nav ul li a')[10];
        enlaces.parentNode.removeChild(enlaces);
    });
})();