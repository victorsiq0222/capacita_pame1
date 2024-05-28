//condicionais são verificações de valores que autorizam ou impedem a execução de um bloco de código.


// caso seja verdadeira a condição apresentada , o bloco dentro do colchetes será executado
var x = 5;
if(x>3){
    console.log("é maior que 0");

}


// "else if " é como se fosse um novo "if" acrescentado no bloco da função 



var y =2;
if (y > 2) {
    console.log("é maior que 2");
} else if (y == 2) {
    console.log("é igual a 2");
} else if (y < 2) {
    console.log("é menor que 2");
}


//pensando um pouco com o input

var requisicao = require('readline-sync');
var y = parseFloat(requisicao.question("Qual o número que você quer analisar?\n"));
console.log(y);

if (y > 2) {
    console.log("é maior que 2");
} else if (y == 2) {
    console.log("é igual a 2");
} else if (y < 2) {
    console.log("é menor que 2");
}



// "else" é utilizado quando queremos o caso totalmente oposto , é um "se não"

var z=4;
if(y>4){
    console.log("É maior que 4");
} else if (y<4){
    console.log("É menor que 4")
} else {
    console.log("é igual a 4")
}

//de forma análoga ao if podemos utilizar a função "switch" com os respectivos "cases", para não precisar ter um "if" para cada valor:


var w=3;
switch(w){

    case 1:
        console.log("É igual a 1");
        break;
    case 2:
        console.log("É igual a 2");
        break;
    case 3:
        console.log("É igual a 3");
        break;
    default:
        console.log("Não é igual a 1, 2 ou 3");
        break;

}

