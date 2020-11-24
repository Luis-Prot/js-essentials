/* Clase 20 - Funciones que retornan valores */
// Son utiles si quieres hacer algo con el resultado de una función

var numero1;
function multiplicacionx20(numero){
    numero *= 20;
    return numero;
};

// Podemos almacenar el resultado en una variable
var resultado = multiplicacionx20(3);
console.log(resultado);

const IMPUESTO = 0.16;
var cantidad;
function totalPagar(numero){
    numero = numero + (numero*IMPUESTO);
    return numero;
}

var resultado = totalPagar(100);
console.log(resultado);