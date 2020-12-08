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

// Filtrar array por condicion dentro del metodo filter
var premierLeague = ["Chelsea", "Manchester United", "Liverpool", "Arsenal"];
var nuevoArreglo = premierLeague.filter(function(equipo){
    return (equipo !== 'Chelsea');
});

// Concatener Array
var motos = ['akt', 'aprilia', 'yamaha'];
var automoviles = ['ford', 'fiat', 'mazda', 'ferrari', 'bmw', 'skoda'];
concatenacion_arrays = motos.concat(automoviles);

// Juntar arrays
var motos = ['akt', 'aprilia', 'yamaha'];
var automoviles = ['ford', 'fiat', 'mazda', 'ferrari', 'bmw', 'skoda'];
Array.prototype.push.apply(motos, automoviles); // Modifica el primer array

// Operar un Array
var animales = [
    {nombre: "Perros", color: "Marron", cantidad: 16},
    {nombre: "Gatos", color: "Gris", cantidad: 36},
    {nombre: "Elefantes", color: "Gris", cantidad: 3},
    {nombre: "Leones", color: "Amarillo", cantidad: 30},
    {nombre: "Aguilas", color: "Negra", cantidad: 10},
    {nombre: "Ballena", color: "Azul", cantidad: 4},
    {nombre: "Cocodrilo", color: "Verde", cantidad: 9},
    {nombre: "Canario", color: "Rojo", cantidad: 40},
]
// Retornar los animales mayores a 10
var cantidadDeAnimalesMayores = animales.filter(function(animal){
    return animal.cantidad > 10;
});
console.log(cantidadDeAnimalesMayores);


// Retornar los animales menores a 10
var cantidadDeAnimalesMayores = animales.filter(function(animal){
    return animal.cantidad < 10;
});
console.log(cantidadDeAnimalesMayores);

// Elabora una función que busque sobre un arreglo
var personas = ['juan', 'luis', 'david', 'paola', 'laura', 'ramon', 'ana', 'lucas'];
function buscarNombres(letras){
    return personas.filter(function(persona){
        return persona.toLowerCase().indexOf(letras.toLowerCase()) > -1;
    });
};
buscarNombres('an')

// Elabora lo mismo pero con el arreglo de animales
function buscarAnimales(letras){
    return animales.filter(function(animal){
        return animal.nombre.toLowerCase().indexOf(letras.toLowerCase()) > -1;
    });
};

// Operaciones con Map este opera sobre todos los objetos
// Del array animales devuelve la cantidad de animales sumando 4 animales a cada 1
var cantidadAnnimalesAumento = animales.map(function(animal){
    return animal.cantidad + 5;
});


var nombreAnimalesMap = animales.map(function(animal){
    return animal.nombre;
});

var nombreAnimalesFilter = animales.filter(function(animal){
    return animal.nombre;
});

// Busqueda en arreglos
// Busqueda de un elemento especifico
var numeros = [33, 45, 31, 28, 17, 56];

// Primera Fora
// var encontrarNumero = numeros.find(function(numeros){
//     return numero < 30
// })

// Segunda forma pasando la función en el parametro a la función find
function encontrarNumero(numero){
    return numero < 30;
};

// Para arrojar la posición
console.log(numeros.indexOf(numeros.find(encontrarNumero)));

// Devolver el objeto espcifico que se llame nombre en animales
var buscarAnimales = animales.find(function(animal){
    return animal.nombre.toLowerCase() === "aguilas"; 
});

// Devolver el primer numero que sea par de una lista de numeros
function numeroPar(elemento){
    return elemento % 2 === 0;
};

console.log(numeros.find(numeroPar));

// findIndex Devuelve la posición del primer elemento que encuentre
// Regresa la posición del primer elemento par
var numeros = [33, 12, 31, 28, 17, 56];
console.log(numeros.findIndex(numeroPar));

// forEach Recorre todo el array
animales.forEach(function(animal){
    console.log(animal.toUpperCase());
});

// Exitencia de un valor en un arreglo con some()

var numeros = [];
for(var i=0; i<5; i++){
    var recibir = Number(prompt('Dime tu numero'));
    numeros[i] = recibir;
};

var numeroPar = numeros.some(function(numero){
    return numero % 2 === 0;
});

for (numero of numeros){
    console.log(numero);
};
