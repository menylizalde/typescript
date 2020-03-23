eventListener()
let array= []
let outArray=[]
// .push: agrega elementos 


function eventListener(){
    document.getElementById('size', getSize).addEventListener("keypress",getSize)
    document.addEventListener('click' ,validarClick);
}

// e = event
function getSize(e){
    if (e.key != 'Enter') return;
    if (e.target.value =='')return
    if (isNaN(e.target.value))return
    if (e.target.value <= 0)return

    creatArray(e.target.value)
    e.target.value=''
}

function creatArray(size){
    array=[];
    for(let i=0; i < size; i++){
        array.push(Math.floor(Math.random)+(11-1)+1)
        
    } 
    console.log(array)
}

function validarClick(e){
    // utiliza metodo push
    if(e.target.id == 'op1'){
        if((i+1) % 2 == 0){
            outArray.push(0)
        } else{
            outArray.push(array[i])
        }
        

    }
}