(function(){
    const spanErro = document.querySelector(".erro")
    const input = document.querySelector(".input")
    const btn = document.querySelector(".btn")
    const container = document.querySelector(".wrapper")

    btn.addEventListener('click',(e)=>{
        e.preventDefault()
        const inputValue = parseInt(input.value);
        if(typeof inputValue === "string"){
            spanErro.textContent = "Apenas números"
            input.value = ""
            input.focus()
        }else if(typeof inputValue === "number"){
            for(let i = 1; i < inputValue+1; ++i){
                const number = document.createElement("div")
                number.classList.add("number")
                number.textContent = `${i}`
                container.appendChild(number)
            }
        }
    })


})()