/* Clase 18 - Funciones */
// Se les conoce como subrutinas y se encargan de realizar una accion

// Declaración
function suma (){
    console.log(2 +2 );
};

// No hacen nada hasta que las mandes a llamar
suma();

function arrayFrutas(){
    var frutas = ['Fresa', 'Naranja', 'Manzana', 'Durazno'];
    console.log(frutas);
};

arrayFrutas();

var miFrutas = function (){
    var frutas = ['Fresa', 'Naranja', 'Manzana', 'Durazno'];
    console.log(frutas);
};

miFrutas();

var auto = {
    nombre: 'Mustang',
    motor: 5.5,
    color: 'azul',
    clasico: true,
    anio: 1965,
};
function recorrerObjeto (automovil){
    console.log(this.nombre);
    console.log(this.motor);
    console.log(this.color);
    console.log(this.clasico);
    console.log(this.anio);
};
// Definimos la propiedad para auto
auto.mostrarAuto = recorrerObjeto;
auto.mostrarAuto();