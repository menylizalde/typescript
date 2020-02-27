 
 
 let Inch;
 let resultado;

 let button=document.getElementById('btnConvertidor');
 button.addEventListener('click',convertir)

 function convertir(){
     Inch=Number(document.getElementById('inpCantidadInch').value);

     resultado=(Inch*0.0254);
     ImprimirMetros=document.getElementById('ImprimirMetros');
     ImprimirMetros.innerText=resultado
 }

