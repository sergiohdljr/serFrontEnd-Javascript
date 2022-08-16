// Imprimindo os conteúdos de uma ordem

// Os códigos a seguir logam uma linha para cada elemento na ordem:

 const numeros = [2,5,10,4,9]

numeros.forEach((elemento,index,array)=>{
     console.log(`a [${index}] = ${elemento}`)
 })

// multiplicar Cada Elemento da array 

const numbers = [5,2,3,6,8]
numbers.forEach((elemento)=>{
    console.log(`${elemento} = ${elemento * 10}`)
})

// computa a soma
let sum = 0;
numbers.forEach((elemento)=>{
    sum += elemento
    console.log(sum)
})

