let res = document.getElementById('texto');
let caixa = document.getElementById('caixa__texto');

function calcular(){
    let area = Math.PI * (Math.pow(caixa.value,2))
    let perimetro = 2*Math.PI*caixa.value

    res.innerHTML += `<hr><p>Valor do raio fornecido: ${caixa.value}</p>`
    res.innerHTML += `<p>O valor da área do círculo é ${area.toFixed(2)} u.a. <br></p>`
    res.innerHTML += `<p>O valor do perímetro do círculo é ${perimetro.toFixed(2)} u.p.</p>`
    caixa__texto.value = ""
};

let button_resultado = document.getElementById('botao__calcular');
button_resultado.onclick = calcular;



function zerar(){
    res.innerHTML = "<p>O resultado aparecerá logo abaixo:</p>"
};

let button_zerar = document.getElementById('botao__zerar');
button_zerar.onclick = zerar;

