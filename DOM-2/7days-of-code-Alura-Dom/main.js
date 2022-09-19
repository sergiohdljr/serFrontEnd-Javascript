const nome = document.querySelector("#name");
const form = document.querySelector(".js-form");
const btn = document.querySelector("button");
const dataNascimento = document.querySelector("#birth-date");
const tabelaPrincipal = document.querySelector(".tabela-principal");
const tbody = tabelaPrincipal.querySelector("tbody")

let pessoas = [];


form.addEventListener("submit", (e) => {
  let nomePessoa = nome.value;
  let dataFormatada = formatarData(dataNascimento) 

  pessoas.push({nomePessoa , dataFormatada}) 
  e.preventDefault();
  renderTable()

  nome.value = ""
  dataNascimento.value = "" 

});

function criarRow(pessoa) {
  const tr = document.createElement("tr");
  const tdNome = document.createElement("td");
  tdNome.textContent = `${pessoa.nomePessoa}`;
  tr.appendChild(tdNome);
  const tdData = document.createElement("td");
  tdData.textContent = `${pessoa.dataFormatada}`;
  tr.appendChild(tdData);

  tdNome.classList.add("td-dados")
  tdData.classList.add("td-dados")

  return tr
}

function renderTable(){
  tbody.innerHTML = "";
  pessoas.forEach((pessoa) => {
    tbody.appendChild(criarRow(pessoa));
  });

}

function formatarData(dataNascimento){
  return dataNascimento.value.split("-").reverse().join("-");
}