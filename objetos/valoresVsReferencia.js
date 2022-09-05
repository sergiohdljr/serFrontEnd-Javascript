let x = 10;

function mudaX(n){
    x++
    console.log(` n interno ${n}`)
}

mudaX(x)
console.log(`x externo ${x}`)