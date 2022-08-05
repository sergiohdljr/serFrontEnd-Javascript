/* 
IMC = PESO/ALTURA*ALTURA
DEVE RECEBER PESO, ALTURA E UMA FUNÇÃO DE CALLBACK OPCIONAL
SE NÃO RECEBER CALLBACK, RETORNAR O IMC CALCULADO
SE RECEBER CALLBACK, DEVE RETORNAR O RETORNO DO CALL BACK
*/
function calculoImc(peso, altura, callback) {
  if (peso === undefined || altura === undefined) {
    throw Error("Necessário 2 parâmetros");
  }

  let imc = peso / (altura * altura);

  if (typeof callback === "function") {
    return callback(imc);
  }

  return imc;
}

function classificaImc(imc) {
  if (imc <= 16.9) {
    return `Seu imc foi ${imc}: Muito abaixo do peso`;
  } else if (imc <= 18.4) {
    return `Seu imc foi ${imc}: Abaixo do peso`;
  } else if (imc <= 24.9) {
    return `Seu imc foi: ${imc}: Normal`;
  } else if (imc <= 29.9) {
    return `Seu imc foi: ${imc}: Acima do peso`;
  } else if (imc <= 34.9) {
    return `Seu imc foi ${imc}: Obesidade grau I`;
  } else if (imc <= 40) {
    return `Seu imc foi ${imc}: Obesidade II`;
  }
}

const imc = calculoImc(87, 1.63, classificaImc);

console.log(imc);
