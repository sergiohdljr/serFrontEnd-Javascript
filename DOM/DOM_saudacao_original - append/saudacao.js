//Exercício: selecionar um elemento HTML e modifica-lo, criando uma saudação com o nome do usuário.

(function () {
  const nomeUsuario = "Sérgio Henrique";
  
  if (nomeUsuario){
    const topBarElemento = document.createElement("div")
    topBarElemento.className = "top-bar"
    topBarElemento.innerHTML = `<p>Olá, <b>${nomeUsuario}<b></p>`

    const elementoPai = document.querySelector(".hero")

    elementoPai.insertBefore(topBarElemento,elementoPai.firstElementChild)
  }
  
})();
