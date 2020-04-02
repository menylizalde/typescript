
const ContenidoTweet = document.querySelector("#txTweet");
const listaTweets = document.querySelector("#lista-tweets")

eventListener();
CargarTweetsLocalStorage();

function eventListener(){
    document
    .querySelector("#formulario")
    .addEventListener("submit", ObtenerFormulario);
    listaTweets.addEventListener("click", EliminarTweet);
}

function ObtenerFormulario (event) {
    event.preventDefault();

    if(ContenidoTweet.value.trim() == "") return;
    
    let InstanciaTweet = new Tweets(ContenidoTweet.value);
    
    InstanciaTweet.AgregarTweetDOM(listaTweets, true);    
}

function EliminarTweet(event){
    Tweets.EliminarTweetDOM(event);    
}

function CargarTweetsLocalStorage(){

    const TweetsLS= ManipularLocalStorage.ObtenerLocalStorage();

    for(let i=0; i < TweetsLS.length; i++){
        let InstanciaTweet = new Tweets(TweetsLS[i]);
        console.log(TweetsLS);
        
        InstanciaTweet.AgregarTweetDOM(listaTweets, false);
    }

}