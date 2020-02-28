function eventListener(){
    const button=document.getElementById('btnInit');
    button.addEventListener('click', ImprimirPares);
}
eventListener()

ul=document.getElementById('listanumeros');


function ImprimirPares(){
    for(let i=2; i<=100; i+=2){
        let li=document.createElement('li')
        li.setAttribute('class','list-group-item')
        li.setAttribute('id', `item${i}`);
        li.innerText=`${i}`
        ul.appendChild(li)
    }

}