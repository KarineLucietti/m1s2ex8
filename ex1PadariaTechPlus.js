function caixaRegistradora() {
    console.log("Lojas Tabajara");
    let contador = 1;
    let total = 0;
    let troco = 0;
    let preco;
    while (preco !== 0) {
        preco = parseFloat(prompt(`Insira o preço do produto ${contador}.` + " Quando as compras terminarem, digite o valor 0"));
        console.log(`Produto ${contador}: R$ ${preco.toFixed(2)}`);
        contador++;
        total += preco;
    }
    console.log(`Total: R$ ${total.toFixed(2)}`);
    let money = parseFloat(prompt(`Dinheiro: R$ `));
    console.log(`Dinheiro: R$ ${money.toFixed(2)}`);
    troco = money - total;
    console.log(`Troco: R$ ${troco.toFixed(2)}\n\n`);
}

while (true) caixaRegistradora();