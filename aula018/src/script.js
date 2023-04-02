"use strict";
console.log(document.constructor);
class ClassProduto {
    tipo = 'Jogo Eletrônico';
    nome;
    preco;
    desenvolvedores;
    constructor(nome, preco, devs) {
        this.nome = nome;
        this.preco = preco;
        this.desenvolvedores = devs;
    }
    getNome() {
        return this.nome;
    }
    getPreco() {
        return this.preco;
    }
    static getDevs(devs) {
        return `Desenvolvedores: ${devs}`;
    }
}
class SubClassProduto extends ClassProduto {
    consolInfo() {
        console.log(this.tipo);
        console.log(this.nome);
        console.log(this.getPreco());
    }
}
const game = new ClassProduto('Red Dead Redemption 2', 200, 'Rockstar Games');
const game2 = new SubClassProduto('The Last Of Us 2', 250, 'Naughty Dog');
console.log(game.tipo);
console.log(game.getNome());
console.log(game.getPreco());
console.log(ClassProduto.getDevs('Rockstar Games'));
game2.consolInfo();
console.log(SubClassProduto.getDevs('Naughty Dog'));
//# sourceMappingURL=script.js.map