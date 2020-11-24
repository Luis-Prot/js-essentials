/* Clase 27 - GetElementsByTagName */

(function(){
    'use strict';
    document.addEventListener('DOMContentLoaded', function(){
        // Se utiliza para seleccionar etiquetas de HTML
        var enlaces = document.getElementsByTagName('a');
        console.log(enlaces);
        for (var i=0;i<enlaces.length;i++){
            enlaces[i].setAttribute('target', '_blank');
        };

        var enlacesSidebar = document.getElementById('sidebar').getElementsByTagName('a');
        console.log(enlacesSidebar);
        for (var i=0; i < enlacesSidebar.length; i++){
            enlacesSidebar[i].setAttribute('href','http://www.google.com');
        }
    });
})(); 