const button=document.getElementById('btnCalcular');
button.addEventListener('click',CalculoDescuento);
let ValorCompra;
let Descuento;

function CalculoDescuento(){
    let ValorCompra=Number(document.getElementById('inpValorCompra').value);
    let Descuento=Number(document.getElementById('inpDescuento').value);
        const PrintAlert=document.getElementById('PrintAlert');

   

    if (ValorCompra <=1000){
        console.log('No Aplica Descuento');
        PrintAlert.innerText=('No Aplica Descuento')
    }
     else{
         console.log('Su descuento es de:' + ValorCompra*.2;
         PrintAlert.innerText=('Su Descuento es de: ' + ValorCompra*.2);
     }


}