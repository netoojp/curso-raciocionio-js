
//parsefloat - p navegador ler a a string como numero
//parseInt - transformar p inteiro


//fazer jogador 1 digitar um número
var numberj1 = prompt("número do jogador 1");
numberj1 = parseInt(numberj1);

//fazer jogador 2 digitar um numero
var numberj2 = prompt("número do jogador 2");
numberj2 = parseInt(numberj2);

//se forem iguais, mostrar mensagem empate
if (n1 === n1) {
    alert("empate!")
}else{
    //sortear numero entre 0 e 1 
    var nSorteado = parseInt(Math.random() * 2)


    //se o numéro sorteado for 0, ganha quem escolher o numero MENOR
    if (nSorteado === 0){

        if(numberj1 < numberj2) {
            alert("ganhou o jogagor 1")
        } else {
            alert("ganhou o jogador 2")
        }

    //se o numéro sorteado for 1, ganha quem escolher o numero MAIOR
} else {
    if(numberj1 > numberj2) {
        alert("ganhou o jogagor 1")
    } else {
        alert("ganhou o jogador 2")
    }
}


}

