
/**Se declaran Variables */
let alturamuro;
let longitudmuro;
let precioporM;
let costo;

/**Se declara la variable button y se le asigna el boton calcular */

let button = document.getElementById('btnCotizar');

button?.addEventListener('click', multiplica)
function multiplica(){
    alturamuro= Number( document.getElementById('altura').value);
    longitudmuro= Number( document.getElementById('longitud').value);
    precioporM= Number( document.getElementById('costopormetro2').value);
    
    costo= (alturamuro * longitudmuro * precioporM);
    let CostoTotal=document.getElementById('CostoTotal')
    CostoTotal.innerText = costo;
}