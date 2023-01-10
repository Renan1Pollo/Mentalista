let numSecreto = parseInt(Math.random() * 11);

function chutar() {
    let elementoResultado =document.querySelector("#resultado");
    let chute = parseInt(document.getElementById("valor").value);

    if (chute == numSecreto)
        return (elementoResultado.innerHTML = `Acertou! o numero é: ${numSecreto}`);
    else if (chute < 0 || chute > 10)
        return (elementoResultado.innerHTML = `Numero invalido! Digite um número entre 0 e 10`);
    else return (elementoResultado.innerHTML = "Errou");
}