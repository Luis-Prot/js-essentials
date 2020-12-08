/* Clase 51 - Funciones Constructoras */

// Permiten generar nuevas instancias de objetos hacemos uso del operador new
// var personaLuis = {
//     nombre: 'Luis',
//     edad: 27,
//     peso: 68
// }
// Para instanciar varios objetos

// Para generar varias instancias usamos una función constructora

function persona(nombre, edad, peso){
    this.nombre = nombre;
    this.edad = edad;
    this.peso = peso;
}

var personaLuis = new persona('Luis', 27, 68);

console.log(personaLuis)

// Creacion de 10 motocicletas de forma aleatoria usando una función constructora

function motocicletas(marca, cilindraje, color){
    this.marca = marca;
    this.cilindraje = cilindraje;
    this.color = color;
}

var marcaMoto = ['Bajaj', 'BMW', 'Suzuky', 'AKT', 'Yamaha', 'TVS'];
var cilindrajeMoto = [150, 125, 200, 250, 300, 600, 1200];
var colorMoto = ['Negro', 'Rojo', 'Verde', 'Azul', 'Gris'];
var Motos = [];

// Generar numero entre uno y otro (numero entre 5 incluyendo y 10 excluyendo)
// var numeroAleatorio = Math.trunc(Math.random()*((max+1)-min)+min);
for(var i=0; i < 10; i++){
    var numeroMarca = Math.trunc(Math.random()*(6-0)+0);
    var numeroCilindraje = Math.trunc(Math.random()*(7-0)+0);
    var numeroColor = Math.trunc(Math.random()*(5-0)+0);

    Motos.push(new motocicletas(marcaMoto[numeroMarca], cilindrajeMoto[numeroCilindraje], colorMoto[numeroColor]));
}

for(moto for Motos){
    console.log(moto);
}