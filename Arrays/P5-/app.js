EventListener();

let ArregloNumerosPrimosGlobal = [];

function FillArrayGlobal() {

    for (let i = 0; i < 1000; i++) {
        let bandera = true;

    for (let y = 2; y < i; y++) {
      if (i % y == 0) {
        bandera = false;
        break;
      }
    }

    if (bandera) {
      ArregloNumerosPrimosGlobal.push(i);
    }
  }
  console.log(ArregloNumerosPrimosGlobal);
}

function EventListener() {
  document.addEventListener("DOMContentLoaded", FillArrayGlobal);
  document.getElementById("TamanoArray").addEventListener("keypress", InitApp);
}
function InitApp(event) {
  if (event.key != "Enter") return;
  if (event.target.value == "") return;
  if (isNaN(event.target.value)) return;

  fillArray(event.target.value);
}

function fillArray(TamanoArray) {
  let numeroAleatorio = 0;
  let ArregloNumerosPrimos = [];


  const listGroup=document.getElementById('PrintZone')
  let suma=0;
  for (let i = 0; i < TamanoArray; i++) {

      
      let numeroAleatorio =Math.floor(Math.random() * (ArregloNumerosPrimosGlobal.length - 1)) + 1;
      //   console.log(numeroAleatorio);
      
      ArregloNumerosPrimos.push(ArregloNumerosPrimosGlobal[numeroAleatorio]);
      suma+=ArregloNumerosPrimos[i];

    const li = document.createElement('li');
            li.setAttribute('class', 'list-group-item');
            listGroup.appendChild(li);
            
            li.innerText = `arreglo index ${i} : ${ArregloNumerosPrimos[i]}`;
        }
        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');
        listGroup.appendChild(li);
        
        li.innerText = `la suma es : ${suma}`;
    
        
    }
