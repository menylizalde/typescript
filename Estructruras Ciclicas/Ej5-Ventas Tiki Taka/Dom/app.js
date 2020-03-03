function ImprimirVentas(TipodeVenta, TotaldeVentas, MontodeVenta){
    console.log(`Total de Ventas ${TipodeVenta}, ${TotaldeVentas}. Un totalde ${MontodeVenta}`)
    
}
// 1. Obtener las ventas totales
function NumerodeVentas() {
    VentasTotales=prompt('¿Cuantas ventas se realizaron?');
    VentasTotales=Number(VentasTotales);
    return VentasTotales;
}
// 2. Indica cuando la venta es superior a 1000
function venta_mayor_mil(venta){
	if (venta>1000)
		return true;
	else
		return false;
}
// 3. regresa un valor Boleano si la venta es mayor a 500 y menor o igual a 1000    
function Venta_mayor500(venta) {
    return venta>500 && venta<=1000
}

let Cantidad_de_Ventas=NumerodeVentas();
// Para ventas>1000
let venta_mayor=0;
let montos_venta_mayor=0;
// para 1000=>ventas<500
let venta_media=0;
let monto_venta_media=0;
// para venta<500
let venta_chica=0;
let monto_venta_chica=0;
const ListGroup=document.getElementById('ConsultarVentas');

for(let i=0; i<Cantidad_de_Ventas; ++i) {
    let venta_actual=prompt(`Ingresa la venta${i+1}`);
    venta_actual=Number(venta_actual);

    if (venta_mayor_mil(venta_actual)){
        venta_mayor++;
        montos_venta_mayor= montos_venta_mayor+venta_actual;
    }
    else if(Venta_mayor500(venta_actual)){
        venta_media++;
        monto_venta_media=monto_venta_media+venta_actual;
    }
    else{
        venta_chica++;
        monto_venta_chica=monto_venta_chica+venta_actual;
    }
    let li=document.createElement('li');
    li.setAttribute('class', 'list-group-item');
    li.innerText=`Mayores a 100: ${venta_mayor}, Un total de ${montos_venta_mayor}.
    Entre 500 y 100: ${venta_media}, Un Total de ${monto_venta_media}.
    Menores a 500: ${venta_chica}, Un total de ${monto_venta_chica}`;
    ListGroup.appendChild(li);

    // let resultado=`VENTAS
    // Mayores a 100: ${venta_mayor}, Un total de ${montos_venta_mayor}.
    // Entre 500 y 100: ${venta_media}, Un Total de ${monto_venta_media}.
    // Menores a 500: ${venta_chica}, Un total de ${monto_venta_chica}`;

    // const PrintAlert=document.getElementById('PrintAlert');
    // PrintAlert.innerText=resultado
    // ImprimirVentas(`Ventas Mayores a 1000: ${venta_mayor}, ${montos_venta_mayor} `)
    // ImprimirVentas(`Mayor a 500 o igual 1000: ${venta_media}, ${monto_venta_media}`);
    // ImprimirVentas(`Ventas Menores a 500: ${venta_chica}, ${monto_venta_chica}`);

}



