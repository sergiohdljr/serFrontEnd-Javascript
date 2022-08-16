// Testando tamanho de todos os elementos do vetor
// O exemplo a seguir testa se TODOS elementos no array são maiores que 10.

function isBigEnough(el,index,array){
    return el >= 10;
}
const arr = [12,5,8,130,44]
console.log(arr.every(isBigEnough)); //false

// sintaxe com arrow functions 
const arr1 = [12, 54, 18, 130, 44];
console.log(arr1.every(el => el >= 10)); //true
