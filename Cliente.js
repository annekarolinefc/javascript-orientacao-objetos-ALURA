export class Cliente{
    nome;
    _cpf;

    get cpf(){
        return this._cpf;
    }

    //CRIANDO UM CONSTRUTOR
    construtor(nome,cpf){
        this.nome=nome;
        this._cpf=cpf;
    }
}