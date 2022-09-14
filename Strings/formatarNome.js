function formatarNome(nomeCompleto) {
  const indexEspaco = nomeCompleto.indexOf(" ");
  if (nomeCompleto.includes(" ")) {
    const primeiroNome = nomeCompleto.slice(0, indexEspaco);
    const sobreNome = nomeCompleto.slice(indexEspaco).trim();
    return `${sobreNome}, ${primeiroNome}`;
  } 
    return nomeCompleto;
}

console.log(formatarNome("Lucas Santos"));
// formato:
// Daniel = Daniel
// Daniel Morales = Morales, Daniel
// Daniel Tapias Morales = Tapias Morales, Daniel
