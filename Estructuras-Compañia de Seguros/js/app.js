const button= document.getElementById('btnConsultar');
button.addEventListener('click', CuotaSeguro);

function CuotaSeguro(){
    let Poliza=Number(document.getElementById('inpTipo').value);
    let Bebida=Number(document.getElementById('inpBebe').value);
    let Lentes=Number(document.getElementById('inpLentes').value);
    let Enfermedad=Number(document.getElementById('inpEnfermedad').value);
    let Edad=Number(document.getElementById('inpEdad').value);
    let CostoPoliza='';
    let CuotaBase='';
    let Cargos='';
    
    if(Poliza==1){
        CuotaBase=1200;
        Cargos=0;
        CostoPoliza=`Cuota Base : $ ${CuotaBase}
        Cargos: $`
    }
    else{
        CuotaBase=950;
        CostoPoliza=`Cuota Base : $ ${CuotaBase}`
        Cargos=0
    }
    if (Bebida==1){
        Cargos=Cargos+CuotaBase*0.1
        CostoPoliza=`Cuota Base: 1200 $ ${Cargos}`
    }
    else



const PrintAlert=document.getElementById('PrintAlert');
PrintAlert.innerText=CostoPoliza;

}