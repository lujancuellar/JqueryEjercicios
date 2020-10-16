//Carga texto "READY!" una vez que el documento ha terminado de cargar.

//$(document).ready(function() {
    //alert ("READY!");
//});

//Crear un boton "Mostrar contenido oculto", que muestre un texto al hacer click.
$(document).ready(function(){ 
    $('#mostrar').on('click',function(){
       $('#contenido').toggle();
    });
 });

 //Recorrer párrafos y que cada uno tenga un color distinto.
 
 //$(document).ready(function() {
    //let myColors = [
     //   '#f00', '#abc', '#123', '#ff2',
    //];
   // let i = 0;
    //$('p').each(function() {
        //$(this).css('background-color', myColors[i]);
       // i = (i + 1) % myColors.length;
    //});
//});

//ejercicio de añadir parrafo al final. Los dos hacen 

$(document).ready(function(){
    $("#boton").click(function(){
      $("body").append("<p>Esto es un parrafo agregado al final del body</p>");
    });
  });

//Ejercicio de Google Fonts.


$(document).ready(function() {
    $("#h1").on({
      click: function() {
         $(".fuente").css({"font-family": "Roboto"});
      }
    });    
 });

 $(document).ready(function() {
    $("#h2").on({
      click: function() {
         $(".fuente").css({"font-family": "Sansita Swashed"});
      }
    });    
 });

 
 $(document).ready(function() {
    $("#h3").on({
      click: function() {
         $(".fuente").css({"font-family": "Piedra, cursive"});
      }
    });    
 });

 $(document).ready(function() {
    $("#h4").on({
      click: function() {
         $(".fuente").css({"font-family": "Koulen"});
      }
    });    
 });

 $(document).ready(function() {
    $("#h5").on({
      click: function() {
         $(".fuente").css({"font-family": "Chilanka"});
      }
    });    
 });

 $(document).ready(function() {
    $("#h6").on({
      click: function() {
         $(".fuente").css({"font-family": "Krona One, Sans Serif"});
      }
    });    
 });

 //Galeria de imagenes.
 $(document).ready(function(){
    $("#imagen1").mouseover(function(){
      $("#imagen1").fadeOut("slow");
      $("#div1").text("Paisaje");
    });
  });

  $(document).ready(function(){
    $("#imagen2").mouseover(function(){
      $("#imagen2").fadeOut(3000);
    });
  });

  $(document).ready(function(){
    $("#imagen3").mouseover(function(){
      $("#imagen3").fadeOut(3000);
    });
  });