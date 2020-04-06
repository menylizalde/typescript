eventListener();

const ContenidoInput = document.querySelector("#txActividad");
const ListaTareas = document.querySelector("#lista-tareas");

function eventListener() {
  document
    .querySelector("#Formulario")
    .addEventListener("submit", ObtenerTarea);
}

function ObtenerTarea(event) {
  event.preventDefault();
  const IntanciaTareas = new Actividades(ContenidoInput.value);

  IntanciaTareas.AgregarDOM(ListaTareas);
}
