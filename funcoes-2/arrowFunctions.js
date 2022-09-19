// (param1, param2, …, paramN) => { statements }
// (param1, param2, …, paramN) => expression
// // equivalente a: => { return expression; }

// // Parênteses são opcionais quando só há um nome de parâmetro:
// (singleParam) => { statements }
// singleParam => { statements }

// // A lista de parâmetros para uma função sem parâmetros deve ser escrita com um par de parênteses.
// () => { statements }

const elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
]

elements.map((element)=>{
    return element.length
}) //return [8,6,7,9]

elements.map(element => element.length) //return [8,6,7,9]


// retornando objetos literais (vagina sintax lol)

const obj = () => ({foo:"100"}) //return obj {foo :"100"}

// Uma arrow Function Fazia retorna undefined 
let empty = () => {};

// IIFE 

(()=>'foobar')()

// mapeamento, filtragem, ... simples de array 

const arr = [5,6,13,0,1,18,23]

const sum = arr.reduce((a,b) => a + b)
const even = arr.filter(v => v % 2 == 0);
const double = arr.map(v => v * 2)

console.log(sum)
console.log(even)
console.log(double)