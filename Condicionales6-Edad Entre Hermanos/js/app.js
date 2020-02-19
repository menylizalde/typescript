const button=document.getElementById('btnDifEdad');
button.addEventListener('click', DiferenciaEdades);
let Hermano1;
let EdadH1;
let Hermano2;
let EdadH2;

function DiferenciaEdades(){
    let Hermano1=(document.getElementById('inpNombre1').value);
    let EdadH1=Number(document.getElementById('inpEdad1').value);
    let Hermano2=(document.getElementById('inpNombre2').value);
    let EdadH2=Number(document.getElementById('inpEdad2').value);
    const PrintAlert=document.getElementById('PrintAlert');

    if(EdadH1 > EdadH2){
        console.log('Hermano1 es mayor');
        PrintAlert.innerText=(`${Hermano1} es mayor que ${Hermano2} por ${EdadH1-EdadH2} años`);
    }
    else{
        PrintAlert.innerText=(`${Hermano2} es mayor que ${Hermano1} por ${EdadH2-EdadH1} años`);
        
    }

}
