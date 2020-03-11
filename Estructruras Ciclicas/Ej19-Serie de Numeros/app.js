EventListener();
function EventListener(){
    const button= document.getElementById('btnIniciar');
    button.addEventListener('click', SerieNumerica);

}

function SerieNumerica(){
    let numero=0;
     
    const ListGroup = document.getElementById('Resultados');
    ListGroup.innerText='';
    const li = document.createElement('li'); /*creamos el elemento li, con createElement*/
    li.setAttribute('class', 'list-group-item'); // para dar estilo al li
    
    for(let i = 5; i<1800; i++){
        if(numero%5==0){
            numero=i+2;
            // console.log(numero)
            console.log(numero)
            li.innerText=`${numero}`;
            ListGroup.appendChild(li);
            
        }
        else{
            numero=numero+3
        }
        
    // li.innerText=N;umeroX+5i
    // para difinir la posicion del li con la propiedad appendChild
    // ListGroup.appendChild(li);
}

 
}
