addEventListener('load', inicializarEventos, false);
function inicializarEventos()
{
  var mostrar = document.getElementById("mostrar");
  mostrar.addEventListener('click', mostrarDatos, false);
}
//var actualizar = setInterval(function(){mostrarDatos()}, 500)
function mostrarDatos(e)
{
//  e.preventDefault();
  var url = mostrar.getAttribute('name');
  cargarDatos(url);
}

var conexion;
function cargarDatos(url)
{
  conexion = new XMLHttpRequest(url);
  conexion.onreadystatechange = procesarEventos;
  conexion.open("GET", url, true);
  conexion.send();
}

function procesarEventos()
{
  var datos = document.getElementById("datos");
  if(conexion.readyState == 4)
  {
    datos.innerHTML = conexion.responseText;
  }
  else
  {
    datos.innerHTML = 'Cargando...';
  }
}
