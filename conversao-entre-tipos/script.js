//pedir pro user digitar dois números, e depois mostrar a soma do valor



//pedir informação ao user usa o prompt
var number1 = prompt("digite um valor");
var number2 = prompt("digite outro valor");

//converter de string p number (p navegador ver como number)
//parseFloat

number1 = parseFloat(number1)
number2 = parseFloat(number2)

alert(number1 + number2);