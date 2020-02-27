

const button = document.getElementById('btnComparar');
button.addEventListener('click', compararNumero);

function compararNumero(){

    let Numero1 = Number( document.getElementById(('inpNumero1').value));
    let Numero2 = Number(document.getElementById('inpNumero2').value)

    const DivAlert= document.getElementById('PrintAlert')

    if (Numero1 > Numero2){
        console.log('Numero A es Mayor');
        else{
        console.log('Numero B es Mayor');
        }
    }
}