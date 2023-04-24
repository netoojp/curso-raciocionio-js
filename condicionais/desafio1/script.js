var n1 = prompt("digite um valor");
n1 = parseFloat(n1);

var n2 = prompt("digite um valor");
n2 = parseFloat(n2);

var media = (n1 + n2) / 2


if (media > 5){
    document.write("parabéns, você está acima da média")
} else {
    document.write("você está abaixo da média")
}