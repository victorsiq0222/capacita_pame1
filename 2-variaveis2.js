// var
var a = 10;
console.log(a); // 10

a = 20;
console.log(a); // 20

var a = 30;
console.log(a); // 30

// let
let b = 10;
console.log(b); // 10

b = 20;
console.log(b); // 20

// let b = 30; // Erro: b já foi declarada

// const
const c = 10;
console.log(c); // 10

// c = 20; // Erro: Assignment to constant variable
// const c = 30; // Erro: c já foi declarada


//var: Você pode declarar a variável novamente e reatribuir valores a variável
//let: Você pode reatribuir o valor da variável, mas não pode declarar a mesma variável novamente no mesmo escopo.
//const: Você não pode reatribuir nem declarar novamente a variável no mesmo escopo.



for(let i = -1 ; i < 2; i++){
    if(i==0){
        var x=3;
    }
    if(i==1){
        let y = 5;

    }
}

console.log(x); // x será encontrado , já que foi declarado globalmente
console.log(y); //y não será encontrado, já que está em escopo de bloco


const PI=3.14;
PI=5; 
//essa linha resultará em um erro , pois o const não pode ser modificado

// o const e o lest acabam ocupando menos memória , por serem declarados poucas vezes.