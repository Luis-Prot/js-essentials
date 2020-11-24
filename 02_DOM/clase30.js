/* Clase 30 - Nodos */

(function(){
    'use strict';
    document.addEventListener('DOMContentLoaded', function(){
        var enlaces = document.querySelectorAll('#menu ul li a')[0];
        console.log(enlaces.nodeType); //Tipo de nodo 1
        console.log(enlaces.nodeName); // Nombre del nodo A
        console.log(enlaces.attributes); // atributos
        console.log(enlaces.attributes[1])
        console.log(enlaces.firstChild); // Valor en string
        console.log(enlaces.firstChild.nodeValue); // Valor del nodo 
        enlaces.firstChild.nodeValue = 'Home';
    });
  })();