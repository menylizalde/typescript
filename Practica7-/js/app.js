
/**
 * =================================
 * Delaracion de Variables
 * =================================
 */

 let RCorrectas;
 let RIncorrectas;
 let RBlanco;
 let Puntuacion;

let button=document.getElementById('btnPuntuacion');
 button.addEventListener('click',Puntos);

 function Puntos(){
     RCorrectas=Number(document.getElementById('inpRCorrectas').value);
     RIncorrectas=Number(document.getElementById('inpRIncorrectas').value);
     RBlanco=Number(document.getElementById('inpRBlanco').value);

     Puntuacion=((4*RCorrectas)+((-1)*RIncorrectas)+((0)*RBlanco));
     let ImprimirPuntaje=document.getElementById('ImprimirPuntaje');
     ImprimirPuntaje.innerText=Puntuacion;

 }
