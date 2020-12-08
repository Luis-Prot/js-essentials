/* Clase 13 - Switch */ 
// Se utiliza para revisar varias condiciones 

var metodoPago = prompt('Ingresa tu forma de pago')

switch (metodoPago) {
    case "TC":
        console.log("Se pago con tarjeta de Credito");
        break;
    case "Efectivo":
        console.log("Se pago con efectivo");
        break;
    case "Paypal":
        console.log("Se pago con paypal");
        break;
    default:
        console.log("Se eligio otra forma");
        break;
};