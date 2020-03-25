eventListener()

function eventListener(){
    document.getElementById('btnCalcular')
    .addEventListener('click', CalcularRecorrido)
}

function CalcularRecorrido(){
    
    let angulo =  Number (document.getElementById('angulo').value);
    let velocidad= Number (document.getElementById('velocidad').value);

    const proyectil = new Proyectil(velocidad, angulo);

    proyectil.crearSpan();
   

}