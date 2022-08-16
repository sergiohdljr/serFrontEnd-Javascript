let arr = [1,3,5,9,7]
//Push
arr.push('2',8,10,'Olá mundo')
console.log(arr)
//Pop
const ultimoIten = arr.pop()
console.log(ultimoIten)
console.log(arr)
//shift
let primeiroItem = arr.shift()
console.log(primeiroItem)
console.log(arr)
//unshift
const unshifth = arr.unshift(4,5,6)
console.log(arr)
//slice
let arr2 = arr.slice(5)
console.log(arr2)
//splice
let arr3 = arr.splice(2,4,"ola mundo")
console.log(arr3) 
console.log(arr)
