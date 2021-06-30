import { Cliente } from "./Cliente";
import { ContaCorrente } from "./ContaCorrente";

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
const valorSacado = contaCorrenteAnne.sacar(50);
console.log(`Valor sacado: ${valorSacado}`)

//Realizando deposito na conta da Anne;
contaCorrenteAnne.depositar(250);
