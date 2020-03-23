eventListener();
let Palabras = [];
let Vocales = [];
let zonePrint = document.getElementById("zonePrint");

function eventListener() {
  document.addEventListener("keypress", addEvent);

  document.getElementById("initApp").addEventListener("click", InitApp);
}

function addEvent(event) {
  //retorna la funcion cuando se presiona algo diferente a Enter
  if (event.key != "Enter") return;
  //si se teclea Enter y el input esta vacio retorna la funcion
  if (event.target.value == "") return;

  agregarArray(event.target.value);
  event.target.value = "";
}

function agregarArray(NewWord) {
  Palabras.push(NewWord);
}

function InitApp() {
  // console.log(Palabras);

  Print(Palabras, "primary", "Array Original");
  for (let i = 0; i < Palabras.length; i++) {
    let primerLetra = Palabras[i].charAt(0);
    if (
      primerLetra == "a" ||
      primerLetra == "e" ||
      primerLetra == "i" ||
      primerLetra == "o" ||
      primerLetra == "u"
    ) {
      Vocales.push(Palabras[i]);
    }
  }

  Print(Vocales, "danger", "Array Vocales");
}

//funcion parametrizada para imprimir un array

function Print(array, clase, tipo) {
  let alert = document.createElement("div");
  alert.classList.add("mt-3", "alert", `alert-${clase}`);
  alert.innerText = `${tipo} = [${array}]`;
  zonePrint.appendChild(alert);
}
//Método .charAt()
//Función parametrizada para imprimir (ahorrar lineas de codigo)
