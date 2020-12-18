/* Clase 11 - Strings */

// Son las cadenas de textos 

var texto = 'Esto es una cadena de Texto';
console.log(texto);
typeof(texto);

// Texto en mayusculas
texto.toUpperCase();

// Texto en minusculas
texto.toLowerCase();

// Longitud
texto.length;

// Separar por espacios
texto.split(" "); // Arroja un arreglo

// Busqueda de uno o caracteres 
texto.indexOf("cadena");

// Tomar un fragmento de la cadena
texto.slice(0,11);

// Template String
// Es una forma para acceder a los valores de una variable dentro de un string
// hace uso de las comillas invertidas ` generando una interpolación y ${variable}
var gato = 'Chimuelo'
console.log(`Mi gato se llama ${gato}`)

/* Metodos con String */ 
var nombre = 'Luisini'
var mascota = 'chimuelo'
var belleza = 'hermoso'

// Metodo concat, concatena string
var resultado = nombre.concat(' tiene un gato llamado ', mascota, ' que es muy ', belleza)

// Metodo substr captura una substring dentro de una string
// str.substr(position, numberWords)
var mensaje = 'Hola mis queridos programadores'
var captura = mensaje.substr(1,3) // Obtiene ola del mensaje

// Metodo include(), busca un patron en especifico dentro de una string, devuelve un booleano
// str.includes(patron, posicionBusqueda=0)
mensaje.includes('programadores')

// Uso de posiciones en Strings
// Debido a que los string se comportan como arrays podemos hacer uso de []
mensaje[0] // Accedemos a la H