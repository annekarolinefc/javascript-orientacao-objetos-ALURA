//CRIANDO UMA CLASSE
class Cliente{
    nome;
    cpf;

}

class ContaCorrente{
    agencia;
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            console.log(`Saldo: ${contaCorrenteAnne._saldo}`);
        }
    }

    depositar(valor){
        if(valor>0){
            this._saldo += valor;
            console.log(`Saldo: ${contaCorrenteAnne._saldo}`);
        }//Regra de negocio: nao aceita valor negativo.
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

contaCorrenteAnne.agencia=1001;
console.log(contaCorrenteAnne);

contaCorrenteJoão.agencia=1001;
console.log(contaCorrenteJoão);


//Realizando saque na conta da Anne;
contaCorrenteAnne._saldo=100;
contaCorrenteAnne.sacar(50);


//Realizando deposito na conta da Anne;
contaCorrenteAnne.depositar(250);
