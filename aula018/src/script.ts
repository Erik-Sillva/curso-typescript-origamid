console.log(document.constructor);

// Modificadores:

// public = Torna o acesso de uma propriedade pública (todas propriedades já vem como padrão public).

// readonly = Não permite que o valor da propriedade seja modificado, apenas lido.

// private = Não permite o acesso da propriedade fora da sua classe, consequentemente tendo que usar um metodo criado por você mesmo (dentro da classe onde está a propriedade que deseja ter acesso) para que ela te retorne o acesso a essa proriedade.

// protected = Faz a mesma coisa que a private, a diferença é que com protected você também poderá ter acesso a essa propriedade em subclasses (ou seja, classes que extendem de outras) diferente da private que não da acesso direto de propriedades que contenham private, para as suas subclasses também.

// static = Só permite o acesso se for chamado diretamente pela class, e não pelas suas intâncias.

class ClassProduto {
    readonly tipo = 'Jogo Eletrônico';
    protected nome: string;
    private preco: number;
    private desenvolvedores: string;
    constructor(nome: string, preco: number, devs: string) {
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
    static getDevs(devs: string) {
        return `Desenvolvedores: ${devs}`
    }
}

class SubClassProduto extends ClassProduto {
    consolInfo() {
        console.log(this.tipo)
        console.log(this.nome)
        console.log(this.getPreco())
    }
}

const game = new ClassProduto('Red Dead Redemption 2', 200, 'Rockstar Games');
const game2 = new SubClassProduto('The Last Of Us 2', 250, 'Naughty Dog')
console.log(game.tipo)
console.log(game.getNome())
console.log(game.getPreco())
console.log(ClassProduto.getDevs('Rockstar Games'))

game2.consolInfo()
console.log(SubClassProduto.getDevs('Naughty Dog'))