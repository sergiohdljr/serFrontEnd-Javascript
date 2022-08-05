const somar = function (){
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(somar(1, 2, 3));
console.log(somar(1, 2, 3, 4, 5));
console.log(somar(1, 2, 3, 4, 5, 12, 50));

// function contadorDeNumeros() {
//     const arg = arguments.length;
//     console.log(`Você passou ${arg} parametros.`)
// }

// contadorDeNumeros(1,50,8,9,7,4,1)











