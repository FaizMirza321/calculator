const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function calculate(input){
    display.value = eval(input);
}

function clear(input){
    display.value = "";
}