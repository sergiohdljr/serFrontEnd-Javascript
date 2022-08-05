/* Faça uma função que recebe a média final
     de um aluno por parâmetro e retorna o
    seu conceito, conforme a tabela abaixo:
    de 0 - 4.9
       5.0 - 6.9
       7.0 - 8.9
       9.0 - 10.0 
*/

function media(nota1,nota2,callback){
    
    if(nota1 > 10 && nota2  > 10 ){
        throw console.error("Números apenas de um a 10");
    }

    let media = (nota1+nota2)/2

    if( typeof callback === 'function'){
        return callback(media)
    }
    return media
}

function conceito(media) {
    if (media < 4.9) {
      return `Seu conceito foi D`;
    } else if (media < 6.9) {
      return `Seu conceito foi C`;
    } else if (media < 8.9) {
      return `Seu conceito foi B`;
    }else{
        return `Seu conceito foi A`
    }
}

const notaFinal = media(9,5)
const mediaConceito = media(9,5,conceito) 

console.log(notaFinal)
console.log(mediaConceito)