class Carro {
    Color='';
    Marca='';
    Modelo=0;
    Motor=0;
    PosX=0;
    PosY=0;

    constructor(Color, Marca, Modelo, Motor){
        this.Color = Color;
        this.Marca = Marca;
        this.Modelo = Modelo;
        this,Motor = Motor;
    }

    avanzarX(){}

    avanzarY(){}
}

let Carro1 = new Carro('Rojo', 'Honda', 2015, 2.0);

let Carro2 = new Carro("Azul", "Nissan", 2020, 2.0)
console.log(Carro1.Color);
console.log(Carro2.Color);



// let Array=[]

// function avanzarX(){
//     console.log(this);
    
// }
// let Carro2 = {
//     color: "Rojo",
//     Marca: "Nissan",
//     Modelo: 2000,
//     Motor: 2.0,
//     PosX: 0,
//     PosY: 0,

//     avanzarX(){
//         console.log(this);
        
//     }


// }
