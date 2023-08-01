//variables
const display1El = document.querySelector('.display-1');
const display2El = document.querySelector('.display-2');
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
    display1El.innerText = '';
})


clearAllEl.addEventListener('click', (e) => {
    display1El.innerText = '';
    display2El.innerText = '0';
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



///THEME JS
var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});