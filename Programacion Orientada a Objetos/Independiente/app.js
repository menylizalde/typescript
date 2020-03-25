
const Pelicula1 = {

    Nombre: 'Harry',
    Id: 01,

    reproducir(){
        return `Reproduciendo Pelicula...${this.Nombre}`;
    }
}

// Creamos la Clase
class Pelicula {

    constructor(Nombre, Id){
        this.Nombre = Nombre;
        this.Id = Id;

    }

    reproducir(){
        return`Reproduciendo pelicula ${this.Nombre}`
    }
}
//  heredamos la clase, el constructor y la funcion de arriba.
class Serie extends Pelicula{
    // extends hereda las propiedades de la anterior, pero no puede heredar funcionalidades
    
    constructor(Nombre, Id, cap){
        // super llama al metodo constructor del objeto de arriba
        super(Nombre,Id);
        this.cap = cap
    }
    reproducirCapitulo(){
        return `Reproduciendo Capitulo ${this.cap}...${this.Nombre}`
    }

}
// Instanciamos objetos es decir creamos un objeto nuevo
const pelicula1 = new Pelicula('Harry', 1);
const pelicula2 = new Pelicula('Araña', 2);
const Serie1 = new Serie('Dexter', 3, 55)
console.log(pelicula1.reproducir());
console.log(pelicula2.reproducir());
console.log(Serie1.reproducirCapitulo());
