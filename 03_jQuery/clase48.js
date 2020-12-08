/* Clase 48 - Ajax con jQuery */

$(function(){
    'use strict';

    function agregarContenido(data, status, jqxhr){
        $('aside').text(data);
        console.log(status)
    }
    // Cargamos un archivo de texto (Promociones en 20% de descuento)
    function cargarAjax(){
        $.ajax('promociones.txt', {
            success: agregarContenido,
            type: 'GET',
            datatype: 'text'
        });
    }
    $('div.logo img').on('click', cargarAjax);

    // Esto es independiente ya que aca cargamos un archivo html
    $('aside').load('promociones.html')
});