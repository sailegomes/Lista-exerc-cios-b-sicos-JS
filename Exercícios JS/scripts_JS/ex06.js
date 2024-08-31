let caixa_texto = document.getElementById('caixa_texto');
let texto = document.getElementById('texto');

function inverter_numero() {
    if (caixa_texto.value < 0) {
        let resultado = caixa_texto.value * (-1)
        let valor = String(resultado).split("").reverse().join("")

        texto.innerHTML += `<p>O número digitado foi: ${caixa_texto.value}</p>`
        texto.innerHTML += `<p>O número invertido é: ${valor*(-1)}</p>`
        caixa_texto.value = ""
    }
    else{
    let valor = String(caixa_texto.value).split("").reverse().join("")

    texto.innerHTML += `<p>O número digitado foi: ${caixa_texto.value}</p>`
    texto.innerHTML += `<p>O número invertido é: ${valor}</p>`
    caixa_texto.value = ""
    }
};

let button_inverter = document.getElementById('botao__inverter');
button_inverter.onclick = inverter_numero;




function limpar_tudo() {
    texto.innerHTML = ""
};

let button_limpartudo = document.getElementById('botao__limpeza');
button_limpartudo.onclick = limpar_tudo;

