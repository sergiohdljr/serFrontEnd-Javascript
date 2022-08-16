// Exemplo: Mapeando um array de números para um array de raízes quadradas

// O código a seguir mapeia um array de números e cria um novo array contendo o valor da raiz quadrada de cada número do primeiro array.

const numbers = [1,4,9,25,4,9]
const  raiz = numbers.map(Math.sqrt)
// console.log(numbers)
// console.log(raiz)

// Exemplo: Mapeando um array de números usando uma função callback que contém um argumento
// O código a seguir mostrar como o método map funciona quando a função callback possui apenas um argumento. Esse argumento será automaticamente atribuído para cada elemento do array conforme o map itera sobre o array original.

const doubles = numbers.map((num)=>{
    return num * 2;
})

// console.log(doubles)

const precos = [
    "Crédito",
    "R$ 200",
    "R$ 400",
    "Contas a pagar",
    "R$ 300",
    "R$ 400",
    "Meus Dados"
]

const precosFiltro = precos.filter((preco) => preco.includes("R$"))

const precoNumeros = precosFiltro.map(preco=>Number(preco.replace("R$ ","")))

// console.log(precoNumeros)

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map((user)=>{
    return {
        fullName:`${user.name}${user.surname}`,
        id:user.id
    }
})
console.log(usersMapped)















