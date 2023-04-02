class Produto {
    nome: string
    constructor(nome: string) {
        this.nome = nome
    }
}

class Livro extends Produto {
    autor: string

    constructor(nome: string, autor:string) {
        super(nome)
        this.autor = autor
    }
}

class Jogo extends Produto {
    jogadores: number | string

    constructor(nome: string, jogadores:number | string) {
        super(nome)
        this.jogadores = jogadores
    }
}

function buscarProduto(busca:string) {
    if (busca === 'O Hobbit') {
        return new Livro('O Hobbit', 'Autor: J. R. R. Tolkien')
    }

    if (busca === 'Dark Souls') {
        return new Jogo('Dark Souls', `N° de jogadores ${1}`)
    }

    return null
}

const produto = buscarProduto('O Hobbit')

if (produto instanceof Livro) {
    console.log(produto.autor)
}

if (produto instanceof Jogo) {
    console.log(produto.jogadores)
}