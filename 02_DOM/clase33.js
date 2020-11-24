/* Clase 33 - InsertBefore */

(function(){
    'use strict';
    document.addEventListener('DOMContentLoaded', function(){
        var sidebar = document.querySelector('aside');
        var masVisitados = document.createElement('H2');
        var textosVisitados = document.createTextNode('Post más visitados');
        masVisitados.appendChild(textosVisitados);
        sidebar.insertBefore(masVisitados, sidebar.childNodes[0]);

        var contenido = document.querySelectorAll('main h2');
        for (var i = 0; i < contenido.length; i++){
            var nuevoElemento = document.createElement('LI');
            var nuevoTexto = document.createTextNode(contenido[i].firstChild.nodeValue);
            nuevoElemento.appendChild(nuevoTexto);
            sidebar.insertBefore(nuevoElemento, sidebar.childNodes[1]);
        }
    });
})();