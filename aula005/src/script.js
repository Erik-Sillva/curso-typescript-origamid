"use strict";
class Produto {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
class Livro extends Produto {
    autor;
    constructor(nome, autor) {
        super(nome);
        this.autor = autor;
    }
}
class Jogo extends Produto {
    jogadores;
    constructor(nome, jogadores) {
        super(nome);
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
    if (busca === 'O Hobbit') {
        return new Livro('O Hobbit', 'Autor: J. R. R. Tolkien');
    }
    if (busca === 'Dark Souls') {
        return new Jogo('Dark Souls', `N° de jogadores ${1}`);
    }
    return null;
}
const produto = buscarProduto('O Hobbit');
if (produto instanceof Livro) {
    console.log(produto.autor);
}
if (produto instanceof Jogo) {
    console.log(produto.jogadores);
}
//# sourceMappingURL=script.js.map