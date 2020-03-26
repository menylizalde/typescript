"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const triangulo_class_1 = require("./triangulo.class");
eventListener();
function eventListener() {
    document.getElementById('btnCalcular').addEventListener('click', CalcularArea);
}
function CalcularArea() {
    const altura = Number(document.getElementById('Altura').value);
    const base = Number(document.getElementById('Base').value);
    const triangulo = new triangulo_class_1.Triangulo(base, altura);
    console.log(triangulo.area);
}
