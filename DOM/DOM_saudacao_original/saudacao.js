//Exercício: selecionar um elemento HTML e modifica-lo, criando uma saudação com o nome do usuário.

(function () {
  const elemento = document.querySelector(".top-bar p");
  const nomeUsuario = null;

  if (nomeUsuario) {
    elemento.textContent += nomeUsuario;
    // Escrever tags html com javascript
    //elemento.innerHTML += `<b> ${nomeUsuario} </b>`
  } else {
    //acessar pai do elemento do DOM
    //remover elemento do DOM 
    //elemento.remove();
    const elementoParaRemover = elemento.parentNode
    elementoParaRemover.parentNode.removeChild(elementoParaRemover)
  }
})();
