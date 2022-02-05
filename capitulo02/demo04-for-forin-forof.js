const textoPar = "Par"
const textoImpar = "Ímpar"

for(let index = 0; index <= 10; index++){
    const decisao = index % 2 === 0 ? textoPar : textoImpar
    console.log(`O número ${index} é`, decisao)
}

const minhaListaDeTarefas = [
    {
        id: parseInt(Math.random() * 10),
        nome: "Zezinho",
        poder: "Veloz"
    },
    {
        id: Math.random(),
        nome: "Mariazinha",
        poder: "Super força"
    }
]

for(let index = 0; index < minhaListaDeTarefas.length; index ++){
    const item = minhaListaDeTarefas[index]
    console.log(
        `
        id: ${item.id}
        nome: ${item.nome}
        `
    )

}

//não precisa do contador
for(const index1 in minhaListaDeTarefas){
    const item2 = minhaListaDeTarefas[index1]
    console.log("Nome", item2.nome)
}

//não precisa do index
for(const item of minhaListaDeTarefas){
    console.log("Super Poder:", item.poder)
}