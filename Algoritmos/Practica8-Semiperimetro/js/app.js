

/**
 * =======================
 * SE DECLARAN VARIABLES
 * =======================
 */
/**esto es un triangulo */
 let ladoA;
 let ladoB;
 let ladoC;
 let semiperimetro;

 let button=document.getElementById('btnAreaTriangulo');
 button.addEventListener('click',area)

 function area(){
     ladoA=Number(document.getElementById('inpLadoA').value);
     ladoB=Number(document.getElementById('inpLadoB').value);
     ladoC=Number(document.getElementById('inpLadoC').value);

     semiperimetro=(((ladoA+ladoB+ladoC)));
     let ImprimirArea=document.getElementById('ImprimirArea');
     ImprimirArea.innerText=semiperimetro;

 }

 