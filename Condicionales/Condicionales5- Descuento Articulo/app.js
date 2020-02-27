const button=document.getElementById('btnDescuenta');
button.addEventListener('click', GenerarDescuento);
let Articulo;
let Clave;
let PrecioOriginal;

function GenerarDescuento (){
    let Articulo=(document.getElementById('inpArticulo').value);
    let Clave=(document.getElementById('inpClave').value);
    PrecioOriginal=(document.getElementById('inpPrecioOriginal').value);
    const PrintAlert=document.getElementById('PrintAlert');
    

    if (Clave == 01){
        PrintAlert.innerText=(`Articulo: ${Articulo}
         Clave: ${Clave} 
         Precio Original: $ ${PrecioOriginal}  
         Precio con Descuento: $ ${PrecioOriginal*0.90}`);
    }
    if(Clave == 02){
        PrintAlert.innerText=(`Articulo; ${Articulo}
         Clave: ${Clave} 
         Precio Original: $ ${PrecioOriginal}  
         Precio con Descuento: $ ${PrecioOriginal*0.80}`);
    }
      
}