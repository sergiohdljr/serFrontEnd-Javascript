function getRandomNumber(inicio = 0, fim = 10,interger = true){

let r = Math.random() * (fim - inicio + 1) + inicio
return interger ? parseInt(r) : r

}

console.log(getRandomNumber(2, 3));