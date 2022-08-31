(function () {
  "use strict";

  const txtTitulo = document.querySelector("#txtTitulo");
  const btn = document.querySelector("#btn");

  btn.addEventListener("click", (e) => {
    if (!txtTitulo.value) {
      showErrorMessage("preencha todos os dados", function () {
        txtTitulo.focus();
      });
      e.preventDefault();
    }
  });

  const feedbackMessage = document.querySelector("#feedbackMessage");

  const feedbackMessageCloseBtn =
    feedbackMessage.getElementsByTagName("button")[0];

  function showErrorMessage(msg, cb) {
    feedbackMessage.classList.add("show");
    feedbackMessage.getElementsByTagName("p")[0].textContent = msg;

    function hiddenErrorMessage(){
      feedbackMessage.classList.remove("show");
      feedbackMessageCloseBtn.removeEventListener("click", hiddenErrorMessage); 
      if (typeof cb === "function") {
        cb();
      } 
    }
  

    feedbackMessageCloseBtn.addEventListener("click", hiddenErrorMessage);

    
  }

  const txtDescricao = document.querySelector("#txtDescricao");
  const contadorContainer = document.getElementById("contador");
  const resta = contadorContainer.getElementsByTagName("span")[0];
  const maxima = txtDescricao.maxLength;
  mostrarNumero(maxima);

  contadorContainer.removeAttribute("style");

  function checkLength() {
    let numeroLetrasDigitadas = txtDescricao.value.length;
    let caractersRestantes = parseInt(maxima) - parseInt(numeroLetrasDigitadas);
    mostrarNumero(caractersRestantes);
  }

  function mostrarNumero(n) {
    resta.textContent = n;
  }
  txtDescricao.addEventListener("input", checkLength);

  btn.disabled = true;

  const chkAceito = document.querySelector("#chkAceito");

  chkAceito.addEventListener("change", function () {
    btn.disabled = !this.checked;
  });
})();
