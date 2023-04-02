"use strict";
async function fetchProdutos() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const json = await response.json();
    handleProdutos(json);
}
fetchProdutos();
function isProduto(value) {
    if (value && typeof value === 'object' && 'nome' in value && 'preco' in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleProdutos(data) {
    if (isProduto(data)) {
        console.log(data.nome);
        console.log(data.preco);
    }
}
//# sourceMappingURL=script.js.map