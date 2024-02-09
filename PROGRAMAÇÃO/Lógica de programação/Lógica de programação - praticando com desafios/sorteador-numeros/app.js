function sortear(){
    let quantidade = document.getElementById('quantidade').value;
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value); 

    let sorteados = [];

    for (let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate)
        sorteados.push(numero);
    }

    alert(sorteados);
}


function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar(){}