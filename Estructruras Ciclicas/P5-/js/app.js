

function eventListener(){
    const button = document.getElementById('btnInit');
    button.addEventListener('click', initApplication);
    
}
eventListener()
function initApplication(){
    const cantidades= Number(prompt('¿Cuantos Numeros a Evaluar?'));
    let acumuladoresMenores=0;
    let acumuladoresMayores=0;
    for(let x=0; x<cantidades; x++ ){
        let Numero= Number(prompt('Numero a evaluar'))
        
        if(Numero<=0){
            acumuladoresMenores++
        } else{
            acumuladoresMayores++
        }
    }
}