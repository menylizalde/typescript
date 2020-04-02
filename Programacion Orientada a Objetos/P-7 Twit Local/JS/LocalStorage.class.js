class ManipularLocalStorage {
    static ArrayTweets = [];
    
    static AgregarTweetLocalStorage(ContenidoTweet){

        this.ArrayTweets = this.ObtenerLocalStorage();
        this.ArrayTweets.push(ContenidoTweet);
        
        localStorage.setItem("tweets", JSON.stringify(this.ArrayTweets));
    }

    static ObtenerLocalStorage(){
        let tweetsObtenidosLS = [];

        if (localStorage.getItem("tweets") === null){
            return tweetsObtenidosLS;
        }

        return JSON.parse(localStorage.getItem("tweets"))
    }

    static EliminarTweetLocalStorage(){
        let tweetsLS= this.ObtenerLocalStorage();
        let arrayNuevoTweetLS= [];

        for(let i=0; tweetsLS.length; i++){

            if(contenido!==tweetsLS[i]){
                arrayNuevoTweetLS.push(tweetsLS[i])
            }
        }

        localStorage.setItem('tweets', JSON.stringify(arrayNuevoTweetLS));
    }


}