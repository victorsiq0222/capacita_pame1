//uma classe é um modelo , ou template para criar objetos.Ela define um conjunto de atributos e métodos que os objetos criados a partir dela 
//possuirão
//toda classe tem seus atributos e seus métodos

class Pessoa{
    constructor(nome,idade,altura){

        this.nome=nome;//this é usado para dizer que cada pessoa terá uma única atribuição , cada pessoa terá um nome determinado
        this.idade=idade;//cada pessoa terá uma idade determinada
        this.altura=altura
    }
//criando o método falar 
    falar(){
        console.log('olá meu nome é', this.nome);
        console.log('minha idade é ',this.idade);
        console.log('minha altura é ,',this.altura);

    }
}

//criando um objeto da classe Pessoa 
const pessoa1 = new Pessoa("Victor",21,1.88);
pessoa1.falar();
//qual será a saída aqui?
//utilizando o método de falar da classe Pessoa