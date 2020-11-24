/* Clase 17 - Ciclo While/Do while */
// Es conocido como ciclo infinito y a diferencia de for este el incremento se pone en la sentencia

var i;
while(i<10){
    console.log(i);
    i++;
};

var premierLeague = ["Chelsea", "Manchester United", "Liverpool", "Arsenal"];
while(i<premierLeague.length){
    console.log(premierLeague[i]);
    i++;
};


// El menos común
var contar = 0;
do {
    console.log(contar + ' veces es igual a' + contar*7);
} while (contar++ < 8);