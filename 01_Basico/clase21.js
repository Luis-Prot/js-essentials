/* Clase 21 - Scope */
// Es una forma de utilizar lo que esta disponible se les conoce como ambitos

function scope1(){
    var a = 10;
    console.log(a);
};
function scope2(){
    var b = 20;
    console.log(b);
};


scope1();
scope2();


var d = 40; // Ambito global
function scope3(){
    var c = 30;
    console.log(a); // Ambito no existente
};
scope3();