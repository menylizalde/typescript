
/**
 * ==============================
 * Se declaran Variables
 * ==============================
 */
let matricula;
let materia1;
let materia2;
let materia3;
let materia4;
let materia5;
let promedio;

let button=document.getElementById('btnPromediar');
button.addEventListener('click', promedia);

function promedia(){
    materia1= Number(document.getElementById('materia1').value);
    materia2= Number(document.getElementById('materia2').value);
    materia3= Number(document.getElementById('materia3').value);
    materia4= Number(document.getElementById('materia4').value);
    materia5= Number(document.getElementById('materia5').value);
    matricula=Number(document.getElementById('matricula').value)
    
    promedio= (materia1+materia2+materia3+materia4+materia5)/5;
    let ImprimirResultado=document.getElementById('ImprimirResultado');
    ImprimirResultado.innerText=promedio;

    let ImprimirMatricula= document.getElementById('ImprimirMatricula');
    ImprimirMatricula.innerText=matricula
}
