

function EventListener(){
    const button = document.getElementById('btnInit');
    button.addEventListener('click', InitApplitacion); 
}
EventListener()

function InitApplitacion(){
    const ListGroup = document.getElementById('ListaUlam');
    let elementos=1;
    let primos=0;
    let Ingreso=Number(prompt('Ingrese el Numero'));
    
    for(let i=2; i<=elementos; i++){
        console.log(numero par)
    }




    // for (let i=0; i<=itercaciones; i++){
    //     let Resultado=NumeroX+NumeroY
    //     NumeroX=NumeroY
    //     NumeroY=Resultado


    //     if(itercaciones==Resultado){
    //        console.log(`${itercaciones} pertenece a la Serie.`) 
    //        const li=document.createElement('li');
    //        li.setAttribute('class', 'list-group-item');
    //        li.innerText=`EL NUMERO ${itercaciones} SI PERTENECE A LA SERIE. ASI COMO ${itercaciones-NumeroX} Y ${itercaciones+NumeroX}`;
    //        // imprimir resultado en:
    //        ListGroup.appendChild(li)


    //     }
    //     else  if(itercaciones!==Resultado){
    //         // console.log(`${itercaciones} no pertenece a la Serie`)
    //         const li=document.createElement('li');
    //        li.setAttribute('class', 'list-group-item');
    //        li.innerText=`${itercaciones} NO PERTENECE A LA SERIE`
    //        ListGroup.appendChild(li)            
    //     }
    //     // const li = document.createElement('li'); /*creamos el elemento li, con createElement*/
    //     // li.setAttribute('class', 'list-group-item'); // para dar estilo al li
    //     // li.innerText=Resultado;
    //     // // para difinir la posicion del li con la propiedad appendChild
    //     // ListGroup.appendChild(li);
    // }
}