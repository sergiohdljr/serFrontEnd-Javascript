const teste = function(cb){
    console.log("Função teste")
    if(typeof cb ==="function"){
        cb("passado por parametro 30");
    }
    
}

const fn = function(param) {
console.log("Função anônima de callback");
console.log(param)    
}

teste()
