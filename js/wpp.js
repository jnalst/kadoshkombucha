function wpp() {
  var nome = document.getElementById("nome").value;
  var telefone = document.getElementById("telefone").value;
  var email = document.getElementById("email").value;
  var url = "https://wa.me/5511977735418?text=" 
    + "*Bem vindo a nossa comunidade Kadosh Living Foods para atualizações entre em nosso grupo abaixo:*" + "%0a" // Mensagem personalizada
    + "%0a" // Quebra de linha
    + "Link: https://chat.whatsapp.com/D7vALkUKtoI8yLhBVjxERs" + "%0a"
    + "%0a" // Quebra de linha
    + "*Estaremos encaminhado o Ebook Kombu Soap para seu e-mail, conforme dados enviados abaixo:*" + "%0a"
    + "%0a" // Quebra de linha
    + "*Nome*: " + nome + "%0a" // Dados do formulário
    + "*Telefone*: " + telefone + "%0a"
    + "*E-mail*: " + email;
  window.open(url, '_blank').focus();
  event.preventDefault();
}