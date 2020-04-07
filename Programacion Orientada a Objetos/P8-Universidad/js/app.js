const tablaCarrito = document.querySelector("#lista-carrito tbody");

eventListener();

function eventListener() {
  document
    .querySelector("#lista-cursos")
    .addEventListener("click", GuardarCursoCarrito);

  iniciarCarrito();
}

function GuardarCursoCarrito(event) {
  event.preventDefault();

  if (event.target.classList.value.search("agregar-carrito") == -1) return;
  const curso = event.target.parentElement.parentElement;

  const informacioncurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
  };

  const carrito = new Carrito();

  carrito.AgregarCursoCarrito(informacioncurso, tablaCarrito, true);
}

function iniciarCarrito() {
  const cursosLs = LocalStorageManipular.ObtenerCursoLocalStorage();

  for (let i = 0; i < cursosLs, length; i++) {
    const carrito = new Carrito();
    carrito.AgregarCursoCarrito(cursosLs[i], tablaCarrito, false);
  }
}
