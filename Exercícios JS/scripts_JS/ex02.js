let caixa = document.getElementById('caixa_texto');

function cubico(){
    let res = document.getElementById('texto')
    let valor = Math.pow(caixa.value,3)

    res.innerHTML += `<p> O resultado de ${caixa.value}<sup>3</sup> é ${valor}. </p>`
    caixa.value = ""
    
};
let button = document.getElementById('botao');
button.onclick = cubico;





function zerar(){
    let res = document.getElementById('texto')

    res.innerHTML = null
};
let zero = document.getElementById('botao_zerar');
zero.onclick = zerar;

