const button=document.getElementById('btnCotizar');
button.addEventListener('click', CotizarViaje);

function CotizarViaje(){
    let CostodelViaje=0;
    const Destino=Number(document.getElementById('inpDestino').value);
    const Kilometros=Number(document.getElementById('inpCostoKm').value);
    
    if(Destino=='1'){
        CostodelViaje= `El Costo del Viaje Redondo es de: $${(Kilometros*1500)} `;
    

    }
    if(Destino=='2'){
        CostodelViaje=`El Costo del Viaje Redondo es de: $${(Kilometros*1600)} `;
        console.log('Presio del Viaje');

    }
    if(Destino=='3'){
        CostodelViaje=`El Costo del Viaje Redondo es de: $${(Kilometros*2400)} `;
        console.log('Presio del Viaje');

    }
    if(Destino=='4'){
        CostodelViaje=`El Costo del Viaje Redondo es de: $${(Kilometros*3600)} `;
        console.log('Presio del Viaje');

    }
    const PrintAlert=document.getElementById('PrintAlert');
    PrintAlert.innerText=CostodelViaje;

}
