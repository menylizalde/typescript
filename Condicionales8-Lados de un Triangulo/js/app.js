const button=document.getElementById('btnConsultar');
button.addEventListener('click', VerificarTriangulo);

let LadoA;
let LadoB;
let LadoC;

function VerificarTriangulo(){
    let LadoA=Number(document.getElementById('inpLadoA').value);
    let LadoB=Number(document.getElementById('inpLadoB').value);
    let LadoC=Number(document.getElementById('inpLadoC').value);
    const PrintAlert=document.getElementById('PrintAlert');

    /**
     * Operadores Logicos
     * 
     * && Se tiene que cumplir todas las condiciones que divide para poder ser TRUE
     * || con que solo se cumpla una condicion 
     */

    if (LadoA == LadoB && LadoB==LadoC){
        /**Es un Triangulo EQUILATERO */
        PrintAlert.innerText=('Es un triangulo EQUILATERO');
    }
    else if(
    (LadoA==LadoB && LadoB != LadoC) ||	
    (LadoA==LadoC && LadoA != LadoB)||	
    (LadoB==LadoC && LadoB != LadoA)
    ){
        PrintAlert.innerText=('Es un triangulo Escaleno');
    }

    else if (LadoA!=LadoB!=LadoC){
        PrintAlert.innerText=('Es un ISOSELES');
    }
     
}
