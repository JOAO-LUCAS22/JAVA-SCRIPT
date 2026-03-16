function gerarTabuada() {
    const numeroInput = document.getElementById("numeroInput");
    let numero = parseInt(numeroInput.value);


    const resultadoDiv = document.getElementById("resultadoTabuada");
    resultadoDiv.innerHTML = "";

    if (isNaN(numero) || numero === null || numero === "") {
        resultadoDiv.innerHTML = `<p>Porfavor, digite um número válido.</p>`
        return; // este comando sai da função.
    }
    resultadoDiv.innerHTML += `<h2>Tabuada do número ${numero}</h2>`;
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`;
    }
}
const botaoGerar = document.getElementById("btnGerar");
botaoGerar.addEventListener("click",gerarTabuada);