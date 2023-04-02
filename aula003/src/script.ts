type NumberOrString = number | string;
let tot: NumberOrString = 20;
tot = "30"

const x: number | string = '10'

interface InterfaceProduto {
    nome: string;
    preco: number;
    kit: boolean;
}

type TypeProduto = {
    nome: string;
    preco: number;
    kit: boolean;
}

function preencherDados(dados:TypeProduto) {
    document.body.innerHTML += `
    <div>
        <h2>${dados.nome}</h2>
        <h4>${dados.preco}</h4>
        <p>Kit: ${dados.kit ? 'Sim' : 'Não'}</p>
    </div>`
}

const pc = {
    nome: 'Pc Gamer Completo',
    preco: 1800,
    kit: true
}

const noteook = {
    nome: 'Notebook',
    preco: 2500,
    kit: false
}

type categoria = 'Código' | 'Design' | 'Descod'

function pintarCategoria(categorias: categoria) {
    if (categorias === 'Código') {
        // Façã alguma coisa
    } else if(categorias === 'Design') {
        // Façã alguma coisa
    } else if(categorias === 'Descod') {
        // Façã alguma coisa
    } else {
        throw Error("Algo de errado não está certo");
    }
}