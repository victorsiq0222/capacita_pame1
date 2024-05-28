
//código sem encapsulamento ( acesso direto ao objeto da classe )
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

let pessoa = new Pessoa('João', 25);

// Acessando e modificando os atributos diretamente
console.log(`Nome: ${pessoa.nome}`); // Nome: João
console.log(`Idade: ${pessoa.idade}`); // Idade: 25

pessoa.nome = 'Maria';
pessoa.idade = 30;

console.log(`Novo Nome: ${pessoa.nome}`); // Novo Nome: Maria
console.log(`Nova Idade: ${pessoa.idade}`); // Nova Idade: 30

// Podendo definir valores inválidos diretamente
pessoa.idade = -5;
console.log(`Idade Inválida: ${pessoa.idade}`); // Idade Inválida: -5



//código com encapsulamento( utilizando métodos públicos para acessar atributos privados)

class Pessoa {
    constructor(nome, idade) {
        let _nome = nome;
        let _idade = idade;

        // Métodos públicos para acessar e modificar os atributos privados
        this.getNome = function() {
            return _nome;
        }

        this.setNome = function(novoNome) {
            _nome = novoNome;
        }

        this.getIdade = function() {
            return _idade;
        }

        this.setIdade = function(novaIdade) {
            if (novaIdade > 0) {
                _idade = novaIdade;
            } else {
                console.log('Idade inválida.');
            }
        }
    }
}

let pessoa = new Pessoa('João', 25);

// Acessando os atributos usando métodos públicos
console.log(`Nome: ${pessoa.getNome()}`); // Nome: João
console.log(`Idade: ${pessoa.getIdade()}`); // Idade: 25

// Modificando os atributos usando métodos públicos
pessoa.setNome('Maria');
pessoa.setIdade(30);

console.log(`Novo Nome: ${pessoa.getNome()}`); // Novo Nome: Maria
console.log(`Nova Idade: ${pessoa.getIdade()}`); // Nova Idade: 30

// Tentando definir uma idade inválida
pessoa.setIdade(-5); // Idade inválida.
console.log(`Idade depois de tentativa inválida: ${pessoa.getIdade()}`); // Idade depois de tentativa inválida: 30

