const ContenidoInput = document.querySelector("#txActividad");
const ListaTareas = document.querySelector("#lista-tareas");
eventListener();

function eventListener() {
  document
    .querySelector("#Formulario")
    .addEventListener("submit", ObtenerTarea);
  ListaTareas.addEventListener("click", eliminarTarea);
}

function ObtenerTarea(event) {
  event.preventDefault();
  if (ContenidoInput.value.trim() == "") return; //trim quita los espacios de una cadena de texto//
  const IntanciaTareas = new Actividades(ContenidoInput.value);

  IntanciaTareas.AgregarDOM(ListaTareas);
}

function eliminarTarea(event) {
  Actividades.EliminarTareaDom(event);
}
