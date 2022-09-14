function formatarNome(nomeCompleto) {
  const nomeAsArray = nomeCompleto.split(" ")
  if(nomeAsArray.length === 1){
    return nomeCompleto
  }

  let primeiroNome = nomeAsArray.shift()
  return `${nomeAsArray.join(" ")}, ${primeiroNome}`
}

console.log(formatarNome("Sérgio"));
console.log(formatarNome("Sérgio Henrique"));
console.log(formatarNome("Sérgio Henrique Lima"));

// formato:
// Daniel = Daniel
// Daniel Morales = Morales, Daniel
// Daniel Tapias Morales = Tapias Morales, Daniel
