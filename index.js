import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

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
contaCorrenteAnne.cliente=cliente1;
console.log(contaCorrenteAnne);
contaCorrenteAnne.depositar(500);

contaCorrenteJoão.agencia=1001;
contaCorrenteJoão.cliente=cliente2;
console.log(contaCorrenteJoão);


//Realizando saque na conta da Anne;
contaCorrenteAnne._saldo=100;
const valorSacado = contaCorrenteAnne.sacar(50);
console.log(`Valor sacado: ${valorSacado}`)

//Realizando deposito na conta da Anne;
contaCorrenteAnne.depositar(250);

//CRIANDO CONTA 2
const conta2 = new ContaCorrente();
conta2.cliente=cliente2;
conta2.agencia=1002;
console.log(conta2);

//TRANSFERINDO DINHEIRO DA CONTA DA ANNE PARA CONTA 2
contaCorrenteAnne.transferir(200,conta2);
console.log(conta2);