//CRIANDO UMA CLASSE
class Cliente{
    nome;
    cpf;

}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }
}

//INSTANCIANDO UMA CLASSE
const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome="Anne";
cliente1.cpf=11111111111;

cliente2.nome = "Joao";
cliente2.cpf = 22222222222;

console.log(cliente1);
console.log(cliente2);

const contaCorrenteAnne = new ContaCorrente();
const contaCorrenteJoão = new ContaCorrente();

contaCorrenteAnne.saldo=0;
contaCorrenteAnne.agencia=1001;
console.log(contaCorrenteAnne);

contaCorrenteJoão.saldo=0;
contaCorrenteJoão.agencia=1001;
console.log(contaCorrenteJoão);


//Realizando saque na conta da Anne;
console.log(contaCorrenteAnne.saldo);
contaCorrenteAnne.saldo=100;
console.log(contaCorrenteAnne.saldo);
contaCorrenteAnne.sacar(50);
console.log(contaCorrenteAnne.saldo);
