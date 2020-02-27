const button=document.getElementById('btnConsultar');
button.addEventListener('click', Multiplo);

function Multiplo(){
    let Resultado='';
    let Numero1;
    let Numero2;

    
    Numero1=Number(document.getElementById('inpNum1').value);
    Numero2=Number(document.getElementById('inpNum2').value);

    if((Numero1%Numero2)==0){
        Resultado=`${Numero1} es multiplo de ${Numero2}`
        
    }
    else if((Numero2%Numero1)==0){
        Resultado=`${Numero2} es multiplo de ${Numero1}`
    }
    else{
        Resultado=('No son Multiplos')
    }
    const PrintAlert=document.getElementById('PrintAlert');
    PrintAlert.innerText=Resultado;
    
}