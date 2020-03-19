eventListener();
let ArregloA=[];
let ArregloB=[];


function eventListener(){
    document.addEventListener('DOMContentLoaded', addEvents)
    // document
    // .getElementById('TamanoArray')
    // .addEventListener('keypress', NumerosAleatios)
}
function addEvents(){

    document.getElementById('TamanoArray').addEventListener('keypress', NumerosAleatios)
    document.getElementById('suma').addEventListener('click', suma);
    document.getElementById('resta').addEventListener('click', resta);
    document.getElementById('multiplicacion').addEventListener('click', multiplicar);
}

function NumerosAleatios(event){
    if(event.key=="Enter"){
        // Si isNaN= TRUE quiere decir que no es un numero
        // Si isNaN= FALSE, es un numero
        if(isNaN(event.target.value)) return;
        // event, muestra la informacion del evento
        // target es la informacion que contiene el Input
        console.log(event.target)
        RellenarArreglo(Number(event.target.value));
    }
}


function RellenarArreglo(TamanoArray){
    


    for(let i=0; i<1; i++){
        let sumar;
        ArregloA[i]=Math.floor(Math.random()*(101-(-100))+(-100));
        console.log(`Este es el Arreglo 1 ${ArregloA[i]}`)

        ArregloB[i]=Math.floor(Math.random()*(101-(-100))+(-100));
        console.log(`Este es el Areglo 2 ${ArregloB}`)

    }
       
    
}
function suma(){
    const listGroup=document.getElementById('PrintZone');
    for (let i=0; i<1; i++){
        
        sumar=ArregloA[i]+ArregloB[i]
        console.log(`Esta es la suma ${sumar}`)
        
        const li = document.createElement("li");
            li.setAttribute('class', 'list-group-item');
            listGroup.appendChild(li);
            li.innerText=`Suma ${sumar}`
    }
    
}
// const li=document.createElement("li");
// li.setAttribute('class', 'list-group-item');
// listGroup.appendChild(li);
// li.innerText=`Sumas`


function resta(){
    for (let i=0; i<1; i++){

        restar=ArregloB[i]-ArregloA[i]
        console.log(`Esta es la resta ${restar}`)
    }
}


function multiplicar(){
    for (let i=0; i<1; i++){

        multiplica=ArregloB[i]*ArregloA[i]
        console.log(`Esta es la multiplicacion ${multiplica}`)
    }
}



