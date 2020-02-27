const button= document.getElementById('btnConsultar');
button.addEventListener('click', CuotaSeguro);

function CuotaSeguro(){
    let Poliza=Number(document.getElementById('inpTipo').value);
    let Bebida=Number(document.getElementById('inpBebe').value);
    let Lentes=Number(document.getElementById('inpLentes').value);
    let Enfermedad=Number(document.getElementById('inpEnfermedad').value);
    let Edad=Number(document.getElementById('inpEdad').value);
    let CostoPoliza='';

    if (Poliza=='1' && Bebida=='1' && Lentes=='1' && Enfermedad=='1' && Edad>40){
        CostoPoliza=`El Costo de la Poliza es de: $${1200*1.4}`
    }
    
    else if(Poliza=='1' && Bebida=='2' && Lentes=='1' && Enfermedad=='1' && Edad>40){
        CostoPoliza=`El Costo de la Poliza es de: $${1200*1.3}`
    }
    else if(Poliza=='1' && Bebida=='1' && Lentes=='2' && Enfermedad=='1' && Edad>40){
        CostoPoliza=`El Costo de la Poliza es de: $${1200*1.35}`
    }
    else if(Poliza=='1' && Bebida=='1' && Lentes=='1' && Enfermedad=='2' && Edad>40){
        CostoPoliza=`El Costo de la Poliza es de: $${1200*1.35}`
    }
    else if (Poliza=='1' && Bebida=='1' && Lentes=='1' && Enfermedad=='1' && Edad<40){
        CostoPoliza=`El Costo de la Poliza es de: $${1200*1.3}`
    }
    else if (Poliza=='1' && Bebida=='2' && Lentes=='1' && Enfermedad=='1' && Edad>40){
        CostoPoliza=`El Costo de la Poliza es de: $${1200*1.3}`
    }
    else if (Poliza=='1' && Bebida=='1' && Lentes=='2' && Enfermedad=='1' && Edad>40){
        CostoPoliza=`El Costo de la Poliza es de: $${1200*1.35}`
    }
    else if (Poliza=='1' && Bebida=='1' && Lentes=='1' && Enfermedad=='2' && Edad>40){
        CostoPoliza=`El Costo de la Poliza es de: $${1200*1.35}`
    }
    else if (Poliza=='1' && Bebida=='1' && Lentes=='2' && Enfermedad=='1' && Edad>40){
        CostoPoliza=`El Costo de la Poliza es de: $${1200*1.35}`
    }
    else if (Poliza=='1' && Bebida=='1' && Lentes=='2' && Enfermedad=='1' && Edad<40){
        CostoPoliza=`El Costo de la Poliza es de: $${1200*1.25}`
    }
    else if (Poliza=='1' && Bebida=='2' && Lentes=='1' && Enfermedad=='2' && Edad>40){
        CostoPoliza=`El Costo de la Poliza es de: $${1200*1.35}`
    }
    else if (Poliza=='1' && Bebida=='2' && Lentes=='1' && Enfermedad=='2' && Edad<40){
        CostoPoliza=`El Costo de la Poliza es de: $${1200*1.25}`
    }
    else if (Poliza=='1' && Bebida=='2' && Lentes=='2' && Enfermedad=='2' && Edad<40){
        CostoPoliza=`El Costo de la Poliza es de: $${1200*1.1}`
    }





const PrintAlert=document.getElementById('PrintAlert');
PrintAlert.innerText=CostoPoliza;

}