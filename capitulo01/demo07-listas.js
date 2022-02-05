const minhaLista = []
const minhaListaDeTarefas = [
    "mandar email",
    "colocar comida para o dog",
    "limpar o quarto"
]

console.log(minhaListaDeTarefas[0])
console.log(minhaListaDeTarefas[1])
console.log(minhaListaDeTarefas[4])

//quantidades de itens no array
console.log(minhaListaDeTarefas.length)

//adicionar item
minhaListaDeTarefas.push("formatar computador")
console.log(minhaListaDeTarefas)

//remover ultimo item da lista
 const ultimo = minhaListaDeTarefas.pop()
 console.log(ultimo, minhaListaDeTarefas)

//remover o primeiro da lista
 const primeiro = minhaListaDeTarefas.shift()
 console.log(primeiro, minhaListaDeTarefas)

//remover um item especifico a partir de um indice
//qual item de inicio
//quantos item seão removidos
minhaListaDeTarefas.splice(1, 1)
console.log(minhaListaDeTarefas)


const itens = [
    1, "computador", 0.22
]

//verificar o tipo do array
console.log(typeof(itens))


//verificar se é array de forma correta
console.log(Array.isArray(itens))

//ordenar a lista
const numeros = [4,3,1,2]
console.log(numeros.sort())

const nomes = ["Raquel", "Daniel", "Jeane", "Davi"]
console.log(nomes.sort())

//juntar dois arrays
const novo = numeros.concat([0,9,8])
console.log(novo)

//juntar arrays em uma string
console.log(itens.join(","))

//verificar indice do item
const index = itens.indexOf("computador")
console.log(index)

//verificando o indice de um valor que não existe
const index2 = itens.indexOf("chaves")
console.log(index2)

console.log(itens[index])