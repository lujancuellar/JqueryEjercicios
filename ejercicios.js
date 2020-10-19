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

//ejercicio de añadir parrafo al final del body.

$(document).ready(function(){
    $("#boton").click(function(){
      $("body").append("<p>Esto es un parrafo agregado al final del body</p>");
    });
  });

//Ejercicio de Google Fonts.


$(document).ready(function() {
    $("#h1").on({
      click: function() {
         $(".fuente").css({"font-family": "Roboto", "color": "red"});
      }
    });    
 });

 $(document).ready(function() {
    $("#h2").on({
      click: function() {
         $(".fuente").css({"font-family": "Sansita Swashed" , "color": "blue"});
      }
    });    
 });

 
 $(document).ready(function() {
    $("#h3").on({
      click: function() {
         $(".fuente").css({"font-family": "Piedra, cursive" , "color": "yellow"});
      }
    });    
 });

 $(document).ready(function() {
    $("#h4").on({
      click: function() {
         $(".fuente").css({"font-family": "Koulen","color": "violet" });
      }
    });    
 });

 $(document).ready(function() {
    $("#h5").on({
      click: function() {
         $(".fuente").css({"font-family": "Chilanka", "color": "orange"});
      }
    });    
 });

 $(document).ready(function() {
    $("#h6").on({
      click: function() {
         $(".fuente").css({"font-family": "Krona One, Sans Serif" , "color": "lightblue"});
      }
    });    
 });

 //Galería de imágenes que desaparecen cuando se pasa el mouse por encima.

 $(document).ready(function(){
    $("#imagen1").mouseover(function(){
      $("#imagen1").fadeOut(4000, function(){
        $("#div1").text("Arboles en otoño");
      });
    });
  });

  $(document).ready(function(){
    $("#imagen2").mouseover(function(){
      $("#imagen2").fadeOut(4000, function(){
        $("#div2").text("Carretera");
      });
      
    });
  });

  $(document).ready(function(){
    $("#imagen3").mouseover(function(){
      $("#imagen3").fadeOut(4000, function(){
        $("#div3").text("Montañas en invierno");
      });
    });
  });

  $(document).ready(function(){
    $("#imagen4").mouseover(function(){
      $("#imagen4").fadeOut(4000, function(){
        $("#div4").text("Noche estrellada");
      });
    });
  });

  //Texto que al apretarlo muestra otro texto.

  $(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });
  });

  //Crear un boton con el efecto ver mas.
  $(document).ready(function(){
    $("#ver").click(function(){
      $("#mostrarTexto").toggle(function(){
      $("#ver").text("Ver menos")});
    });
  });
 
  
  //lista de compras.

  $(document).ready(function(){
    $("#sumar").click(function(){
      let valor = $("#descripcion").val();
      let cantidad = parseInt($("#cantidad").val(), 10);
      let precio = parseInt($("#precio").val(), 10);
  

      if (valor != "" && cantidad != "" && precio != "") {
        $("#resultado").append("<li>" + valor + " " + cantidad + " "+ precio + "</li>" + "<br>" );
      } else if (valor == ""|| cantidad == "" || precio == "") {
        $("#resultado").append("Faltan valores" + "</br>");
      } 
    });
  })

  //checkbox que por defecto este desactivado.

$(document).ready(function(){
  let checkbox = $("#checkbox");

 checkbox.change(function() {
   let otroCheck = $(this);
   let estaChequeado = otroCheck.prop("checked");
   if (estaChequeado) {
     $("#submit").prop("disabled", false);
   } else {
    $("#submit").prop("disabled", true);
   }
 })
})

//Redirigir a links de google y stackoverflow.

$(document).ready(function(){
  $("#redirigir").click(function(){
    $("#google").text("Ir a Stackoverflow");
    $("a[href='https://google.com").attr('href', 'https://stackoverflow.com/')
  })
})
