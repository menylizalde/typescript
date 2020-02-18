const button= document.getElementById('btnConsultar');
button.addEventListener('click', ConsultarEdad);
let Edad1;
let Edad2;
let Nombre1;
let Nombre2;
function ConsultarEdad(){
    let Nombre1=(document.getElementById('inpNombre1').value);
    let Nombre2=(document.getElementById('inpNombre2').value);
    let Edad1= Number(document.getElementById('inpEdad1').value);
    let Edad2= Number(document.getElementById('inpEdad2').value);
    const PrintAlert=document.getElementById('PrintAlert');


    
    if (Edad1 > Edad2){
        console.log(Nombre1 +'Es Mayor ');
        PrintAlert.innerText=(Nombre1 + ' Es Mayor')
        
    }
            else{
                console.log(Nombre2 + ' Es Mayor');
                PrintAlert.innerText=(Nombre2 + ' Es MAYOR')
                                
            }

}