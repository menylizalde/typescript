


let X1;
let X2;
let Y1;
let Y2;
let distancia;


let button=document.getElementById('btnDistancia');
button.addEventListener('click',distancia12)

function distancia12(){
    X1=Number(document.getElementById('inpValorX1').value);
    X2=Number(document.getElementById('inpValorX2').value);
    Y1=Number(document.getElementById('inpValorY1').value);
    Y2=Number(document.getElementById('inpValorY2').value);

    distancia= Math.sqrt( Math.pow((X2-X1),2) + Math.pow((Y2-Y1),2) );

    
    let ImprimirDistancia=document.getElementById('ImprimirDistancia');
    ImprimirDistancia.innerText=distancia

}