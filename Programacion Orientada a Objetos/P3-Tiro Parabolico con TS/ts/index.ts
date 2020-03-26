
import { Triangulo } from './triangulo.class';

eventListener()

function eventListener(){
    document.getElementById('btnCalcular')!.addEventListener('click',CalcularArea)
}

function CalcularArea(){

    const altura: number= Number((<HTMLInputElement> document.getElementById('Altura')).value);

    const base: number= Number((<HTMLInputElement> document.getElementById('Base')).value);

    const triangulo= new Triangulo(base, altura,);
    
    console.log(triangulo.area);
    
}
