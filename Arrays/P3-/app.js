let Print=document.getElementById('PrintZone')
const output= document.getElementById("output")
function eventListener(){
    document.getElementById('MostrarInputs').addEventListener('click', mostrarInputs);
}
eventListener();
// Creamos Inputs
function mostrarInputs(){
    const NumeroInputs=Number(document.getElementById('NumeroInputs').value);
    
    if (NumeroInputs>1000 || NumeroInputs<0){
        return
    }
    EliminarElementos();
    
        const row= document.createElement('div');
        row.setAttribute("clas", "row")

        for(let i=0; i<NumeroInputs; i++){
            const divCol=document.createElement("div");
            divCol.setAttribute("class", "col-12");

            const divFG=document.createElement("div");
            divFG.setAttribute('class', 'form-group')

            const label=document.createElement('label');
            label.innerText=`Ingrese numero a guardar en el arreglo`;

            const input= document.createElement('input');
            input.setAttribute('type', 'number');
            input.setAttribute('id', `valorInput${i}`);
            input.setAttribute("class", "form-control");
            
            row.appendChild(divCol);
            divCol.appendChild(divFG);
            divFG.appendChild(label);
            divFG.appendChild(input);            
        }
        output.appendChild(row);

        const buttonObtenerResultado= document.createElement("button");
        buttonObtenerResultado.setAttribute('class', 'btn btn-outline-success btn-block');
        buttonObtenerResultado.setAttribute('id', 'BtnCalcularResultado');
        buttonObtenerResultado.innerText='Resultado';
        row.appendChild(buttonObtenerResultado);

        document.getElementById('BtnCalcularResultado').addEventListener('click', RealizarComparacion)
}
let arreglo1=[];

function RealizarComparacion(){
    const NumeroInputs=document.getElementsByTagName('input');

    let acumulador=0;
    for(let x=0; x<NumeroInputs.length ;x++){
        acumulador+= Number(NumeroInputs[x].value);

        for(let y=x+1; y<NumeroInputs.length;y++){
            if(NumeroInputs[x].value==NumeroInputs[y].value){
                NumeroInputs[y].value=""
            }
        }

        MostrarDatos(NumeroInputs);

    }

    
}
// Para quitar boton de iniciar aplicacion y desplegar inputs
function EliminarElementos(){
    while(output.firstChild){
        output.firstChild.remove();
    }
}

function MostrarDatos(NumeroInputsArreglo){
let strPrint = ''
    for(let x=0; x<NumeroInputsArreglo.length; x++){
        if(NumeroInputsArreglo[x].value != ""){
            strPrint +=`${NumeroInputsArreglo[x].value}   `
        }
    }
Print.innerText = strPrint 
}