const button=document.getElementById('btnUtilidad');
button.addEventListener('click', CalculoUtilidad);
let Lunes;
let Martes;
let Miercoles;
let Jueves;
let Viernes;
let Sabado;
let Total;
function CalculoUtilidad(){
    let Lunes=Number(document.getElementById('inpLunes').value);
    let Martes=Number(document.getElementById('inpMartes').value);
    let Miercoles=Number(document.getElementById('inpMiercoles').value);
    let Jueves=Number(document.getElementById('inpJueves').value);
    let Viernes=Number(document.getElementById('inpViernes').value);
    let Sabado=Number(document.getElementById('inpSabado').value);
    const PrintAlert=document.getElementById('PrintAlert');

    if((Lunes+Martes+Miercoles+Jueves+Viernes+Sabado) >= 100){
        console.log('SI SE GENERO UTILIDAD');
        PrintAlert.innerText=('SI SE GENERARON INCENTIVOS');
    }
    else{
        PrintAlert.innerText=('NO SE GENERARON INCENTIVOS');

    }


}
