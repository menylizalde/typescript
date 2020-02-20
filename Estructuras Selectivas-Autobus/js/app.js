const button=document.getElementById('btnAumento');
button.addEventListener('click', CalcularAumento);

function CalcularAumento(){
    
    let ResultadoConAumento=0;
    const TipoTarjeta=document.getElementById('inpTipoTarjeta').value;
    const CreditoActual=document.getElementById('inpCreditoActual').value;

    if(TipoTarjeta=='1'){
        ResultadoConAumento=CreditoActual*1.25

    }
    else if(TipoTarjeta=='2'){
        ResultadoConAumento=CreditoActual*1.35

    }
    else if(TipoTarjeta=='3'){
        ResultadoConAumento=CreditoActual*1.4

    }
    else{
        ResultadoConAumento=CreditoActual*1.5

    }
    const PrintAlert=document.getElementById('PrintAlert');
    PrintAlert.innerText=ResultadoConAumento;
    

}
