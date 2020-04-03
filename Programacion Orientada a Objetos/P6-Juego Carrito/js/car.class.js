class Car {
  posicionX = 0;
  posicionY = 0;

  constructor(posicionX, posicionY) {
    this.posicionX = posicionX;
    this.posicionY = posicionY;
  }

  MoverCarro(direccion, imagen) {
    switch (direccion) {
      case "ArrowUp":
        imagen.src = "./../assets/arriba.png";
        break;

        case 'ArrowLeft':
            imagen.src = "./../assets/izquierda.png";
            break;
        case 'ArrowRight':
            imagen.src = "./../assets/derecha.png";
            break;
        case 'ArrowDown':
            imagen.src = "./../assets/abajo.png";
            break;
            


    }
  }
}
