 /**
  * ================================
  * Se Declaran Variables
  * ================================
  */
 let velocidad;
 let tiempo;
 let distancia;


 let button=(document.getElementById('btnDistancia'));
 button.addEventListener('click', CalcularDistancia);

 function CalcularDistancia(){
     velocidad=Number(document.getElementById('inpVelocidad').value);
     tiempo=Number(document.getElementById('inpTiempo').value);

     distancia=(velocidad*tiempo);
     let ImprimirResultado=document.getElementById('ImprimirResultado');
     ImprimirResultado.innerText=distancia;

 }
