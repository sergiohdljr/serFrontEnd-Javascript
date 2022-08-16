// Exemplo: Concatenando dois arrays
const alpha = ["a","b","c"]
const numeros = [1,2,3]

const alphanumeric = alpha.concat(numeros)
console.log(alphanumeric)
// Exemplo: Concatenando três arrays
const num1 = [1,2,3]
const num2 = [4,5,6]
const num3 = [7,8,9,10]

const allNum = num1.concat(num2,num3)
console.log(allNum)

// Exemplo: Concatenando valores ao array
const alpha2 = ['a','b','c']
const alphaNumeric = alpha2.concat(1,[2,3])
console.log(alphaNumeric)

//Clonando Array com concat 
let arr1 = ['a','b','c']
let arr2 = [].concat(arr1)
console.log(arr2)

