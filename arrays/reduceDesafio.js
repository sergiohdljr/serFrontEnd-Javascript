const numeros = [1,3,4,1,4,5,8,9]

const numerosUnicos = numeros.reduce((numerosUnicos, numeroAtual) => {
    if(numerosUnicos.indexOf(numeroAtual) < 0){
        numerosUnicos.push(numeroAtual)
    }
    return numerosUnicos
},[])

console.log(numerosUnicos)