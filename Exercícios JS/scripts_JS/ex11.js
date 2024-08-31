var cont = 0;


function numero_primo(valor) {
    if (valor == 1) {
        return "O número 1 não é primo. ";
    }

    else if (valor < 1) {
        return "Números menores que 1 não são primos.";
    }
    else {
        for (i = 2; i < valor; i++) {
            if (valor % i == 0) {
                cont++
                break;
            }
        }
    }


    if (cont == 1) {
        return `O número ${valor} não é um número primo.`;
    }
    else {
        return `O número ${valor} é um número primo.`;
    }
};

let texto = document.getElementById('texto');
let button__rodarcodigo = document.getElementById('botao');
let button__limpeza = document.getElementById('botao2');

button__rodarcodigo.onclick = function () {
    let valor_fornecido = Number(window.prompt("Digite um número inteiro qualquer: "));
    texto.innerHTML += `<p>${numero_primo(valor_fornecido)}</p>`;
};



button__limpeza.onclick = function () {
    texto.innerHTML = ""
};















