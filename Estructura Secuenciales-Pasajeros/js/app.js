const button=document.getElementById('btnCotizar');
button.addEventListener('click', CotizarViaje);

function CotizarViaje(){
    let CostodelViaje=0;
    const TipoCamion=document.getElementById('inpTipoCamion').value;
    const Kilometros=document.getElementById('inpKilometraje').value;
    const Pasajeros= Number(document.getElementById('inpPasajeros').value);
    let impCostoViaje=''

    if(TipoCamion=='A'){
        CostodelViaje=(Kilometros*1.5);
        console.log(CostodelViaje);

    }
    else if(TipoCamion=='B'){
        CostodelViaje=(ilometros*2);
    }
        else if(TipoCamion=='C'){
            CostodelViaje=(Kilometros*2.5);
    }
        else if(TipoCamion=='D'){
            CostodelViaje=(Kilometros*3);
    }
    
    if (Pasajeros<21){
        impCostoViaje=`El Costo del Viaje es de: $${CostodelViaje} y el costo por pasajero es de:  $${CostodelViaje/20}`
    }
    else{
        impCostoViaje=`El Costo por Pasajero: ${CostodelViaje/Pasajeros}`
    }

    const PrintAlert=document.getElementById('PrintAlert');
    PrintAlert.innerText=impCostoViaje;
    



}