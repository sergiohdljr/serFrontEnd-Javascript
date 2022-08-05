/*Faça um algoritmo que receba um numero inteiro positivo n
 e calcule o seu fatorial,
n! desse número.*/


const fatorial = (n) => {
    let multi = 1;
    for(let i = 1; i < n; i++){
        multi *= n;
    }
    return `${n}! = ${multi}`
}

console.log(fatorial(3))

