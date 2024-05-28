//arrays são listas com elementos ordenados.Para declarar uma lista ,basta dispor os elementos entre colchetese e separá-los por vírgula

let lista = [1,"Victor",false,4,5]

//note que o tipo dos elementos das listas podem ser distintos
//o elemento 0 é o "1" e não "victor"


let primeiroItenDaLista = lista[0]
console.log("o primeiro elemento da lista é" , primeiroItenDaLista)


//para modificar um elemento basta fazer|:

let AlterarElemento= lista[2]
lista[2]=true

console.log(lista)

//vai imprimir a lista , só que agora , o terceiro elemento será "true"






//listas dentro de listas , carecterizando no caso uma matriz quadrada 3x3

let matriz = [[1,2,3],[4,5,6],[7,8,9]]
let primeiroelementoTerceiraLista = matriz[2][0]

//o que irá retornar se dermos um console.log()?


//métodos de listas 
//são basicamente as operações que podemos realizar com as listas 

//array.pop()- remove o último elemento da lista
matriz.pop()
// [[1,2,3],[4,5,6]]

//array.push(elemento)- add elemento no final das lista.
matriz.push([10,11,12])
//[[1,2,3],[4,5,6],[10,11,12]]

//array.shift- remove o primeiro elemento da lista.
matriz.shift()
//[[4,5,6],[10,11,12]]

//array.unshift adiciona elemento no início da lista
matriz.unshift([3,2,1])
//[[3,2,1],[4,5,6],[10,11,12]]]


// matriz.concat  vai juntas as listas em uma única lista

let list1 = [1, 2, 3];
let list2 = [4, 5, 6];

let concatenatedList = list1.concat(list2);
console.log(concatenatedList); // [1, 2, 3, 4, 5, 6]

//   

let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum); // 15



