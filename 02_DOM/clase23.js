/* Clase 22 - Introducción al DOM */
// Cada etiqueta que explores con tu navegador se le conoce en JavaScript como nodos 
// que forman parte del DOM (Document Object Model), se dividen en padres (contenedores)
// e hijos (elementos)

/* Clase 23 - Selectores en JavaScript */ 
// Los selectores seran las etiquetas que manejaremos con JavaScript
// podremos acceder al DOM escribiendo la palabra document
document;

// Para acceder a algun selector en especifico hacemos uso de dot notation pero solo 
// funcionara para el head y body
document.head;
document.body;

// Para acceder al header o algun selector de segundo nivel
document.querySelector('header');

// Podemos elegir id's y clases NO ES TAN SOPORTADA
document.querySelector("#navegacion"); // ID
document.querySelector(".navegador"); // Clase
// Atajos de QuerySelector
$('header');
$('.navegador');

// Soportada por todas
document.getElementById('navegador'); // Selecciona por ID
document.getElementsByClassName('navegador')