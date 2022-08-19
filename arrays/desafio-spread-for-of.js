function sum(){
    const numbers = [...arguments]
    return numbers.reduce((acc,numAtual)=>{
       return acc + numAtual
    },0)
}

function average(){
    return sum(...arguments)/arguments.length
}

let soma = sum(20,30,40)
console.log(soma)

let media = average(40,10)
console.log(media)