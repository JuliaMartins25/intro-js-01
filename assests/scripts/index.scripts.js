function exibirNome() {
    let nome = document.getElementById("nome").value;

//  console.log("Nome digitado:", nome)

    document.getElementById("msg").innerHTML = `Olá, ${nome}`;

}