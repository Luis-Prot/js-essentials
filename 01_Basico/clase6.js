/* Clase 6 - Manipulación de Arreglos */
// Es una coleccion de datos relacionados
// Se almacenan en una variable 

var premierLeague = ["Chelsea", "Manchester United", "Liverpool", "Arsenal"];
console.log(premierLeague);

// Agregar un valor a un arreglo
premierLeague.push('Manchester City');

// Mete un valor en un Array sustituyendolo
premierLeague[2] = "Leicester";

// Para saber la existencia o indice de un valor en un Array
premierLeague.indexOf("Manchester United");

// Eliminar un valor de un array
premierLeague.pop(); // Elimina el último elemento de un arreglo

// Elimina los elementos dentro de un rango de inicio y final
premierLeague.splice(1,2);

// Filtrar array
var premierLeague = ["Chelsea", "Manchester United", "Liverpool", "Arsenal"];
var nuevoArreglo = premierLeague.filter(function(equipo){
    return (equipo !== 'Chelsea');
});
