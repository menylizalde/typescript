

function EventListener(){
    const button = document.getElementById('btnInit');
    button.addEventListener('click', InitApplitacion); 
}
EventListener()

function InitApplitacion(){
    const ListGroup = document.getElementById('ListaUlam');
    let NumeroX=0;
    let NumeroY=1;
    let itercaciones=Number(prompt('Numero de Iteraciones'))
    for (let i=0; i<=itercaciones; i++){
        let Resultado=NumeroX+NumeroY
        NumeroX=NumeroY
        NumeroY=Resultado
        //Resultado= i+NumeroY;
        //NumeroY ++
        //NumeroY=i;
        //NumeroX=1;
        //Resultado=NumeroY+i   


        

        // console.log(Numero);
        const li = document.createElement('li'); /*creamos el elemento li, con createElement*/
        li.setAttribute('class', 'list-group-item'); // para dar estilo al li
        li.innerText=Resultado;
        // para difinir la posicion del li con la propiedad appendChild
        ListGroup.appendChild(li);
    }
}