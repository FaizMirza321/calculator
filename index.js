const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function calculate(input){
    display.value = eval(display.value);
}

function clearDisplay(){
    display.value = "";
}