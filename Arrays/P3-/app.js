function eventListener(){
    document.getElementById('MostrarInputs').addEventListener('click', mostrarInputs);
}
eventListener();
// Creamos Inputs
function mostrarInputs(){
    const NumeroInputs=Number(document.getElementById('NumeroInputs').value);

    if(NumeroInputs>0){
        const row= document.createElement('div');
        row.setAttribute("clas", "row")
        for(let i=0; i<NumeroInputs; i++){
            const output= document.getElementById("output")
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

    }

}