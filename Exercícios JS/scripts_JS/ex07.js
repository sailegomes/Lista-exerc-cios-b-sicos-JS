let caixa_texto = document.getElementById('caixa_texto');
let button_calculo = document.getElementById('botao__calculo');
let button_limpeza = document.getElementById('botao__limpeza');

function contador_vogais() {
    let cont = 0;
    let palavra = caixa_texto.value.toLowerCase();

    for (let i = 0; i < palavra.length; i++) {
        if (palavra.charAt(i) == "a" || palavra.charAt(i) == "e" || palavra.charAt(i) == "i" ||
            palavra.charAt(i) == "o" || palavra.charAt(i) == "u") {
            cont++;
        }
    }
    return cont; 
};


button_calculo.onclick = function(){
    document.getElementById('texto').innerHTML += `<p>A palavra \'${caixa_texto.value}\' possui ${contador_vogais()} vogais.</p>`;
};

