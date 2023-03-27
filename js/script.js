function validarLogin(){
    const campoEmail = document.getElementById("x")
    const campoSenha = document.getElementById("y")



    if (campoEmail.value!=="a" && campoEmail!=="a"){
        alert ("E-mail ou senha incorretos!");
    } else {
        botao_entrar = window.open('~/../index.html');
    }
    
}