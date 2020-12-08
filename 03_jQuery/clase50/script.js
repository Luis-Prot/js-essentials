/* Clase 50 - ScriptJS */

$(function(){
    'use strict';

    $('.nuestros-servicios div:first').show();
    $('.servicios nav a:first').addClass('activo');

    function mostrarTabs(){
        $('.servicios nav a').removeClass('activo');
        $(this).addClass('activo')
        var enlace = $(this).attr('href');
        $('.nuestros-servicios div').fadeOut();
        $(enlace).fadeIn();
        return false;
    };
    $('.servicios nav a').on('click', mostrarTabs);

});