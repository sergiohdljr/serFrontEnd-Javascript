// funcões como parametros de outras funções

function fn(cb) {
    console.log("execultar ação de callback")
    console.log(typeof cb)
    typeof cb === "function" && cb()
}
function callback(){
console.log("função passada por parâmetro");
}
fn(callback());


// função como propriedade de um objeto(método)
const obj = {
    callback:callback
}

obj.callback()


// retornando uma função dentro de uma função
function fn2(n1){


    return function(n2){
        return n1 * n2
    }
}

const funcao2 = fn2(10)
const multi = funcao2(2)

console.log(multi)




