class Tweets{
    
    contenido = "";
    localStorage;
    
    constructor(contenido){
        this.contenido = contenido;        
    }

    AgregarTweetDOM(contenedor, origen){

        const li = document.createElement("li");
        li.classList="list-group-item text-break";
        li.textContent = this.contenido;

        const btnEliminar= document.createElement("button");
        btnEliminar.classList = "close";
        
        const span= document.createElement('span');
        span.classList= "badge badge-pill text-danger";

        span.textContent= "X";

        contenedor.appendChild(li);
        li.appendChild(btnEliminar);
        btnEliminar.appendChild(span);

        if (origen) ManipularLocalStorage.AgregarTweetLocalStorage(this.contenido);
        
        if(!origen)ManipularLocalStorage.AgregarTweetLocalStorage(this.contenido);
    }
            static EliminarTweetDOM(event){
            if(event.target.tagName !== "SPAN") return;
            const liBorrado=event.target.parentElement.parentElement;
            let textoLiBorrado= liBorrado.textContent
            textoLiBorrado = textoLiBorrado.substring(0, textoLiBorrado.length - 1);

            liBorrado.remove();

            
            
        
    }
}