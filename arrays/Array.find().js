// Encontrar um objeto em um array por uma de suas propriedades

const invenctory = [
  { nome: "apples", quantidade: 8 },
  { nome: "bananas", quantidade: 5 },
  { nome: "cerejas", quantidade: 5 },
];

console.log(invenctory.find(fruta => fruta.nome === "bananas"))