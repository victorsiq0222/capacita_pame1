//para receber inputs/comandos em Javascript , vamos utilizar o módulo/pacote readlyne-sync
var requisicao = require('readline-sync')
var idade = requisicao.question("Qual a sua idade?\n")
console.log(idade)

var end  = requisicao.question('Qual o endereço?\n')
console.log(end)

console.log("sua idade é",idade)
console.log("seu end é :",end)



//demonstrar no python
//n1= int(input("digite um valor:"))
//n2= int(input("digite outro valor"))
//s=n1**n2
//print("seu valor é : ",s)



//obs : npm i readlyne-sync