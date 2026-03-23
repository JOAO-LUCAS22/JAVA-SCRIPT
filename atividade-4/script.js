function ResultadosGerados() {
    const numeroInput1 = document.getElementById("numeroInput1");
    let numero1 = parseInt(numeroInput1.value);
function aprovacao (numero1) {
    if (numero1<16)
        {return `<p>Incapaz de exercer o petismo!!! <br>Idade: ${numero1}.`}
    else if (numero1<=17)
        {return `<p>O voto é opcional!!! <br>Idade: ${numero1}`}
    else if (numero1<=64)
        {return `<p>O voto é obrigatório!!! <br>Idade: ${numero1}`}
    else if (numero1>=65)
        {return `<p>O voto é opcional!!! <br>Idade: ${numero1}`}


}


    const resultadoDiv = document.getElementById("ResultadosGerados");
    resultadoDiv.innerHTML = "";

    if (isNaN(numero1)|| (numero1) === null || (numero1) === "") {
        resultadoDiv.innerHTML = `<p>Por favor, digite um número válido petista.</p>`
        return;
    }
    resultadoDiv.innerHTML += `<h2>RESULTADOS DO L: <br>${numero1}</h2>`;
    resultadoDiv.innerHTML += `<p><br>${aprovacao(numero1)}`;
    }

const botaoGerar = document.getElementById("btnGerar");
botaoGerar.addEventListener("click",ResultadosGerados);