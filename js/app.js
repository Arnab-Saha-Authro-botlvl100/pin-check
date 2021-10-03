function getpin(){
    const pin = Math.round(Math.random() *10000);
    const pinstr = pin+ '';
    if(pinstr.length == 4){
        return pin;
    }
    else{
        return getpin();
    }
}

function generatepin(){
    const pin = getpin();
    document.getElementById('pininput').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const key = event.target.innerText;
    if(isNaN(key)){
        if(key == 'C'){
            document.getElementById('typed-numbers').value = '';
        }
    }
    else{
        const calc = document.getElementById('typed-numbers');
        const previous = calc.value;
        const next = previous + key;
        calc.value = next;
    }
})

document.getElementById('submit-btn').addEventListener('click', function(){
    const pin = document.getElementById('pininput').value;
    const value = document.getElementById('typed-numbers').value;
    const error = document.getElementById('error-section');
    const success = document.getElementById('success-section');
    if(value == pin){
        success.style.display = 'block';
        error.style.display = 'none';
    }
    else{
        success.style.display = 'none';
        error.style.display = 'block';
    }
})