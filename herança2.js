
//Vamos criar uma classe Animal (classe mãe) e duas subclasses Cachorro e Gato, que herdam de Animal. 
//Cada subclasse terá seu próprio método fazerSom, demonstrando polimorfismo.






class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    fazerSom() {
        console.log(this.nome + ' fez um som.');
        
    }
}
//primeira subclasse
//a subclasse Cachorro muda o método da classe Animal , porém herda seus atributos
class Cachorro extends Animal {
    fazerSom() {
        console.log(this.nome + ' latiu.');
    }
}
//segunda subclasse
class Gato extends Animal {
    fazerSom() {
        console.log(this.nome + ' miou.');
    }
}

let animal1 = new Cachorro('Rex', 5);
let animal2 = new Gato('Mimi', 3);
let animal3 = new Animal('Animal Genérico', 2);

animal1.fazerSom(); // Output: Rex latiu.
animal2.fazerSom(); // Output: Mimi miou.
animal3.fazerSom(); // Output: Animal Genérico fez um som.
