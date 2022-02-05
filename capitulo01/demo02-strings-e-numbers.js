let salarioDoAmigo = 1000
let meuSalario = "2999.14"
let meuSalarioCorrigido = Number(meuSalario)

console.log(salarioDoAmigo + meuSalario)
console.log(
    typeof(salarioDoAmigo),
    salarioDoAmigo
)
console.log(
    typeof(meuSalario),
    meuSalario
)
console.log(salarioDoAmigo + meuSalarioCorrigido)

console.log(
    isNaN(meuSalario)
)

let minhaString = "Olá mundo!"
let minhaOutraString = "Olá mundo2!"
let minhaStringcomVariaveis =
`${minhaString} - ${minhaOutraString}. AE!`
console.log(
    minhaStringcomVariaveis
)