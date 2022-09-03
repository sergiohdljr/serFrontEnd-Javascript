(function () {
  const spanErro = document.querySelector(".erro");
  const input = document.querySelector(".input");
  const btn = document.querySelector(".btn");
  const container = document.querySelector(".wrapper");

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const inputValue = parseInt(input.value);
    if (typeof inputValue === "string") {
      spanErro.textContent = "Apenas números";
      input.value = "";
      input.focus();
    } else if (typeof inputValue === "number") {
      let numbers = [];

      for (let i = 1; i <= inputValue; ++i) {
        numbers.push(i);
      }

      numbers.map(number => {
        createNumberCard(number)
      });
    }
  });

  function createNumberCard(number) {
    const numberCard = document.createElement("div");
    numberCard.classList.add("number");
    numberCard.textContent = number;
    container.appendChild(numberCard);
  }

})();
