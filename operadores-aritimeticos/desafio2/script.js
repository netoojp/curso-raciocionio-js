//pedir pro usuário digitar um número
//converter para um número inteiro  - parseInt

var n1 = prompt("digite um valor:");
n1 = parseInt(n1);

var n2 = prompt("digite outro valor:");
n2 = parseInt(n2);

var restoDivisao = n1 % n2
var expoenciacao = n1 ** n2

alert("o resto da divisão de " + n1 + " por "+ n2 +" é: " + (restoDivisao));
alert("o numéro " + n1 + " elevado por "+ n2 +" é: " + (expoenciacao));


