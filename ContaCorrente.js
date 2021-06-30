export class ContaCorrente{
    agencia;
    cliente;
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;    
        }
    }

    depositar(valor){
        if(valor>0){
            this._saldo += valor;
        }//Regra de negocio: nao aceita valor negativo.
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}