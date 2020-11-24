/* Clase 35 - Remplazar Elementos */

(function(){
    'use strict';
    document.addEventListener('DOMContentLoaded', function(){
        var viejoNodo = document.querySelector('main h2'); // Seleccionamos lo que vamos a sustituir
        var nuevoNodo = document.querySelector('footer h2'); // Seleccionamos lo que sustituira
        // Para remplazar necesitamos ir al padre
        viejoNodo.parentNode.replaceChild(nuevoNodo, viejoNodo); 
        
        var nuevoTitulo = document.createElement('H2');
        var nuevoTexto = document.createTextNode('Hola Mundo');
        nuevoTitulo.appendChild(nuevoTexto);

        var viejoNodo = document.querySelector('main h2');
        viejoNodo.parentNode.replaceChild(nuevoTitulo, viejoNodo);
    });
})();