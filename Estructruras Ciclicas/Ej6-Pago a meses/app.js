

function EventListener(){
    const button = document.getElementById('btnInit');
    button.addEventListener('click', InitApplitacion); 
}
EventListener()

function InitApplitacion(){
    let acumulador = 5;
    const ListGroup = document.getElementById('ListaPagos');
    for(let i = 1; i <=20; i++){

        let PagoMensual = Number (prompt('¿Numero de Mensualidad?'));
        acumulador=acumulador*2
        console.log(acumulador);
        const li = document.createElement('li'); /*creamos el elemento li, con createElement*/
        li.setAttribute('class', 'list-group-item'); // para dar estilo al li
        li.innerText=`El Pago correspondiente al mes ${i} es ${acumulador}`;
        // para difinir la posicion del li con la propiedad appendChild
        ListGroup.appendChild(li);
    }

    const li=document.createElement('li');
    li.setAttribute('class', 'list-group bg-danger');
    li.innerText=` USTED PAGO UN TOTAL DE: $ ${acumulador}`;
    // imprimir resultado en:
    ListGroup.appendChild(li)
}