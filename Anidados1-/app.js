const button = document.getElementById('btnDescuento');

button.addEventListener('click', CompararNumeros);

function CompararNumeros(){
    const numero1= Number(document.getElementById('inpNumero1').value);
    const numero2= Number(document.getElementById('inpNumero2').value);
    const numero3= Number(document.getElementById('inpNumero3').value);
    const PrintAlert=(document.getElementById('PrintAlert').value);

    if(numero1>numero2){
        if(numero1>numero3)
        alert('numero1')
    }
    else{
        alert('numero3')
    }
    else if(numero2 > numero3){
        alert('numero2')
    }

}
