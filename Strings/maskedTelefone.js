let numero = "8770-2996";
// 9****-**45
function mascararTelefone(telefone) {
  const tracoIndex = telefone.indexOf("-");
  const primeiraParteTel = telefone.slice(0, tracoIndex);
  const primeiraPartMasked = primeiraParteTel
    .slice(0, 1)
    .padEnd(primeiraParteTel.length, "*");
  const segundaParteTel = telefone.slice(-4);
  const segundaPartMasked = primeiraParteTel
    .slice(0, 2)
    .padStart(segundaParteTel.length, "*");

  return `${primeiraPartMasked}-${segundaPartMasked}`;
}

console.log(mascararTelefone(numero));
