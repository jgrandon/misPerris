$(document).ready(function(){

  cambiarVista('home');

  //se agrega listener a los enlaces del menu superior
  $("a.nav-link").click(function(){

    // con $(this) hacemos referencia al enlace (<a>)
    // con .data() accedemos a un array con todos los valores de los atributos escritos como "data-ATRIBUTO" en el tag <a>
    const vista = $(this).data().vista;

    //borra el sombreado sobre todos los enlaces
    $(".nav-item").removeClass('active');

    //añade el sombreado al item recien clickeado
    $(this).parent('.nav-item').addClass('active');

    //muestra la vista
    cambiarVista(vista);
  });



});




function cambiarVista(vista){
  $.ajax({
    url : "views/"+ vista + ".html"
    , type : "GET"
  }).done(function(htmlRespuesta){
    $(".div-contenedor").hide();
    $(".div-contenedor").html(htmlRespuesta);
    $(".div-contenedor").show();
  }).fail(function(errorCode){
    alert("Error en la comunicacion " );
  });
}
