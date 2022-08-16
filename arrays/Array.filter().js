// retorna array de elementos que passaram no teste da função callback

// filtar números maiores que 10
function isBigEnough(el){
    return el >= 10
}
const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// console.log(filtered)

// retornar todos valores com idades maiores que 18 anos 

const idades = [32,33,16,40]
const maioresDeIdade = idades.filter(elemento => {
    return elemento >= 18
})

// console.log(maioresDeIdade)

const precos = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas a pagar",
  "R$ 300",
  "R$ 400",
  "Meus Dados",
];

const precosFiltro = precos.filter(preco => preco.includes("R$")
)

console.log(precosFiltro) 