class PosicionParte {
  PosicionX = 0;
  PosicionY = 0;

  constructor(PosicionX, PosicionY) {
    this.PosicionX = PosicionX;
    this.PosicionY = PosicionY;
  }
  CrearPosicion(container) {
    img.style.left = `${this.PosicionX} px`;
    img.style.top = `${this.PosicionY} px`;

    if (
      this.PosicionY >= 79 &&
      this.PosicionY <= 175 &&
      this.PosicionX >= 366 &&
      this.PosicionX <= 430
    ) {
      bodyPart.innerHTML = "Esta es la CABEZA de Flash";
    }
    if (
      this.PosicionY >= 180 &&
      this.PosicionY <= 204 &&
      this.PosicionX >= 360 &&
      this.PosicionX <= 446
    ) {
      bodyPart.innerHTML = "Este es el CUELLO de Flash";
    }
    if (
      this.PosicionY >= 206 &&
      this.PosicionY <= 270 &&
      this.PosicionX >= 330 &&
      this.PosicionX <= 460
    ) {
      bodyPart.innerHTML = "Este es el PECTORAL de Flash";
    }
    if (
      this.PosicionY >= 270 &&
      this.PosicionY <= 390 &&
      this.PosicionX >= 340 &&
      this.PosicionX <= 460
    ) {
      bodyPart.innerHTML = "Este es el ABDOMEN de Flash";
    }
    if (
      this.PosicionY >= 440 &&
      this.PosicionY <= 720 &&
      this.PosicionX >= 280 &&
      this.PosicionX <= 390
    ) {
      bodyPart.innerHTML = "Esta es la PIERNA IZQUIERDA de Flash";
    }
    if (
      this.PosicionY >= 470 &&
      this.PosicionY <= 713 &&
      this.PosicionX >= 415 &&
      this.PosicionX <= 485
    ) {
      bodyPart.innerHTML = "Esta es la PIERNA DERECHA de Flash";
    }
    if (
      this.PosicionY >= 820 &&
      this.PosicionY <= 870 &&
      this.PosicionX >= 440 &&
      this.PosicionX <= 560
    ) {
      bodyPart.innerHTML = "Esta es la PIE DERECHO de Flash";
    }
  }
}
