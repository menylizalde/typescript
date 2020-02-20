const button=document.getElementById('btnConsultar');
button.addEventListener('click', GenerarDescuento);

let Precio;

function GenerarDescuento(){
    let Precio=Number(document.getElementById('inpCostoTraje').value);
    const PrintAlert=document.getElementById('PrintAlert');

    if (Precio > 3600){
        console.log('Descuento de 16%');
        PrintAlert.innerText= `Su descuento es del 16%. Usted Pagara $ ${Precio*0.84} `
    }
    else{
        PrintAlert.innerText=`No Aplica Descuento. Usted Pagara $ ${Precio} `
    }
}