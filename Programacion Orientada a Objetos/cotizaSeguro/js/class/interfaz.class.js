class Interfaz {
  mostrarMensaje(mensaje, tipo) {
    const div = document.createElement("div");

    if (tipo == "error") {
      div.classList.add("mensaje", "error");
    } else {
      div.classList.add("mensaje", "correcto");
    }

    div.innerHTML = `${mensaje}`;

    // para insertar el ALERT con el mensaje de faltan datos
    document
      .querySelector("#cotizar-seguro")
      .insertBefore(div, document.querySelector(".form-group"));

    //  setTimeout  es un  temporizador que ejecuta una funcion despues de cierto tiemp. SetTimeout elimina el alert despues de 5 segundos

    setTimeout(function () {
      document.querySelector(".mensaje").remove();
    }, 5000);
  }

  //   metodo para poder mostrrar el resultado
  mostrarResultado(seguro, total) {
    const resultado = document.getElementById("resultado");

    let marca = "";

    switch (seguro.marca) {
      case "1":
        marca = "Americano";
        break;
      case "2":
        marca = "Asiatico";
        break;
      case "3":
        marca = "Europeo";
        break;
    }

    // Creamos el elemnto que va a contener el resultado
    const div = document.createElement("div");
    div.innerHTML = `
    <p class="header"> Cotizacion:</p>
    <p>Marca: ${marca}</p>
    <p>Año: ${seguro.anio}</p>
    <p>Tipo: ${seguro.tipo}</p>
    <p>Total: ${total}</p>
    `;

    // para cargar la imagen que simula el loading
    const spinner = document.querySelector("#cargando img");
    spinner.style.display = "block";
    // para quitar el spinner
    setTimeout(function () {
      spinner.style.display = "none";
      resultado.appendChild(div);
    }, 5000);
  }
}
