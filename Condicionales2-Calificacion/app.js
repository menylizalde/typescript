const button= document.getElementById('btnConsultar');


button.addEventListener('click', verificarcalificacion);

function verificarcalificacion(){

    const Calificacion= Number(document.getElementById('inpCalificacion').value)
    const PrintAlert = document.getElementById('PrintAlert');
    if(Calificacion > 8) {

        PrintAlert.innerText ='Aprobado';
        }
        else{
            PrintAlert.innerText = 'Reprobado';
            const AudioDonRamon= document.getElementById('AudioReprobado');
            
            AudioDonRamon.play();
            
        }

}