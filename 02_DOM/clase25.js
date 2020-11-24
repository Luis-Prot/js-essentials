/* Clase 25 - GetElementByID */ 


(function(){
    'use strict';
    document.addEventListener('DOMContentLoaded', function(){
        var logo = document.getElementById('logo');
        console.log(logo);
        logo.hasAttribute('class'); // Tiene alguna clase asociada
        logo.getAttribute('class'); // Ver el valor de la clase
        logo.setAttribute('old_class','new_class'); // Modificar el valor de la clase

        var navegacion = document.getElementById('navegacion');
        navegacion.style.display = "none"; // Modifica el valor de css a none, manipula directo el DOM
    });
})();

