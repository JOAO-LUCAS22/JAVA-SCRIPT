function ResultadosGerados() {
    const numeroInput1 = document.getElementById("numeroInput1");
    let numero1 = parseInt(numeroInput1.value);
    const numeroInput2 = document.getElementById("numeroInput2");
    let numero2 = parseInt(numeroInput2.value);

function média (numero1,numero2) {
    return (numero1 + numero2)/2
};
function somar (numero1,numero2) {
    return numero1 + numero2
};
function produto (numero1,numero2) {
    return numero1 * numero2
};
function maiormenor (numero1,numero2) {
    if (numero1 > numero2)
        {return `<p>O número ${numero1} é maior que o número ${numero2}.`}
    if (numero1 == numero2)
        {return `<p>Os números ${numero1} e ${numero2} são exatamente iguais.`}
    else if (numero1 < numero2)
        {return `<p>O número ${numero2} é maior que o número ${numero1}`}
}


    const resultadoDiv = document.getElementById("ResultadosGerados");
    resultadoDiv.innerHTML = "";

    if (isNaN(numero1)|| isNaN(numero2) || (numero1,numero2) === null || (numero1,numero2) === "") {
        resultadoDiv.innerHTML = `<p>Por favor, digite um número válido.</p>`
        return;
    }
    resultadoDiv.innerHTML += `<h2>Resultados das operações entre os números:\n ${numero1} e ${numero2}</h2>`;
    resultadoDiv.innerHTML += `<p><br>Soma:<br>${numero1} + ${numero2} = ${somar(numero1, numero2)}`;
    resultadoDiv.innerHTML += `<p><br>Média:<br>(${numero1} + ${numero2}) / 2 = ${média(numero1,numero2)}`;
    resultadoDiv.innerHTML += `<p><br>Produto:<br>${numero1} x ${numero2} = ${produto(numero1, numero2)}`;
    resultadoDiv.innerHTML += `<p><br>${maiormenor(numero1, numero2)}`;
    }

const botaoGerar = document.getElementById("btnGerar");
botaoGerar.addEventListener("click",ResultadosGerados);