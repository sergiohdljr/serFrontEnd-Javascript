// Testando valores de elementos de um array

// O exemplo a seguir testa se ALGUM elemento de um array é maior que 10.

function isBigEnough(el,index,array){
    return el > 10
}

const arr = [2, 5, 8, 1, 4];
const arr1 = [12, 5, 8, 1, 4];

console.log(arr.some(isBigEnough)) //False
console.log(arr1.some(isBigEnough)) // True
