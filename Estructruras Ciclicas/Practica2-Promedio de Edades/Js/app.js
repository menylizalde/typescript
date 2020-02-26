EventListener();
function EventListener(){
    const button= document.getElementById('btnIniciar');
    button.addEventListener('click', IniciarAplicacion);

}

function IniciarAplicacion(){
    let NumeroAlumnos=Number(prompt('¿Cuantos alumnos son?'));

    let acumulador=0;    
    for(let i = 1; i <= NumeroAlumnos ; i++){
        let edad=Number(prompt(`Ingrese la Edad del Alumno ${i}`));
        // acumulador = acumulador + edad
        acumulador+=edad;
    }
    let resultado= acumulador/ NumeroAlumnos;
    const PrintAlert= document.getElementById('PrintAlert');
    PrintAlert.innerText=resultado;


}