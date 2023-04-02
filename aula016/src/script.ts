// Intersection

type ProdutoZ = {
    preco: number;
};

type Carro = {
    rodas: number;
    portas: number;
};

function handleProdutoCarro(dados: Carro & ProdutoZ) {
    dados.rodas
    dados.portas
    dados.preco
}

handleProdutoCarro({rodas: 4, portas: 5, preco: 30000})

// Criando novas propriedades em Types já existentes:

type TipoCarro = {
    rodas: number;
    portas: number;
}

type TipoCarroComModelo = TipoCarro & {
    preco: number;
    modelo: string;
}

function handleTypeCarro(dado: TipoCarroComModelo) {
    dado.modelo
}
// Criando novas propriedades em Interface já existentes:

interface InterfaceCarro {
    rodas: number;
    portas: number;
}

interface InterfaceCarro {
    preco: number;
}

function handleInterfaceCarro(dado: InterfaceCarro) {
    dado.preco
}

// Add algo direto no Objeto Window (má-prática)
interface Window {
    userId: number;
}

window.userId = 7