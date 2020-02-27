const button=document.getElementById('btnConsultar');
button.addEventListener('click', Consulta);

function Consulta(){
    let Calificacion=Number(document.getElementById('inpCalificacion').value);
    let Conversion='';
    
    if(Calificacion<='5'){
        Conversion=`Tu Calificacion es F`
    }
    else if(Calificacion==10){
        Conversion=`Tu Calificacion es A`

    }
    else if(Calificacion==9){
        Conversion=`Tu Calificacion es B `

    }
    else if(Calificacion==8){
        Conversion=`Tu Calificacion es C`

    }
    else{
        Conversion=`Tu Calificacion es D`

    }
    const PrintAlert=document.getElementById('PrintAlert');
    PrintAlert.innerText=Conversion

}