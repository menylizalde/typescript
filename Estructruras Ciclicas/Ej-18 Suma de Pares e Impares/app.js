EventListener();
function EventListener(){
    const button= document.getElementById('btnIniciar');
    button.addEventListener('click', IniciarAplicacion);

}

function IniciarAplicacion(){
    // let Numero=Number(prompt('Ingresa un Numero Entero:'));

    let acumulador=0; 
    const li = document.createElement('li'); /*creamos el elemento li, con createElement*/
    li.setAttribute('class', 'list-group-item'); // para dar estilo al li
     let suma =0
     let pares=0;
     let promedio=0;
    for(let i = 1; i<=3; i++){
        let numero=Number(prompt(`Ingresa el numero entero ${i}:`));
        const ListGroup = document.getElementById('Resultados');
        acumulador=0;

        if(numero%2 !== 0){
            suma = suma + numero
            console.log(suma);
            li.innerText=`La suma de los numeros impares: ${suma} `;
            
        }
        else{
            promedio=suma/numero
            console.log(`${promedio}`)
            li.innerText=`El Promedio de los numeros pares es: ${numero} `;
            
        }
        // para difinir la posicion del li con la propiedad appendChild
        ListGroup.appendChild(li);

    }
}