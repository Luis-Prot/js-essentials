/* Clase 24 - Document Ready */ 

console.log("1");

(function(){
    'use strict'; // Ejecución en modo estricto
    document.addEventListener('DOMContentLoaded', function(){ // Se ejecuta hasta que el evento se cargue esto es cuando todo el DOM este listo
        console.log("2");
    });
})(); // Esto se encarga de que nadamas se ejecute el codigo una vez

console.log("3");