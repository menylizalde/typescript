
/**Se declaran Variables */
let numero1;
let numero2;
let numero3;
let costo;

/**Se declara la variable button y se le asigna el boton calcular */

let button = document.getElementById('btnCotizar');

button?.addEventListener('click', multiplica)
function multiplica(){
    numero1= Number( document.getElementById('altura').value);
    numero2= Number( document.getElementById('longitud').value);
    numero3= Number( document.getElementById('costopormetro2').value);
    
    costo= (numero1 * numero2 * numero3);
    let CostoTotal=document.getElementById('CostoTotal')
    CostoTotal.innerText = costo;
}