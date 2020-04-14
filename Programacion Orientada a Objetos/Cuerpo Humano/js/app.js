let img = document.querySelector("#imagen");

let bodyPart = document.querySelector("#ParteCuerpo");

img.addEventListener("click", ParteSeleccionada);

function ParteSeleccionada() {
  bodyPart.style.fontSize = "20px";
  bodyPart.style.color = "red";
  bodyPart.style.fontWeight = "bolder";
}

let PosCursor = document.querySelector(".cursor");
window.addEventListener("mousemove", cursor);
function cursor(event) {
  PosCursor.style.top = event.pageY + "px";
  PosCursor.style.left = event.pageX + "px";

//   console.log(event.pageY + "px");
}

let container = document.getElementById("imagen");

Evento();
function Evento() {
    container.addEventListener("click", Posicion)
}
function Posicion(event) {
  console.log(event);
  const coordenada= new PosicionParte(event.x, event.y);
  coordenada.CrearPosicion(container);
}
