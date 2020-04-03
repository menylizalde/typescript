
const imagen = document.getElementById("Carro");

const carro = new Car(0, 0); 

EventListener();


function EventListener(){
    document.addEventListener("keydown" , moveCar)
}

function moveCar(event){
    carro.MoverCarro(event.key, imagen);
}