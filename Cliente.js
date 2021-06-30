export class Cliente{
    nome;
    _cpf;

    get cpf(){
        return this._cpf;
    }

    //CRIANDO UM CONSTRUTOR
    constructor(nome,cpf){
        this.nome=nome;
        this._cpf=cpf;
    }
}