let valor_base = document.getElementById('base');
let valor_altura = document.getElementById('altura');
let res = document.getElementById('frase');

function area_triangulo(){
    let area = (valor_base.value * valor_altura.value)/2

    res.innerHTML += `<p>O triângulo de base ${valor_base.value} e altura ${valor_altura.value}, possui área igual a ${area.toFixed(2)} u.a.</p>`
    valor_base.value = ""
    valor_altura.value = ""
};

let button_calculo = document.getElementById('botao_calculo');
button_calculo.onclick = area_triangulo;



function zerar(){
    res.innerHTML = '<p>A resposta aparecerá abaixo:</p>'
};

let button_zerar = document.getElementById('botao_zera');
button_zerar.onclick = zerar;

