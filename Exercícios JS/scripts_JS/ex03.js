let caixa_texto = document.getElementById('texto_caixa')
let paragraph = document.getElementById('texto')

function conversor(){
    let valor = (caixa_texto.value - 32)*(5/9)

    
    paragraph.innerHTML += `<hr><p>A temperatura ${caixa_texto.value}°F em graus Celcius é igual a ${valor.toFixed(2)}°C.</p>`
    caixa_texto.value = ""
};

let button_calcular = document.getElementById('botao_calculo');
button_calcular.onclick = conversor;



function zerar_tudo(){
    paragraph.innerHTML = '<p>O resultado aparecerá abaixo...</p>'
};

let button_zerar = document.getElementById('botao_zerar');
button_zerar.onclick = zerar_tudo;



