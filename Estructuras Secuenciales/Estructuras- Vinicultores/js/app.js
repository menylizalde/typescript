const button=document.getElementById('btnConsultar');
button.addEventListener('click', PagoUva);

function PagoUva(){
    let PrecioInicial=Number(document.getElementById('inpPrecioVenta').value);
    let Cantidad=Number(document.getElementById('inpCantidad').value);
    let Tipo=Number(document.getElementById('inpTipo').value);
    let Tamaño=Number(document.getElementById('inpTamaño').value);
    let PrecioReal='';

    if (Tamaño=='1' && Tipo=='1'){
        PrecioReal=`EL PAGO TOTAL POR LA VENTA ES DE: $${(Cantidad*(PrecioInicial+0.20))}`

    }
    if (Tamaño=='2' && Tipo=='1'){
        PrecioReal=`EL PAGO TOTAL POR LA VENTA ES DE: $${(Cantidad*(PrecioInicial+0.30))}`

    }
    else if(Tamaño=='1' && Tipo=='2'){
        PrecioReal=`EL PAGO TOTAL POR LA VENTA ES DE: $${(Cantidad*(PrecioInicial-0.30))}`
    }
    else if(Tamaño=='2' && Tipo=='2'){
        PrecioReal=`EL PAGO TOTAL POR LA VENTA ES DE: $${(Cantidad*(PrecioInicial-0.50))}`
    }
    const PrintAlert=document.getElementById('PrintAlert');
    PrintAlert.innerText=PrecioReal;

}