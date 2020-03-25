const NumArrays= document.getElementById('inpNumeroArray');
eventListener()



function eventListener(){
    document.getElementById('inpNumeroArray').addEventListener('click', mostrarInputs);
    
}

function mostrarInputs(){
    const entradas= Number(document.getElementById('inpNumeroArray').value);

    if(entradas > 1000 || entradas <= 0) return;

    eliminarElementos();
    const row= document.createElement('div');
    row.setAttribute('class', 'row');

    for(let i = 0;i<entradas; i++){
        
        const divCol= document.createElement('div');
        divCol.setAttribute('class', 'col-12');

        const divFG= document.createElement('div');
        divFG.setAttribute('class', 'form-group');

        const label= document.createElement('div');
        label.innerText=`Ingrese el numero ${i}`

        const input= document.createElement('input');
        input.setAttribute('type', 'number');
        input.setAttribute('id', `valorInput${i}`);
        input.setAttribute('clas', 'form-control');

        row.appendChild(divCol);
        divCol.appendChild(divFG)
        divFG.appendChild(label)
        divFG.appendChild(input)
    }
    NumArrays.appendChild(row)

    const buttonObtenerResultado = document.createElement("button");
    buttonObtenerResultado.setAttribute('class', 'btn btn-outline-success btn-block');
    buttonObtenerResultado.setAttribute('id', 'btnCalcularResultado');
    buttonObtenerResultado.innerText = "Obtener resultado";

    row.appendChild(buttonObtenerResultado);

    document.getElementById('btnCalcularResultado').addEventListener('click', RealizarComparación);

}

function RealizarComparación() {

    const numeroInputs = document.getElementsByTagName('input');//tagname es para llamar todos los elementos que cumplan con ser input


    let acumulador = 0;
    for (let x = 0; x < numeroInputs.length; x++)//length es la longitud del index
    {

        for (let y = x + 1; y < numeroInputs.length; y++) {
            if (numeroInputs[x].value == numeroInputs[y].value) {
                numeroInputs[y].value = " ";
            }
        }

        // acumulador += Number(numeroInputs[x].value);
        console.log(numeroInputs[x].value);
    }

    mostrarDatos(numeroInputs);


}

function eliminarElementos() {

    while (output.firstChild) {

        output.firstChild.remove();
    }
}
let Print=document.getElementById('zonaPrint');
function mostrarDatos(numeroInputsArreglo) {
    let strPrint='';
    for(let x=0;x<numeroInputsArreglo.length;x++){
        if(numeroInputsArreglo[x]!=" "){ 
            strPrint+=`${numeroInputsArreglo[x].value}`;

        }
    }
    Print.innertext=strPrint;
}