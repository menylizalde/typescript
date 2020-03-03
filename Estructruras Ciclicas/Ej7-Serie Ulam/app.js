

function EventListener(){
    const button = document.getElementById('btnInit');
    button.addEventListener('click', InitApplitacion); 
}
EventListener()

function InitApplitacion(){
    const ListGroup = document.getElementById('ListaUlam');
    let Numero=0;
    Numero=Number(prompt('Ingrese un Numero'));
    while(Numero!=1){
        if(Numero %2==0){
            Numero=Numero/2
            
        }
        else{
            Numero=(Numero*3)+1
            
        }
        console.log(Numero);
        const li = document.createElement('li'); /*creamos el elemento li, con createElement*/
        li.setAttribute('class', 'list-group-item'); // para dar estilo al li
        li.innerText=Numero;
        // para difinir la posicion del li con la propiedad appendChild
        ListGroup.appendChild(li);
    }
}