/*
IMC = PESO/ALTURA²
DEVE RETORNAR UM ÚNICO NÚMERO
DEVE GERAR UM ERRO SE RECEBER UM PARÂMETRO NÃO NÚMERO
DEVE RETORNAR ERRO CASO NÃO RECEBA 2 PARAMETROS
*/

function calculoImc(peso,altura) {

   if (peso === undefined  || altura === undefined ){
    throw Error("Necessário 2 parâmetros");
  }

  return peso/(altura*altura)
}

function classificaImc(imc) {
  if(imc <= 16.9){
    return 'Muito abaixo do peso'
  }else if(imc <= 18.4){
    return 'Abaixo do peso';
  }else if(imc <= 24.9){
    return 'Peso Normal';
  }else if(imc <= 29.9){
    return 'Acima do peso';
  }else if(imc <= 34.9){
    return 'Obesidade grau I'
  }else if(imc <= 40){
    return 'Obesidade II';
  }else{
    return 'Obesidade III';
  }
}

const imc = calculoImc(1.50)
console.log(imc)
console.log(classificaImc(imc))