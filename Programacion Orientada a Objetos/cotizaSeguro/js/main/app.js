const anio = document.getElementById("anio");
eventListener();
llenarSelectAnio();

function eventListener() {
  document
    .querySelector("#cotizar-seguro")
    .addEventListener("submit", CotizarSeguro);
}

function CotizarSeguro(event) {
  event.preventDefault();

  const marcaSeleccionada = document.getElementById("marca").value;
  const tipo = document.querySelector('input[name="tipo"]:checked').value;
  const valueAnio = anio.value;
  const interfaz = new Interfaz();

  if (marcaSeleccionada == "" || tipo == "" || valueAnio == "") {
    interfaz.mostrarMensaje(
      "Faltan Datos, favor de revisar el formulario",
      "error"
    );
    return;
  }

  const resultado = document.querySelector("#resultado div");

  if (resultado != null) resultado.remove();
  
//   instanciamos el Seguro de 
  const seguro= new Seguro(marcaSeleccionada,valueAnio, tipo);
  const total= seguro.cotizarSeguro();

  interfaz.mostrarResultado(seguro, total);
  interfaz.mostrarMensaje('Cotizando...', 'exito');

  

}

function llenarSelectAnio() {
  const max = new Date().getFullYear(); //nos retorna la fecha en formato dia, mes, año
  const min = max - 20; // nos indica la fecha minima que se puede ingresar (en este caso 20 años o año 2000)
  // Para llenar dinamicamente el año
  for (let i = max; i > min; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    anio.appendChild(option);
  }
}
