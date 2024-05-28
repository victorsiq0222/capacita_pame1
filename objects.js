//objects são conjuntos de propriedades com  valores atribuídos
//semelhante aos dicionários em python

let meu_carro={cor:'Azul ', ano:2019 , marca:'Ford'}
//esses termos dentro da variável são como os "parâmetros" para as funções


console.log(meu_carro.cor)
//Azul

//também conseguimos alterar os valores dos objects
meu_carro.cor='vermelho'
console.log(meu_carro.cor)
//vermelho


meu_carro.placa= 'LSL-7122'
//caso não tenha essa informação , um novo espaço é criado para definir a mesma
console.log(meu_carro) 
//o resultado será {cor:'vermelho , ano:2019 , marca:'ford',placa:'LSL-7122'}

//para deletar basta usar o delete nome_da_variavel.chave
delete meu_carro.cor
console.log(meu_carro)
//{ano:2019 , marca: 'ford' , placa:'LSL-7122'}