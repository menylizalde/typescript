class foco{
    estado=false

    cambiarEstado(){
        this.estado=!this.estado;
        if (this.estado){
            return "./../assets/encendido.png"
        } else{
            return"./../assets/apagado.png"
        }
    

}