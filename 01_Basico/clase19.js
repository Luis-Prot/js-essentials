/* Clase 19 - Funciones con Argumentos */
// Se utilizan para mandarle argumentos a una función

function suma(n1,n2) {
    console.log(n1+n2);
};

function multiplicar(n1,n2){
    console.log(n1*n2);
};

suma(1,2);
multiplicar(2,5);

// Funcion para llegar un array

var frutas = [];
function arrayFrutas(fruta){
    frutas.push(fruta);
    console.log(frutas)
};

arrayFrutas("Durazno");

// En ECMACScript 6 puedes generar constantes con const MAYUS
const IMPUESTO = 0.16;
var total = 0;
function carrito(articulo, precio){
    console.log("Articulo: " + articulo + " Precio: " + precio);
    total += precio + (IMPUESTO*precio);
    console.log("Total: $" + total.toFixed(2));
};

carrito("cerveza",20);