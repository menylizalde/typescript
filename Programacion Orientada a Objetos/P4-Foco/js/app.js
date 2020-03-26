eventListener();
const foco = new foco();
const imagen = document.getElementById("imagen");

function eventListener(){
    document.getElementById('btnEncender').addEventListener("click", CambioEstado)
    
}

function CambioEstado(){
    imagen.src= foco.CambioEstado();
    
}
