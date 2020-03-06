EventListener();
function EventListener(){
    const button= document.getElementById('btnIniciar');
    button.addEventListener('click', IniciarAplicacion);

}

function IniciarAplicacion(){
    let Empresa=Number(prompt('Ingresa el Numero de Empresas'));

    let acumulador=0; 
     
    for(let i = 1; i<=Empresa; i++){
        let clave=Number(prompt(`Ingresa la Clave Empresa ${i}:`));
        const ListGroup = document.getElementById('Resultados');
        acumulador=0;

        for(let j=1; j<=12; j++){
            let produccion=Number(prompt(`Ingresa la Produccion del Mes ${j}`));
            acumulador=acumulador+produccion
            console.log(`Empresa${i} clave ${clave}. Produccion ${acumulador}`)
        }

        if (acumulador>3000000) {
            
        }
        const li = document.createElement('li'); /*creamos el elemento li, con createElement*/
        li.setAttribute('class', 'list-group-item'); // para dar estilo al li
        li.innerText=`Empresa: ${i}. Clave: ${clave}  Produccion: ${acumulador}`;
        // para difinir la posicion del li con la propiedad appendChild
        ListGroup.appendChild(li);

    }
}