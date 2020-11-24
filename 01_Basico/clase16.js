/* Clase 16 - CicloFor */
// Se utiliza para iterar entre objetos o variables hasta que una condicion se cumpla

var i;
for (i = 0; i <= 20; i++) {
    console.log(i);
};

for (i = 0; i <= 20; i++) {
    if (i==5){
        console.log('CINCO!!');
        continue;
    };
    console.log(i);
};

for (i = 20; i > 0; i--) {
    if (i==5){
        console.log('CINCO!!');
        continue;
    };
    console.log(i);
};


// Se pueden iterar Arrays
var premierLeague = ["Chelsea", "Manchester United", "Liverpool", "Arsenal"];
for (i=0; i < premierLeague.length; i++){
    console.log(premierLeague[i]);
};
