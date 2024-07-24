const prompt = require("prompt-sync")()
const acoes = require("./CRUD.js")
while (true) {
acoes.bemVindo()
let entrada = +prompt("O que deseja fazer? ")
    switch (entrada) {
        case 1:
            acoes.criar()
            break
        case 2:
            acoes.listar()
            break
        case 3:
            acoes.atualizar()
            break
        case 4:
            acoes.deletar()
            break
        case 5:
            console.log("Saindo...")
            process.exit()
            break
        default:
            console.log("\nInforme um valor correto.\n")
            break
    }
}