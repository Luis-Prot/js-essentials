/* Clase 13 - Operadores Lógicos*/ 
// Se utiliza para checar dos o más condiciones 
// El operador AND se representa como &&
// El operador OR se representa como ||

var cantidadPagar = 100;
var saldo = 101;
var recargaTelefono = 10;
var usuarioValido = false;

if (saldo > cantidadPagar && usuarioValido){
    console.log("Se pago correctamente");
} else {
    console.log("No tienes suficiente saldo");
};

if (saldo > cantidadPagar || usuarioValido){
    console.log("Se pago correctamente");
} else {
    console.log("No tienes suficiente saldo");
};