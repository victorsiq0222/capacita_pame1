//Um loop é uma estrutura de controle em programação que permite a repetição de um bloco de código várias vezes, até que uma condição específica seja satisfeita. Loops são utilizados para automatizar tarefas repetitivas e processar dados de forma eficiente.


//while loop: Utilizado quando o número de iterações não é conhecido e depende de uma condição.

let x=0
while(x<5){
    console.log(x)
    x=x+1
}

//0
//1
//2
//3
//4


// jogo de adivinhação 

const readlineSync = require('readline-sync');

//número secreto será um número aleatório de 0 a 10
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
//começo dizendo que as variáveis são nulas
let palpite = 0;
let tentativas = 0;
//introduzo o jogo
console.log("Bem-vindo ao jogo de adivinhação!");
console.log("Tente adivinhar o número entre 1 e 10.");
//começa o meu loop, equanto o palpite do usuário for dif do numero secreto o "while" vai rodar
while (palpite !== numeroSecreto) {
    //input para o usuário botar o seu palpite
    palpite = parseInt(readlineSync.question("Qual é o seu palpite? "));
    //tentativas = tentativas+1 , a cada loop feito o número de tentativas aumenta 1 unid 
    tentativas++;

    if (palpite < numeroSecreto) {
        console.log("Muito baixo! Tente novamente.");
    } else if (palpite > numeroSecreto) {
        console.log("Muito alto! Tente novamente.");
    } else {
        console.log(`Parabéns! Você adivinhou o número em ${tentativas} tentativas.`);
        // aqui ele vai retornar o número de tentativas para o usuário saber em quantas ele acertou
    }
}


//for loop: Utilizado quando o número de iterações é conhecido.
//tem 3 valores principais: uma variável declarada para controlar o loop ,uma condição para que o loop não seja quebrado e uma nova atribuição
//que acontecerá no fim de cada "volta" do bloco à variável declarada enteriormente.

for(let i = 0 ; i<5 ; i=i+1){
    console.log(i)
}

//0
//1
//2
//3
//4



//se não tiver uma condição o loop vai estourar e vai mandar infinitos números para a tela , o que pode gerar problemas com a memória RAM



