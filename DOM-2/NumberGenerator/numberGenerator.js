(function () {
  const numberContainer = document.querySelector(".container");

  for (let i = 0; i < 102; i++) {
    const number = document.createElement("div");
    number.classList.add("number");
    number.textContent = `${i}`;
    numberContainer.appendChild(number);
    if (number.textContent % 2 == 0) {
      number.style.backgroundColor = "green";
    } else if (number.textContent % 2 == !0) {
        if(number.textContent >1 && number.textContent % 3 ==! 0){
            number.style.backgroundColor = "red";
        }else{
            number.style.backgroundColor = "Yellow";
        }
      
    }
  }
})();
