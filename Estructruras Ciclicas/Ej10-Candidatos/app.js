EventListener();
function EventListener(){
    const button= document.getElementById('btnIniciar');
    button.addEventListener('click', IniciarAplicacion);

}

function IniciarAplicacion(){
    let NumeroCandidatos=Number(prompt('Ingresar Numero de Candidatos'));

    let acumulador=0; 
     
    for(let i = 1; i<=NumeroCandidatos; i++){
        let Votos=Number(prompt(`Cantidad de Votos del Candidato ${i}:`));
        const ListGroup = document.getElementById('Resultados');
        console.log(`El Candidato ${i} obtuvo ${Votos}.`)
        acumulador+=Votos;
        
        let resultado=acumulador;
        const li = document.createElement('li'); /*creamos el elemento li, con createElement*/
        li.setAttribute('class', 'list-group-item'); // para dar estilo al li
        li.innerText=`El Candidato ${i} obtuvo ${resultado} votos. Total ${(i%Votos)*100} %`;
        // para difinir la posicion del li con la propiedad appendChild
        ListGroup.appendChild(li);
    }
    const li=document.createElement('li');
    li.setAttribute('class', 'list-group bg-danger');
    li.innerText=` El dinero ahorrado en el año es ${acumulador}. Total ${i/Votos}`;
    ListGroup.appendChild(li)


}