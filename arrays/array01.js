const arr = [1,5,10,"olá",true]

//every()
const sohNumeros = arr.every((elemento)=> typeof elemento === "string")
console.log(sohNumeros)
//some()
const sohString = arr.some(elemento => typeof elemento === "string")
console.log(sohString)
//filter()
const filtroNumeros = arr.filter(elemento => typeof elemento === "number")
console.log(filtroNumeros)
//forEach 
filtroNumeros.forEach((elemento,i)=>{
    console.log(`[${i}]: ${elemento}`)
})
//Map()
const mapeamento = filtroNumeros.map(elemento => elemento * elemento)
console.log(mapeamento)
