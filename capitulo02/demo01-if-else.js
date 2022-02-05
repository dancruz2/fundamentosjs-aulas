let frutaExistenteNoMercado = false
let temCPUSuficiente = true

//obter valores do terminal
const args = process.argv
const saldo = args[args.length -1]

if(isNaN(saldo)){
    console.log("Valor invalido!!")
    return;
}

console.log("args", args)
console.log("saldo", saldo)


let tipoCliente = "premium"
if(saldo < 9){
    tipoCliente = "basic"
}

else if(saldo >= 10 && saldo < 20){
    tipoCliente = "Gold"
}

else{
    tipoCliente = null
}

//null, undefined, vazio, 0===false!
if(!tipoCliente){
    tipoCliente = "indefinido"
}

console.log("tipoDoCliente", tipoCliente)


const operadorOu = 1 > 2 || 2 > 1
const operadorE = 1 === 1 && 2!==2
const operadorNot = !(1==1)

const idade = 19
const resultado = idade >= 18 ? "Pode dirigir!" : "Não pode dirigir!";

console.log("Resultado:", resultado)



const resultado2 = 1 ? (null || ((1 != '1') ? "Hello world!": "Hackerzao")) : "não zero";
console.log("Resultado:", resultado2)


const item = (!0 ? "2a" : "3b")
console.log("Item:", item)

const item2 = "0"; 
console.log(!!item2);


const item3 = "abc"; 
console.log(isNaN(item3) ? "Hey jude" : "Hey Julia");
