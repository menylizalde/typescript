class Proyectil{

    VelocidadInicial= 0;
    Angulo= 0;

    constructor(VelocidadInicial, Angulo){

        this.VelocidadInicial = VelocidadInicial;
        this.Angulo = Angulo;

        // console.log(this.Angulo, this.VelocidadInicial);
    }

    calcularDistanciaX(t){
        const DistanciaX = (this.VelocidadInicial * Math.cos(this.Angulo * (Math.PI/180)))*t;
        
        return DistanciaX;

    }

    calcularDistanciaY(t){
        let DistanciaY= this.VelocidadInicial * Math.sin(this.Angulo * (Math.PI / 180));
        
        DistanciaY = DistanciaY * t - 0.5 * 9.8 * Math.pow(t, 2);

        return DistanciaY;
        
    }


    // Creamos los span (o pelotitas de la animacion)
    crearSpan(){
        for(let tiempo=0; tiempo<=7; tiempo+= 0.01){            
            const span= document.createElement("span");
            
            const left=this.calcularDistanciaX(tiempo);
            const bottom= this.calcularDistanciaY(tiempo);

            if ((left < 0 || bottom < 0) || (left>=100 || bottom >=100)) break;


            span.style.left=`${this.calcularDistanciaX(tiempo)}%`
            span.style.bottom=`${this.calcularDistanciaY(tiempo)}%`

            document.getElementById('contenedor').appendChild(span)


        }
    }


}