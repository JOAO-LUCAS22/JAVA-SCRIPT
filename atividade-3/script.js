function ResultadosGerados() {
    const numeroInput1 = document.getElementById("numeroInput1");
    let numero1 = parseInt(numeroInput1.value);
    const numeroInput2 = document.getElementById("numeroInput2");
    let numero2 = parseInt(numeroInput2.value);
    const numeroInput3 = document.getElementById("numeroInput3");
    let numero3 = parseInt(numeroInput3.value);
function média (numero1,numero2,numero3) {
    return (numero1 + numero2 + numero3)/2
};
function aprovacao (média) {
    if (média<7)
        {return `<p>O aluno está reprovado!!! <br>Média: ${média}.`}
    else if (numero1 < numero2)
        {return `<p>O aluno está aprovado!!! <br>Média: ${média}`}
}


    const resultadoDiv = document.getElementById("ResultadosGerados");
    resultadoDiv.innerHTML = "";

    if (isNaN(numero1)|| isNaN(numero2) || (numero1,numero2) === null || (numero1,numero2) === "") {
        resultadoDiv.innerHTML = `<p>Por favor, digite um número válido.</p>`
        return;
    }
    resultadoDiv.innerHTML += `<h2>Resultados das operações entre os números:\n ${numero1} e ${numero2}</h2>`;
    resultadoDiv.innerHTML += `<p><br>Média:<br>(${numero1} + ${numero2} +${numero3}) / 3 = ${média(numero1,numero2,numero3)}`;
    resultadoDiv.innerHTML += `<p><br>${aprovacao (média(numero1,numero2,numero3))}`;
    }

const botaoGerar = document.getElementById("btnGerar");
botaoGerar.addEventListener("click",ResultadosGerados);