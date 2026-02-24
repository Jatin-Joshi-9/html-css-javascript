
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn[data-val]');
const clearBtn = document.getElementById('clear');
const equalBtn = document.getElementById('equals');

buttons.forEach( button =>{
    button.addEventListener('click',function(){
        display.value += this.getAttribute('data-val');
    });
});

clearBtn.addEventListener('click',function(){
    display.value = '';
});

equalBtn.addEventListener('click',function(){
    try{
        display.value =eval(display.value);
    }
    catch(error){
        display.value ='error';
    }

});
