/* Clase 9 - Números */
// Es un tipo de datos primitivo

var numero1 = "15";
var numero2 = -20;
var numero3 = 21.5;
var numero4 = 20;
var numero5 = "3.1416";
var numero6 = -30.5;

// Para conocer el tipo de dato necestamos poner typeof

typeof(numero1);
typeof(numero2);
typeof(numero3);
typeof(numero4);
typeof(numero5);
typeof(numero6);

// Para convertir strings en numeros necesitamos la función parseInt

var numero7 = parseInt(numero1);

var numero8 = parseFloat(numero5);

numero8.toFixed(2) // Para mostrar el numero de decimales que deseemos
