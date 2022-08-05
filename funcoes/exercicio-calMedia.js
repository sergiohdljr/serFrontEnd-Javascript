// Deve receber um ou mais valores númericos
// Deve retornar um único número 
// Deve gerar um erro ao receber um parâmetro não número
// deve retornar zero caso não receba nenhum parametro
function calculadoraMedia(){
    const arg = arguments

    if (arg.length === 0 ){
        return 0
    }

    let resultado = 0;
    for (let i = 0; i < arg.length; i++) {
        if (typeof arg[i] !== "number") {
            throw error("Only Numbers");
        }
      resultado += arg[i];
    }

    return resultado / arg.length;
   
}

console.log(calculadoraMedia(2,"4"));
