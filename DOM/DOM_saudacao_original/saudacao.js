//Exercício: selecionar um elemento HTML e modifica-lo, criando uma saudação com o nome do usuário. 

(function () {

    const nomeUsuario = "Sérgio Henrique";
    const elemento = document.querySelector(".top-bar p")

    elemento.textContent += nomeUsuario

})()