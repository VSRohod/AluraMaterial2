function adicionar(){
    // recuperar valores, nome produto, quantidade e valor
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById("quantidade");

    // calcular preço, o nosso subtotal
    let preco = quantidade.value * valorUnitario
    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML = `
    <section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade  }x</span> Celular <span class="texto-azul">R$1400</span>
    </section>
    `

    // adicionar no carrinho
    // atualizar o valor total

}

function limpar(){

}