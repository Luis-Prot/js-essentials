/* Clase 11 - Condicionales IF, IFELSE, ELSE */
// Son estructuras de control mediante condiciones 

var cantidadPagar = 100;
var saldo = 500;

if(saldo < cantidadPagar){
    console.log("No hay saldo para pagar");
} else {
    console.log("El pago se realizo con exito");
};

// Otro ejemplo

var edad1 = 20;
var edad2 = 20;

if(edad1 > edad2) {
    console.log("Edad1 es mayor");
} else if(edad1 == edad2){
    console.log("Edad1 es igual a Edad2");
} else {
    console.log("Edad2 es mayor");
};


// Comparación estricta con === 
var edad3 = "20";
var edad4 = 20;

// Comparación relajada
if(edad3 == edad4){
    console.log("Edad3 es igual a Edad4");
} else {
    console.log("No son iguales");
};

// Comparación estricta
if(edad3 === edad4){
    console.log("Edad3 es igual a Edad4");
} else {
    console.log("No son iguales");
};

// Operador ternario
// Utiliza una sintaxis de:
// condicion ? verdadero : falso;

5>6 ? 'Cierto' : 'Falso';