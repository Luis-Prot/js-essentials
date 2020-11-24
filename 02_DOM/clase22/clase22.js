/* Clase 22 - innerHTML */
// DOM

var total, numero1, numero2;
function totalPagar(numero1, numero2){
    total = numero1 * numero2;
    return total
};

var granTotal = totalPagar(10,20);

var calculadora = document.getElementById('resultado').innerHTML = granTotal + " Dolares";