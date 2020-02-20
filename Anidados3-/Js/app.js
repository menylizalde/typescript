const button=document.getElementById('btnConsultar');
button.addEventListener('click', ConsultarPresupuesto);

let Personas;

function ConsultarPresupuesto(){
    let Personas=Number(document.getElementById('inpnPersonas').value);
    const PrintAlert=document.getElementById('PrintAlert');
    
    if(Personas<200){
        console.log('costo por personas $95')
        PrintAlert.innerText=`El costo por Persona es de $ 95.00. Precio Total es de $${Personas*95}`
    }
    else if(Personas>= 200 && Personas<300){
        console.log('Costo por persona $85.00')
        PrintAlert.innerText=('Costo por Persona $85.00' )
    }
    else if (Personas>300){
        console.log('Costo por Persona $75.00')
        PrintAlert.innerText=('Costo por Persona $75.00')
    }


}