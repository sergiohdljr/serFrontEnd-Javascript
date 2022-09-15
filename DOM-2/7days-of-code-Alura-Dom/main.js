const nome = document.querySelector("#name");
const dataNascimento = document.querySelector("#birth-date");
const form = document.querySelector(".js-form");

const btn = document.querySelector("button");

form.addEventListener('submit', (e)=>{
    let dataFormatada = dataNascimento.value.split("-").reverse().join("-");
    console.log(
      `${nome.value} nasceu em ${dataFormatada}`
    );
    e.preventDefault()
})
