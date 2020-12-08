/* Ejercicio While

Vamos a hacer un codigo que genere un objeto que contenga como clave nombre, dinero, edad.
Lo que va a realizar este codigo es determinar en cuantos dias esta persona pierde o gana
dinero

Se debe tener presente que las posibilidades de ganar dinero son del 60%,
las posibilidades de perder dinero son del 40%.

Se determina que la persona pierde dinero cuando su dinero es menos de 1000 y 
cuando supera los 2000 se dice que gana dinero.

Imprima un mensaje con el nombre, cantidad de dinero final, determine si gano
o perdio y digale e indique en cuatos dias sucedio esto

Importante los datos en cuenta deben ser aleatorio.
*/

let personaLuis = {
    nombre: 'Yelo',
    dinero: 1500,
    edad: 25
}
var aumentoDinero = 15;
var pierdeDinero = 14;
var dias;

const probabilidadGanarDinero = () => Math.random() <= 0.6;

const probabilidadPerderDinero = () => Math.random() > 0.6;

const ganarDinero = (persona) => persona.dinero += aumentoDinero;

const perderDinero = (persona) => persona.dinero -= pierdeDinero;

while (personaLuis.dinero > 1000 && personaLuis.dinero < 2000) {
    if (probabilidadGanarDinero()) {
        ganarDinero(personaLuis);
    }
    if (probabilidadPerderDinero()) {
        perderDinero(personaLuis);
    }
    dias += 1;
}

console.log(`Al finalizar los ${dias} dias, ${personaLuis.nombre} tiene esta cantidad de dinero ${personaLuis.dinero}. Usted acaba de ${personaLuis.dinero >= 2000 ? 'Ganar' : 'Perder'}`)