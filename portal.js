function login() {
    // Previne o envio do formulário
    event.preventDefault();

    // Obtém os valores dos campos
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verifica se os campos não estão vazios (apenas uma verificação simples)
    if (username && password) {
        // Exibe uma mensagem de login bem-sucedido
        document.getElementById("message").innerHTML = "Login realizado com sucesso!";
        document.getElementById("message").style.color = "green";
        return false;
    } else {
        // Se algum campo estiver vazio, exibe uma mensagem de erro
        document.getElementById("message").innerHTML = "Por favor, preencha todos os campos.";
        document.getElementById("message").style.color = "red";
        return false;
    }
}