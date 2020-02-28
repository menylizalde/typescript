function eventListener(){
    const button=document.getElementById('btnInit');
    button.addEventListener('click', SerieNumerica);

}
eventListener()


function SerieNumerica(){
    // let Numeros=Number(prompt('¿Cuantos numeros son?'));
    // let decremento=0;

    for(i=100; i>=0; i--){
        console.log(i)
    }
    const PrintAlert=document.getElementById('PrintAlert');
    PrintAlert.innerText=i
}