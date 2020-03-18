EventListener();

function EventListener(){
    document
    .getElementById("TamanoArray")
    .addEventListener("keypress", crearInputs)

}
function crearInputs(event){
    if(event.key=="Enter"){
        
        /**Si isNaN= true quiere decir que no es un numero
         * Si isNAN= False, es un numero
         */
      
        if(isNaN(event.target.value)) return;
        // Event me muestra informacion del evento
        // Target es la informacion que contiene el input
        RellenarArreglo(Number(event.target.value));

    }
}

function RellenarArreglo(TamanoArray){
    let arregloNumeroAleatorios=[];


    for(let i=0; i<TamanoArray; i++){
        
        arregloNumeroAleatorios[i]=Math.floor(Math.random()*(10-1) +1);
        console.log(arregloNumeroAleatorios)
        // propiedad Math.random();
    }
    MostrarValores(arregloNumeroAleatorios);
}

// FUNCION MOSTRAR VALORES
function MostrarValores(ArregloLleno) {
    const listGroup = document.getElementById('PrintZone');
    let suma=0;
    for(let i=0; i<ArregloLleno.length; i++ ){
        suma+=ArregloLleno[i];
        console.log(ArregloLleno[i])
            const li = document.createElement('li');
            li.setAttribute('class', 'list-group-item');
            li.innerText = `La Sumas es ${suma}`;
            listGroup.appendChild(li);
            // console.log(li);
            

    } 

}
