const heroi = {
    nome: "Flash",
    idade: 100,
    sexo: "Masculino"
}

console.log("Nome:", heroi.nome)
console.log("Idade:", heroi["idade"])
console.log("Sexo:", heroi.sexo)
console.log("Valor inexistente", heroi.inexistente)

heroi.id = 0001
console.log(heroi)

//pega apenas as chaves do object
console.log(Object.keys(heroi))

//pega apenas os valores do object
console.log(Object.values(heroi))

//juntar dois objetos
const pessoa = {
    tamanho: "10 metros"
}

const novoObjt = Object.assign(heroi, pessoa)
delete novoObjt.nome
console.log(novoObjt)