const display1El = document.querySelector('.display-1');
const display2El = document.querySelector('.display-2');
const tempResultEl = document.querySelector('.temp-result');
const numbersEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal');
const clearAllEl = document.querySelector('.all-clear');
const clearEntityEl = document.querySelector('.last-entity-clear');


let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;


numbersEl.forEach(number => {
    number.addEventListener('click', (e) => {
        //printing the dot only once on our screen
        if(e.target.innerText === '.' && !haveDot){
            haveDot = true;
        }
        else if(e.target.innerText === '.' && haveDot){
            return;
        }

        //displaying numbers on display-2
        dis2Num += e.target.innerText;
        display2El.innerText = dis2Num;
    })
});


operationEl.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if(!dis2Num) result; //not displaying an operation sign before any number

        haveDot = false;  //dot to be used again after operation sign

        const operationName = e.target.innerText;

        if(dis1Num && dis2Num && lastOperation){
            mathOperation();
        }
        else {
            result = parseFloat(dis2Num);
        }

        clearVar(operationName);

        lastOperation = operationName;
    })
});


equalEl.addEventListener('click', (e) => {
    if( !dis1Num || !dis2Num) return;

    haveDot = false;

    mathOperation();
    clearVar();

    display2El.innerText = result;
    dis2Num = result;
    dis1Num = '';
    tempResultEl.innerText = '';
})


clearAllEl.addEventListener('click', (e) => {
    display1El.innerText = '0';
    display2El.innerText = '0';
    tempResultEl.innerText = '0';
    dis1Num = '';
    dis2Num = '';
    result = '';
})


clearEntityEl.addEventListener('click', (e) => {
    display2El.innerText = '0';
    dis2Num = '';
})



function clearVar(name = ''){  //clears display-2 and display values on display-1
    dis1Num += dis2Num + ' ' + name + ' ';
    display1El.innerText = dis1Num;
    display2El.innerText = '';
    dis2Num = '';

    tempResultEl.innerText = result; //display temporary result on temp-result 
}

function mathOperation(){ //performs arithmetic calculations
    if(lastOperation === '+'){
        result = parseFloat(result) + parseFloat(dis2Num);
    }
    else if (lastOperation === '-'){
        result = parseFloat(result) - parseFloat(dis2Num);
    }
    else if (lastOperation === 'x'){
        result = parseFloat(result) * parseFloat(dis2Num);
    }
    else if (lastOperation === '/'){
        result = parseFloat(result) / parseFloat(dis2Num);
    }
    else if (lastOperation === '%'){
        result = parseFloat(result) % parseFloat(dis2Num);
    }
}


//clicking numbers from the keyboard
window.addEventListener('keydown', (e) => {
    if(
        e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '.' 
    ){
        clickButtonEl(e.key);
    }
    else if(
        e.key === '+' ||
        e.key === '-' ||
        e.key === '/' ||
        e.key === '%' 
    ){
        clickOperation(e.key);
    }
    else if( e.key === '*' ){
        clickOperation('x');
    }
    else if(e.key === 'Enter' || e.key === '='){
        clickEqual();
    }
})


function clickButtonEl(key){
    numbersEl.forEach(button => {
        if(button.innerText === key){
            button.click();
        }
    })
}

function clickOperation(key){
    operationEl.forEach(button => {
        if(button.innerText === key){
            button.click();
        }
    })
}

function clickEqual(){
    equalEl.click()
}