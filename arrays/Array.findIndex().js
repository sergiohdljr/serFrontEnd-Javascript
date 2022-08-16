const invenctory = [
  { nome: "apples", quantidade: 8 },
  { nome: "bananas", quantidade: 5 },
  { nome: "cerejas", quantidade: 5 },
];

console.log(invenctory.findIndex((fruta) => fruta.nome === "bananas"));
