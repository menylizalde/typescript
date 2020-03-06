EventListener();
function EventListener(){
    const button= document.getElementById('btnIniciar');
    button.addEventListener('click', IniciarAplicacion);

}

function IniciarAplicacion(){
    let numero=Number(prompt('Ingresa un Numero'));
    let divisor=0;

    let acumulador=0; 
     
    for(let i = 1; i<numero; i++){
        
        // let =Number(prompt(`Ingresa la Clave Empresa ${i}:`));
        const ListGroup = document.getElementById('Resultados');
        // console.log(`Empresa${i} clave ${clave}.`)
        // acumulador+=clave;
    
        if (numero % i == 0) {
            divisor+=i         
            
        }
        if(numero==divisor){
            const li = document.createElement('li'); /*creamos el elemento li, con createElement*/
            li.setAttribute('class', 'list-group-item'); // para dar estilo al li
            li.innerText=`El Numero ${numero} es Perfecto`;
            // para difinir la posicion del li con la propiedad appendChild
            ListGroup.appendChild(li);
        }
        else{
            const li = document.createElement('li'); /*creamos el elemento li, con createElement*/
            li.setAttribute('class', 'list-group-item'); // para dar estilo al li
            li.innerText=`El Numero ${numero} NO es Perfecto`;
            // para difinir la posicion del li con la propiedad appendChild
            ListGroup.appendChild(li);
        }
    }
}