const txtEmail = document.querySelector("#txtEmail")
const msgFeedback = document.querySelector("#newsletterFeedback");

function cadastrarEmail() {
    let email = txtEmail.value
    console.log(msgFeedback)
    msgFeedback.innerHTML = `<p> O E-mail: ${email} foi cadastrado com sucesso</p>`    
}