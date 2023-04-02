"use strict";
function typeGuard(value) {
    if (typeof value === 'string') {
        return value.toLowerCase();
    }
    if (typeof value === 'number') {
        return value.toFixed();
    }
    if (value instanceof HTMLElement) {
        return value.innerText;
    }
}
typeGuard(200);
typeGuard('03102020');
typeGuard(document.body);
const obj = {
    name: 'Erik'
};
if ('name' in obj) {
    console.log('Existe');
}
async function fetchProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const json = await response.json();
    handleProduto(json);
}
function handleProduto(data) {
    if ('preco' in data) {
        document.body.innerHTML = `
            <p>Nome: ${data.nome}</p>
            <p>Preço: ${data.preco}</p>
        `;
    }
}
fetchProduto();
//# sourceMappingURL=script.js.map