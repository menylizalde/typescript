eventListener();
let ArregloA=[];
let ArregloB=[];
let ArregloC=[];


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
    

    for(let i=0; i<TamanoArray; i++){
        let sumar;
        ArregloA[i]=Math.floor(Math.random()*(101-(-100))+(-100));
        
        ArregloB[i]=Math.floor(Math.random()*(101-(-100))+(-100));
        
    }
    console.log(`Este es el Arreglo 1 ${ArregloA}`)
    console.log(`Este es el Areglo 2 ${ArregloB}`)
       
    
}
function suma(){
    const listGroup=document.getElementById('PrintZone');
    for (let i=0; i<ArregloA.length; i++){
        
        sumar=ArregloA[i]+ArregloB[i]
        ArregloC[i]=sumar
        //console.log(`Esta es la suma ${sumar}`)
        
        const li = document.createElement("li");
            li.setAttribute('class', 'list-group-item');
            listGroup.appendChild(li);
            li.innerText=`Suma ${ArregloC[i]}`
    }
    
}
// const li=document.createElement("li");
// li.setAttribute('class', 'list-group-item');
// listGroup.appendChild(li);
// li.innerText=`Sumas`


function resta(){
    //A=[1,2,5,-12,10]
    //B=[2,1,4,-3,7]
    //C=A-B -> C=[-1, 1, 1, -15, 3]
    
    for (let i=0; i<ArregloA.length; i++){

        restar=ArregloB[i]-ArregloA[i]
        ArregloC[i]=restar
    }
    console.log(`Esta es la resta ${ArregloC}`)
}


function multiplicar(){
    for (let i=0; i<1; i++){

        multiplica=ArregloB[i]*ArregloA[i]
        console.log(`Esta es la multiplicacion ${multiplica}`)
    }
}



