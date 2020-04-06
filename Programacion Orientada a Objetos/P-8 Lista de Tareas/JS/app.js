const ContenidoActividad = document.querySelector("#txActividad");
const ListaTareas = document.querySelector("#lista-tareas");

eventListener();

function eventListener(){
    document
    .querySelector("#Formulario")
    .addEventListener("submit", AddActividad);

    ListaTareas.addEventListener("click", cargarTarea);
}

function AddActividad(event){
    if(ContenidoActividad.value)
}