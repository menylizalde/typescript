
//     let acumulador=0;
// for(let ValorInicial=1; ValorInicial<=3;ValorInicial++){
//     let NumeroIngresado = Number(prompt('Ingrese el numero'));
    
//     acumulador= acumulador+NumeroIngresado;
// }
// const ZonaImprimir= document.getElementById('output');
// ZonaImprimir.innerText=acumulador;

function crearDom(){
    const output= document.getElementById('output');
    // Crear Elemento de HTML por Medio de JAVASCRIPT en const div=document.createElement('div')
    
    for(x=1;x<=5;x++){
        // Crear el Div
        const div=document.createElement('div')
        div.classList.add('from-group');
        // crear el Label
        const label= document.createElement('label');
        label.innerText= `Ingresa el Numero ${x}`
        // crear el input
        const input =document.createElement('input')
        // dar Formato al input por medio de input.setAttribute
        input.setAttribute('type', 'number');
        input.setAttribute('class', 'form-control');
        input.setAttribute('id', 'inpNumero1');
        // 
        output.appendChild(div);
        div.appendChild(label);
        div.appendChild(input);

    }
}
crearDom();