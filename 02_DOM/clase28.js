/* Clase 28 - querySelector*/
(function(){
    'use strict';
    document.addEventListener('DOMContentLoaded', function(){
        // Seleccionar un ID
        var logo = document.querySelector("#logo");
        console.log(logo);
        // Seleccionar una clase
        var logo = document.querySelector(".logo");
        console.log(logo);

        // Seleccionar un h2 dentro de un aside
        var encabezado = document.querySelector('aside h2');
        console.log(encabezado);

        // Solo arroja un h2
        var encabezado = document.querySelector('h2');
        console.log(encabezado);

        // Arroja todos los h2
        var encabezado = document.querySelectorAll('h2');
        console.log(encabezado[0].innerText);

        // Puedes darle 2 parametros a querySelectorAll
        var encabezado = document.querySelectorAll('h2, footer p');
        console.log(encabezado[0].innerText);

        enlaces = document.querySelectorAll('a');
        console.log(enlaces);
    });
  })();