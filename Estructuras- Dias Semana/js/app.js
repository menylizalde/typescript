const button=document.getElementById('btnConsultar');
button.addEventListener('click', Dia);

function Dia(){
 let numero=Number(document.getElementById('inpNumero').value);
 let DiaSemana='';

 if(numero=='1'){
     DiaSemana=`El NUMERO ${numero} corresponde al dia LUNES`
 }
 else if(numero=='2'){
     DiaSemana=`El NUMERO ${numero} corresponde al dia MARTES`
 }
 else if(numero=='3'){
     DiaSemana=`El NUMERO ${numero} corresponde al dia MIERCOLES`
 }
 else if(numero=='4'){
     DiaSemana=`El NUMERO ${numero} corresponde al dia JUEVES`
 }
 else if(numero=='5'){
     DiaSemana=`El NUMERO ${numero} corresponde al dia VIERNES`
 }
 else if(numero=='6'){
     DiaSemana=`El NUMERO ${numero} corresponde al dia SABADO`
 }
 else if(numero=='7'){
     DiaSemana=`El NUMERO ${numero} corresponde al dia DOMINGO`
 }
 const PrintAlert=document.getElementById('PrintAlert');
 PrintAlert.innerText=DiaSemana;
}
