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

    if (LadoA < (LadoB+LadoC)){
        PrintAlert.innerText=('Es un Triangulo Equilatero');
    }
    else{
        PrintAlert.innerText=('No es un Triangulo');
    }

    if (LadoB < (LadoA+LadoC)){
        PrintAlert.innerText=('Es un Triangulo');
    }
    else{
        PrintAlert.innerText=('No es un Triangulo');
    }

    if (LadoC < (LadoA+LadoB)){
        PrintAlert.innerText=('Es un Triangulo');
    }
    else{
        PrintAlert.innerText=('No es un Triangulo');
    }
    



}
