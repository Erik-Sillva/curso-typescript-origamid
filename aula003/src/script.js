"use strict";
let tot = 20;
tot = "30";
const x = '10';
function preencherDados(dados) {
    document.body.innerHTML += `
    <div>
        <h2>${dados.nome}</h2>
        <h4>${dados.preco}</h4>
        <p>Kit: ${dados.kit ? 'Sim' : 'Não'}</p>
    </div>`;
}
const pc = {
    nome: 'Pc Gamer Completo',
    preco: 1800,
    kit: true
};
const noteook = {
    nome: 'Notebook',
    preco: 2500,
    kit: false
};
function pintarCategoria(categorias) {
    if (categorias === 'Código') {
    }
    else if (categorias === 'Design') {
    }
    else if (categorias === 'Descod') {
    }
    else {
        throw Error("Algo de errado não está certo");
    }
}
//# sourceMappingURL=script.js.map