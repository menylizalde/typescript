let contadorInputs=0;
let arregloPromedio=[];


eventListener()

function eventListener(){
    document.addEventListener('DOMContentLoaded', addEvents)

}

function addEvents(){
    document.getElementById('addInput').addEventListener('click', addInput)
    document.getElementById('CalcularPromedio').addEventListener('click', CalcularPromedio)
}

function addInput(){
    const output = document.getElementById('output');

    const divCol= document.createElement('div');
    divCol.setAttribute("class", "col-12");

    const divFG= document.createElement('div')
    divFG.setAttribute("class", "form-group");

    const label = document.createElement("label");
    label.innerText= `Ingrese Calificacion ${contadorInputs+1}`

    const inputFC=document.createElement('input');
    inputFC.setAttribute('class', 'form-control');
    inputFC.setAttribute('type', 'number');
    inputFC.setAttribute('placeholder', 'Ingrese Valor')
    inputFC.setAttribute('id', `InputPromedio${contadorInputs}`);

    contadorInputs++;

    output.appendChild(divCol);
    divCol.appendChild(divFG);
    divFG.appendChild(label);
    divFG.appendChild(inputFC)

}

function CalcularPromedio(){
    llenarArray();
    console.log(arregloPromedio);
    
    let acumulador=0;
    for (let i = 0; i<contadorInputs; i++){
        acumulador += arregloPromedio[i];
    }
    acumulador /=contadorInputs;

    console.log(acumulador)
}

function llenarArray(){
    for (let x = 0; x< contadorInputs; x++){
        const Valor= document.getElementById(`InputPromedio${x}`).value

        if(!isNaN(Valor)){
            arregloPromedio[x]= Number(Valor);
        }else{
            arregloPromedio[x]=0;

        }
    }
}
