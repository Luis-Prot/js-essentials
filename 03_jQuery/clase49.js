/* Clase 49 - Trabajando con Arreglos */

$(function(){
    'use strict';

    // Arreglos
    var proximosViajes = ['Londres', 'Valencia', 'Madrid', 'Paris', 'Milan'];

    $.each(proximosViajes, function(i, v){
        if (i == 0){
            $('aside').append('<h2>Próximos Viajes</h2>')
        }
        $('aside').append(`<li>${v}</li>`);
    });

    // Objetos
    var viajesPorFecha = {
        primero: 'Londres',
        segundo: 'Valencia',
        tercero: 'Madrir',
        cuarto: 'Paris',
        quinto: 'Milan'
    };
    
    $.each(viajesPorFecha, function(i, v){
        $('aside').append(`<li>${i} - ${v}</li>`);
    });
});