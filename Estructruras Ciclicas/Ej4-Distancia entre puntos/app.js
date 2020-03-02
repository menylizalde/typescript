function eventListener(){
    const button=document.getElementById('btnInit');
    button.addEventListener('click', initApplication)
}
eventListener()
function initApplication(){

    let a = 70;
    let z = 150;
    
    while(a !== z){
        a++;
        z--;
        const PRintAlert=document.getElementById('PrintAlert');
    PRintAlert.innerText=`Se encontrarán en el km ${a} dirección Zacatecas ${z} dirección Aguascalientes`
        if (a==z) {
            console.log(`Se encontrarán en el km ${a} dirección Zacatecas ${z} dirección Aguascalientes`)
            
        }
    }

    console.log("Se encontrarán en el km " + a + " dirección Zacatecas " + z + " dirección Aguascalientes");
}


