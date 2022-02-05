const pessoa =  {
    _nome: "",
    _idade: 20,
    get nome(){
        return this._nome
    },
    set nome(valor){
        this._nome = valor.toUpperCase()
    },

    get poderDirigir(){
        return this._idade > 18
    },
    set idade(valor){
        this._idade = valor
    }


}

pessoa.nome = "maria do céu"
console.log(pessoa.nome)
pessoa.idade = 16
console.log(pessoa.poderDirigir)
console.log(pessoa.idade)