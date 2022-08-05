function greeting(name) {
  console.log(`Olá ${name} !!!`);
}

function processUserInput(callback) {
  const name = "Sérgio";
  if (typeof callback === "function") {
    callback(name) //o parâmetro da função callback deve ser passado na funçao onde ela será execultada
  }
  console.log(name)
}

processUserInput(greeting);
