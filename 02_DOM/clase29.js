/* Clase 29 - querySelectorAll*/
(function(){
    'use strict';
    document.addEventListener('DOMContentLoaded', function(){
        enlace = document.querySelectorAll('a');
        console.log(enlace);
        for (var i = 0; i < enlace.length; i++){
            console.log(enlace[i].innerText);
        };
    });
  })();