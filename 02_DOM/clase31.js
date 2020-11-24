/* Clase 31 - Crear elementos */

(function(){
    'use strict';
    document.addEventListener('DOMContentLoaded', function(){
        var sidebar = document.querySelector('#sidebar');
        var nuevoElemento = document.createElement("H1"); // Creamos un elemento <h1></h1>
        var nuevoTexto = document.createTextNode("Hola Mundo"); // Creamos el texto 
        nuevoElemento.appendChild(nuevoTexto); // Ingresamos texto dentro del h1
        sidebar.appendChild(nuevoElemento); // Ingresamos el h1 dentro del sidebar

        // Agregar una entrada 
        var enlacesSidebar = document.querySelectorAll('#sidebar ul');
        // Crear un enlace
        var nuevoEnlace = document.createElement('A');
        nuevoEnlace.setAttribute('href', '#');
        var nuevaEntrada = document.createTextNode('Entrada 6');
        nuevoEnlace.appendChild(nuevaEntrada);

        // Creando la lista
        var nuevaLista = document.createElement('LI');
        nuevaLista.appendChild(nuevoEnlace);

        // Aparecer la entrada
        enlacesSidebar[0].appendChild(nuevaLista);
    });
})();