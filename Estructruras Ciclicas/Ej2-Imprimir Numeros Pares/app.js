function eventListener(){
    const button=document.getElementById('btnInit');
    button.addEventListener('click', ImprimirPares);
}
eventListener()

ul=document.getElementById('listanumeros');

let li=document.createElement('li')
li.setAttribute('class','list-group-item')
 
function ImprimirPares(){
    for(let i=2; i<=100; i+=2){
        li.setAttribute('id', `item${i}`);
        li.innerText=`${i}`
        ul.appendChild(li)
    }

}