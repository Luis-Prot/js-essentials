/* Clase 4 - Manipulacion de Objetos */
var auto = {
    nombre: 'Mustang',
    motor: 5.5,
    color: 'azul',
    clasico: true,
    anio: 1965,
};

// Cambio de un atributo dentro del objeto
auto.nombre = 'Camaro';

console.log(auto);
console.log(auto.nombre);

// Borrar un atributo de un objeto
delete auto.anio
console.log(auto);

// Objetos con metodos
var persona = {
    nombre: 'Luis',
    edad: 27,
    color_ojos: 'cafe',
    peso = 69,
    // Creamos un metodo dentro del objeto
    mensajeNombreOjos: function(){
        console.log(`Mi nombre es ${this.nombre} y tengo un color de ojos ${this.color_ojos}`)
    }
}

persona.mensajeNombreOjos()