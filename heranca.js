
class Pessoa {
    constructor(nome, idade, altura) {
        this.nome = nome; // cada pessoa terá um nome determinado
        this.idade = idade; // cada pessoa terá uma idade determinada
        this.altura = altura;
    }

    correr() {
        console.log(this.nome + ' correu');
    }
}
//após o "extends" ,a  classe Atleta herda os atributos (nome, idade, altura) e métodos (correr) da classe Pessoa. (herança)
class Atleta extends Pessoa {
    correr() {

        //A classe Pessoa define um método correr.
        //A classe Atleta redefine (sobrescreve) o método correr.
        //(polimorfismo)

        console.log(this.nome + ' correu'); // corrige o nome da variável
    }
}

let eu = new Atleta('Victor', 21, 1.88);
console.log(eu);

//método correr é chamado
//qual será a saída?
eu.correr();
