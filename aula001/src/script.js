function somar(a, b) {
    return a + b;
}
somar(20, 30);
const car = {
    marca: 'BMW',
    modelo: 'I8',
    preco: 800.0000
};
const produto = {
    nome: 'Whatch Dogs 2',
    preco: '100'
};
function trasnformarPreco(produto) {
    produto.preco = 'R$' + produto.preco;
    return produto;
}
let verProduto = trasnformarPreco(produto);
console.log(verProduto);
export {};
//# sourceMappingURL=script.js.map