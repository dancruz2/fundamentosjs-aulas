 const readLine = require("readline")
const terminal = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})
/*
terminal.question("Qual é o seu nome?\n", nome =>{
    terminal.question("Qual é o seu telefone?\n", telefone => {
        console.log(
            `
            Nome: ${nome},
            Telefone: ${telefone}
            `
        )
        terminal.close()
    })
})
*/

function questionAsync(texto) {
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, resolve)
    })
}

let nome2 = ""
let telefone2 = ""
Promise.resolve()
        .then(() => questionAsync("Qual é o seu nome?"))
        .then(respostaNome => {
            if(!respostaNome) throw new Error("campo nome vazio!")
            nome2 = respostaNome
        })
        .then(() => questionAsync("Qual é o seu telefone?"))
        .then(respostaTelefone => {
            if(!respostaTelefone) throw new Error("campo telefone vazio!!")
            telefone2 = respostaTelefone
        })
        .then(() => {
            console.log(`Nome: ${nome2}, Telefone: ${telefone2}`)
        })
        .catch(error => {
            console.error("Deu ruim", error.stack)
        })
        .finally(() => terminal.close())

