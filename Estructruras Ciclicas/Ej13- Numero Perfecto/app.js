EventListener();
function EventListener(){
    const button= document.getElementById('btnIniciar');
    button.addEventListener('click', IniciarAplicacion);

}

function IniciarAplicacion(){
    let numero=Number(prompt('Ingresa un Numero'));
    let divisor=0;

    let acumulador=0; 
     
    const ListGroup = document.getElementById('Resultados');
    ListGroup.innerText='';
    const li = document.createElement('li'); /*creamos el elemento li, con createElement*/
    li.setAttribute('class', 'list-group-item'); // para dar estilo al li
    
    for(let i = 1; i<numero; i++){
        
        if (numero % i == 0) {
            divisor+=i         
            
            console.log(numero, divisor)
        }
    

}
if(divisor==numero){
    
    li.innerText=`El Numero ${numero} ES NUMERO PERFECTO`;
    // para difinir la posicion del li con la propiedad appendChild
    ListGroup.appendChild(li);

}
else{
    li.innerText=`El Numero ${numero} NO ES NUMERO PERFECTO`;
    // para difinir la posicion del li con la propiedad appendChild
    ListGroup.appendChild(li);

}
 
}
