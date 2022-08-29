(function () {
  "use strict";

  const txtTitulo = document.querySelector("#txtTitulo");
  const btn = document.querySelector("#btn");

  btn.addEventListener("click", (e) => {
    if (!txtTitulo.value) {
      alert("preencha todos os dados");
      e.preventDefault();
      txtTitulo.focus();
    }
  });

  const txtDescricao = document.querySelector("#txtDescricao")
  const contadorContainer = document.getElementById("contador")
  const resta = contadorContainer.getElementsByTagName("span")[0]
  const maxima = txtDescricao.maxLength
  mostrarNumero(maxima)
  
  contadorContainer.removeAttribute("style")

  function checkLength() {
    let numeroLetrasDigitadas = txtDescricao.value.length
    let caractersRestantes = parseInt(maxima) - parseInt(numeroLetrasDigitadas)
    mostrarNumero(caractersRestantes)
  }

  function mostrarNumero(n){
    resta.textContent = n;
  }
  txtDescricao.addEventListener('input',checkLength)

    btn.disabled = true

    const chkAceito = document.querySelector("#chkAceito")
    
    chkAceito.addEventListener('change',function(){
      btn.disabled = !this.checked
    })

    
})();
