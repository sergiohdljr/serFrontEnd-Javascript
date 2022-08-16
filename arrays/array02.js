let arr = [4,5,10,20,35,4,5]
// indexOf
console.log(arr.indexOf(5)) // return 1
// lastIndexOf
console.log(arr.lastIndexOf(5)) // return 6
// include
console.log(arr.includes(5)) // True
// find
console.log(arr.find((elemento)=> elemento > 10
)) // return 20
// findIndex
console.log(arr.findIndex((elemento)=> elemento > 10)) // 3