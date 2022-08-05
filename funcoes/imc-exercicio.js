/*
IMC = PESO/ALTURA²
DEVE RETORNAR UM ÚNICO NÚMERO
DEVE GERAR UM ERRO SE RECEBER UM PARÂMETRO NÃO NÚMERO
DEVE RETORNAR ERRO CASO NÃO RECEBA 2 PARAMETROS
*/

(function IMC(peso, altura) {
  const arg = arguments;

  if (arg.length !== 2) {
    throw error("Só é aceito 2 parametros");
  }

  for (let i = 0; i < arg.length; i++) {
    if (typeof arg[i] !== "number") {
      throw error("Only Numbers");
    }
  }

  let imcResult = peso/(altura*altura)

  function classificacao(imc){
    if (imc <= 16.9) {
      console.log(`Seu calculo IMC foi ${imc},você está muito abaixo do peso`);
    } if (imc > 16.9 && imc < 18.4) {
      console.log(`Seu calculo IMC foi ${imc},você está abaixo do peso`);
    } else if (imc > 18.4 && imc < 24.9) {
      console.log(`Seu calculo IMC foi ${imc},seu peso está Normal`);
    } else if (imc > 24.9 && imc < 29.9) {
      console.log(`Seu calculo IMC foi ${imc},você está acima do peso`);
    } else if (imc > 29.9 && imc < 34.9) {
      console.log(`Seu calculo IMC foi ${imc},você tem obesidade grau I`);
    } else if ((imc > 34.9 && imc < 40)) {
      console.log(`Seu calculo IMC foi ${imc},você tem obesidade grau II`);
    }else{
        console.log(`Seu calculo IMC foi ${imc},você tem obesidade grau III`);
    }
  }
  classificacao(imcResult)
})(90,1.40);
