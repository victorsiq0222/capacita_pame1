//funções são blocos de cósigo de código executados quando chamados. São declarados com o prefixo function
//sempre que voce quiser usar a função é só chama-la , assim não é preciso criar uma nova linha de código para isso.
//em python seria análogo ao def , que define uma função 

function exibe3Hello(){ 

    console.log(" Hello World")
    console.log(" Hello World")
    console.log(" Hello World")
    
}

exibe3Hello();
//após chamar essa função , aparecerá na tela o hello world impresso 3 vezes 

//as funções também podem retornar valores de entrada e também retornar algum valor.Para retornar , basta utilizar um "return"

var x=5;
function calculoDePotencia(base,expoente)
//aqui passei dois valores como (parâmetros da função)
//a função recebe a base e o expoente como parâmetros
{

    return base**expoente;
    //nenhuma linha de código dentro da função será executada após o "return"
}

var quadradoDe3 = calculoDePotencia(3,2)

console.log("o quadrado de 3 é:", quadradoDe3)
//9

// obs:variáveis declaradas dentro do bloco de uma função só existem naquele bloco 

function divisaoPor2(num1){
    var resultado =num1/2
    return resultado
}

console.log(resultado)

// irá retornar erro , pois tentamos printar resultado fora do bloco da função
//mesmo usando o var , irá retornar erro ? 
//Se sim , porque ?
