// Type Guard (Defesa) garante a Type Safety (segurança) do dado dentro do bloco condicional. Esse preocesso é chamado de Type Narrowing (estreitamento)

// O TypeScript faz Control Flow (controle de fluxo)


function typeGuard(value: any) {
    if (typeof value === 'string') {
        return value.toLowerCase()
    }

    if (typeof value === 'number') {
        return value.toFixed()
    }

    if (value instanceof HTMLElement) {
        return value.innerText;
    }
}

typeGuard(200)
typeGuard('03102020')
typeGuard(document.body)

// O Type Guard neste caso seria a condição dentro do if, pois estamos nos ASSEGURANDO de que o tipo do dado é oque esperamos.

// Já o Type Safety seria a segurança que criamos tendo a certeza de que tudo dentro do if só será manipulado com metódos válidos para o tipo que esta dentro do if.

// E o Type Narrowing seria esse estreitamento, ou seja, essa (ou essas) limitações de data types


// E também temos o operador de JS 'in', quer verifica se tal propriedade existe no objeto que você deseja

//Exemplo: Criamos um objeto chamado obj onde temos a propriedade 'name' e verificamos se nesse objeto existe realmente essa propriedade.

const obj = {
    name: 'Erik'
}

if ('name' in obj) {
    console.log('Existe');
}

async function fetchProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const json = await response.json()
    handleProduto(json)
}

interface ProdutoX {
    nome: string;
    preco: number
}

function handleProduto(data: ProdutoX) {
    if ('preco' in data) {
        document.body.innerHTML = `
            <p>Nome: ${data.nome}</p>
            <p>Preço: ${data.preco}</p>
        `
    }
}

fetchProduto()