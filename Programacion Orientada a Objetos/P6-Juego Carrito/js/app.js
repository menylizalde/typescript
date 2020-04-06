const imagen = document.getElementById("Carrito");
let SizeMarginLeft = 0;

const carro = new Car(0, 0);

let PosicionImagenes = [];

const contenedor = document.getElementById("contenedor");

EventListener();

function EventListener() {
  ObtenerMargin();
  document.addEventListener("keydown", moveCar);
  contenedor.addEventListener("click", PonerPremio);
  window.addEventListener("resize", ObtenerMargin);
}

function moveCar(event) {
  carro.MoverCarro(event.key, imagen);
  const response= carro.VerificarColision(PosicionImagenes);

  if(response!=null){
    Premios.EliminarPremio(contenedor, PosicionImagenes[response].id);
    PosicionImagenes.splice(response, 1);
  }
}

function PonerPremio(event) {
  const premio = new Premios(event.x, event.y);

  PosicionImagenes.push(premio.CrearImagen(contenedor, SizeMarginLeft));
  console.log(PosicionImagenes);
}

function ObtenerMargin() {
  const MarginContainer = window
    .getComputedStyle(contenedor)
    .getPropertyValue("margin-left");

  SizeMarginLeft = MarginContainer.substring(0, MarginContainer.length - 2);
}
