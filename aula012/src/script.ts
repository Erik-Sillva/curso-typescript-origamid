// async function fetchProdutos() {
//     const response = await fetch('https://api.origamid.dev/json/notebook.json');
//     const json = await response.json()
//     handleCursos(json)
// }

// function handleCursos(data: unknown) {
//     if (data instanceof Array) {
//         console.log('É uma instância de Array')
//     }
    
//     if (Array.isArray(data)) {
//         console.log('É Array')
//     }
// }


// Garante que só sera retornado true se o tipo for string
// function isString(value: unknown): value is string {
//     return typeof value === "number"
// }

// function handleDatas(data: unknown) {
//     if (isString(data)) {
//         data.toLowerCase()
//     }
// }

// handleDatas(200)
// handleDatas('Origamid')

async function fetchProdutos() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const json = await response.json();
    handleProdutos(json)
}

fetchProdutos();

interface ProdutoY {
    nome: string;
    preco: number;
}

function isProduto(value:unknown): value is ProdutoY {
    if (value && typeof value === 'object' && 'nome' in value && 'preco' in value) {
        return true;
    } else {
        return false;
    }
}

function handleProdutos(data:unknown) {
    if (isProduto(data)) {
        console.log(data.nome)
        console.log(data.preco)
    }
}