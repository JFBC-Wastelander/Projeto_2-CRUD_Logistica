const prompt = require("prompt-sync")()
const estoque = []

const bemVindo = function () {
console.log(`1- Criar um novo recebimento.
2- Mostrar os seus dados.
3- Atualizar um recebimento.
4- Deletar um recebimento.
5- Sair do aplicativo.\n`)
}

function criar () {
    let pacote = {
        dia: "",
        mes: "",
        ano: "",
        empresa: "",
        nomeCarga: "",
        quantidadeCarga: "",
        tipoCarga: "",
        descricao: "",
    }
    pacote.dia = +prompt("Informe o dia de entrada da carga (apenas números): ")
    pacote.mes = +prompt("Informe o mês de entrada da carga (apenas números): ")
    pacote.ano = +prompt("Informe o ano de entrada da carga (apenas números): ")
    pacote.empresa = prompt("Informe a empresa que enviou a carga: ")
    pacote.nomeCarga = prompt("Informe um nome para o seu produto: ")
    pacote.quantidadeCarga = +prompt("Informe a quantidade do seu produto (apenas números): ")
    pacote.tipoCarga = prompt("Informe a categoria do seu produto (ex: a granel): ")
    pacote.descricao = prompt("Forneça uma descrição do seu produto: ")
    estoque.push(pacote)
    console.log("\nProduto cadastrado com sucesso.\n")
}

const listar = () => {
    estoque.forEach(pacote => console.log(`${pacote.dia}/${pacote.mes}/${pacote.ano} - ${pacote.nomeCarga} - ${pacote.quantidadeCarga} unidades - ${pacote.tipoCarga} - Observações: ${pacote.descricao} - Empresa: ${pacote.empresa}.`))
    console.log("")
}

const atualizar = () => {
listar()
let indice = +prompt("Qual cadastro deseja atualizar? (apenas números) ")
indice = indice - 1
let pacote = {
    dia: "",
    mes: "",
    ano: "",
    empresa: "",
    nomeCarga: "",
    quantidadeCarga: "",
    tipoCarga: "",
    descricao: "",
}
pacote.dia = +prompt("Informe o dia de entrada da carga (apenas números): ")
pacote.mes = +prompt("Informe o mês de entrada da carga (apenas números): ")
pacote.ano = +prompt("Informe o ano de entrada da carga (apenas números): ")
pacote.empresa = prompt("Informe a empresa que enviou a carga: ")
pacote.nomeCarga = prompt("Informe um nome para o seu produto: ")
pacote.quantidadeCarga = +prompt("Informe a quantidade do seu produto (apenas números): ")
pacote.tipoCarga = prompt("Informe a categoria do seu produto (ex: a granel): ")
pacote.descricao = prompt("Forneça uma descrição do seu produto: ")
estoque[indice] = pacote
console.log("\nSeu cadastro foi atualizado!\n")
}

function deletar () {
listar()
let indice = +prompt("Qual cadastro deseja remover? (apenas números) ")
indice = indice - 1
estoque.splice(indice, 1)
console.log("\nEntrada removida com sucesso.\n")
}

module.exports = {
    bemVindo,
    criar,
    listar,
    atualizar,
    deletar,
}