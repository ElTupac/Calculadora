const number = document.getElementById("current-number");
const operation = document.getElementById("current-operation");

var number1;
var number2;
var operator;

window.onload = () => {
    document.getElementById("1btn").addEventListener('click', e => botonPulsado("1"));
    document.getElementById("2btn").addEventListener('click', e => botonPulsado("2"));
    document.getElementById("3btn").addEventListener('click', e => botonPulsado("3"));
    document.getElementById("4btn").addEventListener('click', e => botonPulsado("4"));
    document.getElementById("5btn").addEventListener('click', e => botonPulsado("5"));
    document.getElementById("6btn").addEventListener('click', e => botonPulsado("6"));
    document.getElementById("7btn").addEventListener('click', e => botonPulsado("7"));
    document.getElementById("8btn").addEventListener('click', e => botonPulsado("8"));
    document.getElementById("9btn").addEventListener('click', e => botonPulsado("9"));
    document.getElementById("zero").addEventListener('click', e => botonPulsado("0"));

    document.getElementById("plusbtn").addEventListener('click', e => botonPulsado("+"));
    document.getElementById("minusbtn").addEventListener('click', e => botonPulsado("-"));
    document.getElementById("divbtn").addEventListener('click', e => botonPulsado("/"));
    document.getElementById("mulbtn").addEventListener('click', e => botonPulsado("*"));

    document.addEventListener('keypress', event => {
        botonPulsado(event.key);
    });
}

function botonPulsado(boton){
    switch(boton){
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
            if(number.innerText == "0"){
                number.innerText = boton;
            }else{
                number.innerText += boton;
            }

            if(number1){
                number2 = number.innerText;
                operation.innerText = `${number1} ${operator} ${number2} = ${operacion(number1, number2, operator)}`;
            }
            break;
        
        case "+":
        case "-":
        case "/":
        case "*":
            if(number1 && number.innerText != "0"){
                //Aca hace la operacion y la muestra
                operation.innerText = `${number1} ${operator} ${number2} =`
                number.innerText =  operacion(number1, number2, operator);
            }else{
                //Se muestra el primer numero y reinicia el display para poner el nuevo numero
                //Si no se escribio un segundo numero todavia cambia el signo de la operacion
                if(!number1) {
                    number1 = number.innerText;
                }
                operator = boton;
                number.innerText = "0";
                operation.innerText = `${number1} ${boton} `;
            }
            break;
    }
}

function operacion(numero1, numero2, operador){
    switch(operador){
        case "+":
            numero1 = parseInt(numero1);
            numero2 = parseInt(numero2);
            return numero1 + numero2;
            break;

        case "-":
            numero1 = parseInt(numero1);
            numero2 = parseInt(numero2);
            return numero1 - numero2;
            break;

        case "/":
            numero1 = parseInt(numero1);
            numero2 = parseInt(numero2);
            return numero1 / numero2;
            break;

        case "*":
            numero1 = parseInt(numero1);
            numero2 = parseInt(numero2);
            return numero1 * numero2;
            break;
    }
}