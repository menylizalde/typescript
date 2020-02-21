const button=document.getElementById('btnTotal');
button.addEventListener('click', TotalEstacionamiento);


function TotalEstacionamiento(){
    let Cuota=0;
    const Horas=Number(document.getElementById('inpHoras').value);
    
    if(Horas<=2){
        Cuota=Horas*5

    }
    else if(Horas>2 && Horas<=5 ){
        Cuota=Horas*4

    }
    else if(Horas>5 && Horas<10){
        Cuota=Horas*3
    }
    else if(Horas>10){
        Cuota=Horas*2
    }

    const PrintAlert=document.getElementById('PrintAlert');
    PrintAlert.innerText=Cuota;




}