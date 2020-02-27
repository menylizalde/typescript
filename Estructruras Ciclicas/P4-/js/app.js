

function EventListener(){
    const button = document.getElementById('btnInit');
    button.addEventListener('click', InitApplitacion); 
}
EventListener()

function InitApplitacion(){
    let acumulador = 0;
    const ListGroup = document.getElementById('ListaAhorro');
    for(let i = 1; i <= 12; i++){

        let Ahorro = Number (prompt('¿Cual es tu ahorro del mes? '));
        acumulador+=Ahorro
        console.log(acumulador);
        const li = document.createElement('li'); /*creamos el elemento li, con createElement*/
        li.setAttribute('class', 'list-group-item'); // para dar estilo al li
        li.innerText=`El dinero ahorrado en el mes ${i} es ${acumulador}`;
        // para difinir la posicion del li con la propiedad appendChild
        ListGroup.appendChild(li);
    }

    const li=document.createElement('li');
    li.setAttribute('class', 'list-group bg-danger');
    li.innerText=` El dinero ahorrado en el año es ${acumulador}`;
    // imprimir resultado en:
    ListGroup.appendChild(li)


}