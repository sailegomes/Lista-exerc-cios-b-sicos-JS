let capital = document.getElementById('capital');
let taxa = document.getElementById('taxa');
let tempo = document.getElementById('tempo');
let texto = document.getElementById('texto');


function primeiro_valor() {
    let mont = capital.value * Math.pow((1 + ((taxa.value) / 100)), tempo.value);
    var numero = mont.toFixed(2).split('.');
    numero[0] = numero[0].split(/(?=(?:...)*$)/).join('.'); // utilizando REGEX

    return numero.join(',');
};

function montante(){
    texto.innerHTML += `<p>O retorno do investimento será de: <mark>R$ ${primeiro_valor()}</mark> </p>`;
    capital.value = "";
    taxa.value = "";
    tempo.value = "";
};

let button_calculo = document.getElementById('calcular');
button_calculo.onclick = montante;

// _______________________________________________________________________________________________________________________
// _______________________________________________________________________________________________________________________

function limpartudo() {
    texto.innerHTML = "";
};

let button_limpar = document.getElementById('limpar');
button_limpar.onclick = limpartudo;


