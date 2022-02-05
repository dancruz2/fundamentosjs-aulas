const podeDirigir = true
if(podeDirigir) {
    console.log("Ele pode dirigir.")
}

const saldoEmConta = 0
if(!saldoEmConta) {
    console.log("Não tenho saldo!")
}

//força o valor a true ou false de acordo com a tabela
const boolComString = "ae hackerzão!!"
console.log("boolComString",!!boolComString)

//Negação
console.log("Negação:", !boolComString)

//Negação + forçar a bool
console.log(
    "negação + bool",
    !(!!boolComString)
)