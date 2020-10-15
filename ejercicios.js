//Carga texto "READY!" una vez que el documento ha terminado de cargar.

$(document).ready(function() {
    alert ("READY!");
});

$(document).ready(function() {
    $("h1").text("Este texto se vera cuando la pagina este completamente cargada");
});

//Crear un boton "Mostrar contenido oculto", que muestre un texto al hacer click.
$(document).ready(function(){ 
    $('#mostrar').on('click',function(){
       $('#contenido').toggle();
    });
 });

 //Recorrer párrafos y que cada uno tenga un color distinto.
 
 $(document).ready(function() {
    let myColors = [
        '#f00', '#abc', '#123', '#ff2',
    ];
    let i = 0;
    $('p').each(function() {
        $(this).css('background-color', myColors[i]);
        i = (i + 1) % myColors.length;
    });
});
