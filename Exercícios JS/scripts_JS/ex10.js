let valor = document.getElementById('string');
let letter = document.getElementById('letra');
let texto = document.getElementById('texto');

function calcular(palavra,letra){
    let cont = 0;
    let word = palavra.toLowerCase();

    for(let i = 0; i < word.length; i++){
        if(word.charAt(i) == letra){
            cont++;
        }
    }
    return cont;
};


let button__calculo = document.getElementById('calculo');
button__calculo.onclick = function(){
    texto.innerHTML += `<p>O caractere \"${letter.value}\" aparece ${calcular(valor.value,letter.value)} vezes na palavra \"${valor.value}\".</p>`;
    valor.value = "";
    letter.value = "";
};


let button__apagar = document.getElementById('limpar');
button__apagar.onclick = function(){
    texto.innerHTML = "";
};

