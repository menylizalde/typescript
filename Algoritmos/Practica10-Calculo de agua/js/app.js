

let Largo;
let Ancho;
let Profundidad;
let preciometr3;
let Costo;


let button=document.getElementById('btnCostoLlenado');
button.addEventListener('click', volumen);

function volumen(){
    Largo=Number(document.getElementById('inpLongitud').value);
    Ancho=Number(document.getElementById('inpAncho').value);
    Profundidad=Number(document.getElementById('inpProfundidad').value);
    preciometr3=Number(document.getElementById('inpPrecio').value);
    

    Costo=(Largo*Ancho*Profundidad*preciometr3);
    let ImprimirCosto=document.getElementById('ImprimirCosto');
    ImprimirCosto.innerText=Costo
    
}