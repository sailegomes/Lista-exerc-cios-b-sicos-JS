function fatorial(numero){
    var lista = [];

    for(let i = 1; i < numero+1; i++){
        lista.push(i);
    }

    var valor_fatorial = lista.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
    valor_fatorial = valor_fatorial.toString().split(/(?=(?:...)*$)/).join('.');

    return valor_fatorial;
};


let valor = document.getElementById('valor');
let texto = document.getElementById('texto');
let button_calcular = document.getElementById('calcular');
let button_limpar = document.getElementById('limpar');


button_calcular.onclick = function(){
    texto.innerHTML += `<p>O valor do fatorial do número ${Number(valor.value)} é igual a: ${fatorial(Number(valor.value))}</p>`;
    valor.value = "";
};


button_limpar.onclick = function(){
    texto.innerHTML = "";
};
