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
        if (this.posicionY <= 0) return;
        imagen.src = "./../assets/arriba.png";
        imagen.style.top = `${(this.posicionY -= 10)}px`;
        break;
      case "ArrowLeft":
        if (this.posicionX <= 0) return;
        imagen.src = "./../assets/izquierda.png";
        imagen.style.left = `${(this.posicionX -= 10)}px`;
        break;
      case "ArrowRight":
        if (this.posicionX >= 900) return;
        imagen.src = "./../assets/derecha.png";
        imagen.style.left = `${(this.posicionX += 10)}px`;
        break;
      case "ArrowDown":
        if (this.posicionY >= 550) return;
        imagen.src = "./../assets/abajo.png";
        imagen.style.top = `${(this.posicionY += 10)}px`;
        break;
    }
    
  }

  VerificarColision(PosicionesCaquitas = []) {
    console.log(this.posicionX, this.posicionY);

    for (let i = 0; i < PosicionesCaquitas.length; i++) {
      if (
        this.posicionX >= PosicionesCaquitas[i].styleLeft &&
        this.posicionX <= PosicionesCaquitas[i].styleLeftMax &&
        this.posicionY >= PosicionesCaquitas[i].styleTop &&
        this.posicionY <= PosicionesCaquitas[i].styleTopMax
      ) {
        return i;
      }
    }
    return null;
  }
}
