

let ValorA;
let ValorB;
let ValorC;

let button=document.getElementById('btnHipotenusa');
button.addEventListener('click',hipotenusa)

function hipotenusa(){
    ValorA=Number(document.getElementById('inpValorAltura').value);
    ValorB=Number(document.getElementById('inpValorBase').value);

    ValorC= Math.sqrt( Math.pow(ValorA,2)+ Math.pow(ValorB,2));

    let ImprimirHipotenusa=document.getElementById('ImprimirHipotenusa');
    ImprimirHipotenusa.innerText=ValorC


}
